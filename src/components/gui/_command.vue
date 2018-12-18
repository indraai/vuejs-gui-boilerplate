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
  <section :class="{ IndraCommand:true, communicating:false, fullscreen:fullscreen }" id="IndraCommand">
    <button class="command-fullscreen btn btn-primary" type="button" @click="goFull" rel="fullscreen"><i class="icn icn-frame-expand"></i></button>
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
              <div class="string" v-if="convo.data.data.format === 'string'" v-html="convo.data.data.result"></div>
              <IndraCmdTwitter v-if="convo.data.data.format === 'twitter'" :convo="convo.data.data"></IndraCmdTwitter>
              <IndraCmdYoutube v-if="convo.data.data.format === 'youtube'" :convo="convo.data.data"></IndraCmdYoutube>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <form class="command-input" method="post" lpformnum="1" v-on:submit.prevent.stop="ask" autocomplete="off">
      <input name="input" ref="command" type="text" maxlength="300"
        v-model="question"
        v-if="smallbig"
        @keyup.up.prevent="prevCommand"
        @keyup.down.prevent="nextCommand"/>
      <textarea name="textarea" ref="commandText" v-model="question" v-if="!smallbig" :class="{'large':isLargeText}"></textarea>
    </form>
  </section>
</template>

<script>
// template javascript
import IndraCmdTwitter from './command/twitter.vue';
import IndraCmdYoutube from './command/youtube.vue';

export default {
  name: 'IndraCmd',
  components: {
    IndraCmdTwitter,
    IndraCmdYoutube,
  },
  data() {
    return {
      fullscreen: false,
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
    goFull() {
      this.fullscreen = !this.fullscreen;
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
    bottom: 1rem
    left: 15%
    right: 15%
    width: 70%
    padding: 0
    height: 50%
    display: flex
    flex-flow: column nowrap
    background-color: transparent
    overflow: visible

    &.fullscreen
      height: calc(100% - 2rem)
      left: 1rem
      right: 1rem
      width: calc(100% - 2rem)

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
      &-fullscreen
        color: $colors.white
        position: absolute
        top: -1rem
        right: -1rem
        font-size: 1rem
        line-height: 1
        border-radius: 1rem
        &:hover
          color: $colors.air

      &-frame
      &-input
        transition: $transition
        box-shadow: 0 0 1rem rgba($colors.blue, .3)
        border: 1px solid rgba($colors.blue, .3)
        border-radius: 1rem
        background-color: darken($colors.charcoal, 75%)

      &-frame
        flex: 1 0
        padding: .5rem
        margin-bottom: .5rem
        overflow: hidden
        padding: .5rem
        background-color: rgba($colors.charcoal, .85)
        display: flex
        flex-flow: column nowrap

      &-conversation
        flex: 1
        background-color: darken($colors.charcoal, 75%)
        overflow: auto
        border-radius: .5rem
        box-shadow: inset 0 0 9px rgba($colors.blue, .5)
        padding: 1rem .5rem

      &-input
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
          color: $colors.orange-lt
          font-weight: normal

        textarea
          min-height: 100px
          line-height: 1.5
          &.large
            min-height: 300px

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
