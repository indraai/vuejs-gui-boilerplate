<!--
Copyright 2018 Quinn Michaels
This file is part of indra.design

indra.design is free software:
you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Foobar is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Foobar.  If not, see <https://www.gnu.org/licenses/>.
 -->

<template>
  <section :class="{ IndraCommand:true, communicating:false, [screen]:screen }" id="IndraCommand">
    <div class="command-window-buttons">
      <button class="command-minimize btn btn-primary" type="button" @click="goScreen('minimize')" rel="minimize"><i class="icn icn-frame-contract"></i></button>
      <button class="command-fullscreen btn btn-primary" type="button" @click="goScreen('fullscreen')" rel="fullscreen"><i class="icn icn-frame-expand"></i></button>
    </div>
    <div class="command-frame">
      <div class="command-me" v-if="me">
        <div class="thumb"><img :src="me.profile_image_url_https" alt=""></div>
        <div class="profile">
          {{me.name}} (@{{me.screen_name}})<br>
        </div>
        <div class="stats">
          <div class="followers" v-html="me.followers_count"></div>
          <div class="friends" v-html="me.friends_count"></div>
          <div class="statuses" v-html="me.statuses_count"></div>
        </div>
      </div>
      <div class="command-conversation" id="command_conversation">
        <div class="convo" v-for="convo in conversation">
          <div class="convo-q" v-if="convo.type === 'question'">{{convo.text}}</div>
          <div class="convo-a" v-if="convo.type === 'answer'">
            <span class="convo-a-text" v-text="convo.data.text"></span>
            <div class="convo-a-data" v-if="convo.data.data">
              <div class="string" v-if="convo.data.data.format === 'stream'" v-html="convo.data.data.result"></div>
              <IndraCmdTwitter v-if="convo.data.data.format === 'twitter'" :convo="convo.data.data"></IndraCmdTwitter>
              <IndraCmdYoutube v-if="convo.data.data.format === 'youtube'" :convo="convo.data.data"></IndraCmdYoutube>
              <IndraCmdWiki v-if="convo.data.data.format === 'wiki'" :convo="convo.data.data"></IndraCmdWiki>
              <div class="string" v-if="convo.data.data.format === 'status'" v-html="convo.data.data.result"></div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <form class="command-form" method="post" lpformnum="1" v-on:submit.prevent.stop="ask" autocomplete="off">
      <input name="input" ref="command" type="text" maxlength="300"
        v-model="question"
        v-if="smallbig"
        @keyup.up.prevent="prevCommand"
        @keyup.down.prevent="nextCommand"/>
      <div v-if="!smallbig" class="textarea">
        <textarea name="textarea" ref="commandText"
          :class="{'large':isLargeText}"
          v-model="question"></textarea>
        <button type="submit" class="btn submit"><i class="icn icn-bubble"></i></button>
      </div>
    </form>
  </section>
</template>

<script>
// template javascript
import IndraCmdTwitter from './command/twitter.vue';
import IndraCmdYoutube from './command/youtube.vue';
import IndraCmdWiki from './command/wiki.vue';

export default {
  name: 'IndraCmd',
  components: {
    IndraCmdTwitter,
    IndraCmdYoutube,
    IndraCmdWiki,
  },
  data() {
    return {
      screen: 'normal',
      cmdIndex: 0,
    }
  },
  computed: {
    me() {
      return this.$store.getters['gui/me'];
    },
    commands() {
      return this.$store.getters['gui/commands'];
    },
    question: {
      get() {
        return this.$store.getters['gui/question'];
      },
      set(newValue) {
        this.$store.dispatch('gui/question', newValue)
      },
    },
    smallbig() {
      if (!this.question) return true;
      return this.question.length < 145;
    },
    isLargeText() {
      return this.question.length > 250;
    },
    conversation() {
      return this.$store.getters['gui/conversation'];
    },
  },
  methods: {
    ask() {
      this.cmdIndex = 0;
      this.$store.dispatch('gui/ask');
    },
    goScreen(screen) {
      if (screen === 'fullscreen' && this.screen === 'fullscreen') this.screen = 'normal';
      else if (screen === 'fullscreen' && this.screen === 'minimize') this.screen = 'normal';
      else this.screen = screen;
    },
    prevCommand() {
      if (!this.commands) return;
      const lc = this.commands[this.cmdIndex];
      this.cmdIndex = this.cmdIndex === this.commands.length - 1 ? this.cmdIndex : this.cmdIndex + 1;
      return this.question = lc
    },
    nextCommand() {
      if (!this.commands) return;
      const lc = this.commands[this.cmdIndex];
      this.cmdIndex = this.cmdIndex === 0 ? this.cmdIndex : this.cmdIndex - 1;
      return this.question = lc
    },
  },
  updated() {
    const container = document.getElementById("command_conversation");
    container.scrollTop = container.scrollHeight;

    if (this.$refs.command) this.$refs.command.focus();
    if (this.$refs.commandText) this.$refs.commandText.focus();
  },
  created() {},
  destroyed() {}
}
</script>

<style lang="stylus" scoped>
  // custom template styles
  @require '../../styles/vars'
  .IndraCommand
    transition: $transition
    position: fixed
    top: calc(50% - .5rem)
    left: 20%
    right: 20%
    bottom: .5rem
    width: 60%
    padding: 0
    height: 50%
    display: flex
    flex-flow: column nowrap
    background-color: transparent
    overflow: visible

    &.fullscreen
      height: 100%
      top: 0
      left: 0
      right: 0
      bottom: 0
      width: 100%
      background-color: $colors.charcoal

      .command-frame
      .command-form
        border-radius: 0
        margin: 0
        border: none

    &.minimize
      .command-frame
      .command-form
      .command-minimize
        display: none

      .command-window-buttons
        top: auto
        bottom: .5rem
        position: fixed
        right: .5rem
        z-index: 1000

        .command-fullscreen
          font-size: 1.5rem
          height: 50px
          width: 50px
          line-height: 0

    .command
      &-me
        display: flex
        flex-flow: row nowrap
        align-content: center
        align-items: center
        padding: .5rem

        .thumb
          flex: 0
          padding-right: .5rem
          img
            width: 26px
            height: 26px
            border-radius: 13px

        .profile
          flex: 1
          font-size: 1.2rem
          line-height: 1

        .stats
          flex: 0
          display: flex
          flex-flow: row nowrap
          > div
            padding: 0 .5rem
          .followers::before
            content: "fol:"
          .friends::before
            content: "fri:"
          .statuses::before
            content: "sta:"

      &-window-buttons
        transition: $transition
        position: absolute
        top: 1px
        border-radius: 0 0 0 10px
        line-height: 0
        right: .5rem
        font-size: 1rem
        line-height: 1
        z-index: 10

        background: darken($colors.charcoal, 75%)
      &-fullscreen
      &-minimize
        line-height: 0
        background: transparent
        color: $colors.white
        &:hover
          color: $colors.air


      &-frame
      &-form
        transition: $transition
        box-shadow: 0 0 1rem rgba($colors.blue, .3)
        border: 1px solid rgba($colors.blue, .3)
        border-radius: .5rem
        background-color: darken($colors.charcoal, 75%)

      &-frame
        flex: 1 0
        padding: .5rem
        margin-bottom: .5rem
        overflow: hidden
        padding: .5rem
        display: flex
        flex-flow: column nowrap

      &-conversation
        flex: 1
        overflow: auto
        border-radius: .5rem
        padding: 1rem .5rem

      &-form
        flex: 0
        padding: .5rem

        input[type="text"]
        textarea
          background: transparent
          font-size: 1.2rem
          padding: .5rem 1rem
          margin: 0
          border: none
          width: 100%
          border-radius: 0
          color: $colors.earth
          font-weight: normal

        textarea
          min-height: 100px
          line-height: 1.5
          &.large
            min-height: 300px

        .textarea
          display: flex

          .submit
            background-color: transparent
            color: $colors.water
            border: none
            font-size: 4rem
            &:hover
              color: $colors.fire
              text-shadow: 0 0 9px rgba($colors.air, .5)

    .convo-a
    .convo-q
      padding: .25rem .5rem
      &::before
        display: inline-block
        width: 1.3rem
    .convo-a
      color: $colors.air
      &::before
        content: "A: "


    .convo-q
      color: $colors.earth
      &::before
        content: "Q: "


</style>
