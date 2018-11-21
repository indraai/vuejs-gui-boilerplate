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
  <div :class="{'chat': true, 'open': open}">
    <div class="chat-btn">
      <button type="submit" class="btn btn-primary" name="chat-text-submit" @click="openChat"><i class="icn heads-indra-s"></i></button>
    </div>
    <div class="chat-window">
      <article class="chat-conversation" id="chat_container">
        <div v-for="convo in conversation" class="chat-conversation-item">
          <div class="chat-item">{{convo.user}} {{convo.text}}</div>
        </div>
      </article>
      <form class="chat-input" v-on:submit.prevent.stop="askQuestion">
        <input type="text" name="chat-input-text" v-model="question" autocomplete="off">
        <button type="submit" class="btn btn-primary" name="chat-text-submit"><i class="icn icn-bubble"></i></button>
      </form>
    </div>
  </div>
</template>

<script>
// template javascript

export default {
  name: 'IndraChat',
  components: {},
  computed: {
    title() {
      return this.$store.getters['chat/title']
    },
    description() {
      return this.$store.getters['chat/description']
    },
    open() {
      return this.$store.getters['chat/open']
    },
    question: {
      get() {
        return this.$store.getters['chat/question']
      },
      set(data) {
        return this.$store.dispatch('chat/question', data)
      }
    },
    conversation() {
      return this.$store.getters['chat/conversation'];
    }
  },
  methods: {
    openChat() {
      return this.$store.dispatch('chat/open');
    },
    askQuestion() {
      return this.$store.dispatch('chat/askQuestion');
    },
  },
  updated() {
    const container = document.getElementById("chat_container");
    container.scrollTop = container.scrollHeight;
  },
  created() {}
}
</script>

<style lang="stylus" scoped>
  // custom template styles
  @require '../../styles/vars'

  .chat
    transition: $transition
    background-color: transparent
    position: fixed
    height: 100%
    bottom: 0
    right: 9rem - $chat-width
    width: $chat-width
    padding: 0
    margin: 0

    display: flex
    flex-flow: row nowrap
    z-index: 999

    align-items: flex-end

    &-btn
      flex: 0
      text-align: right
      padding: 0 0 4rem 0

      .btn
        box-shadow: 0 0 9px $colors.charcoal
        border-radius: 10rem 0 0 10rem
        padding: .25rem

    &-window
      background-color: $colors.white
      box-shadow: 0 0 9px $colors.charcoal
      height: 100%
      flex: 1
      display: flex
      flex-flow: column nowrap
      overflow: hidden
      border-left: 3px solid $colors.blue

    &-conversation
      flex: 1 auto
      padding: 1rem
      overflow: auto

      &-item
        padding: .25rem
        font-size: 1.5rem

    &-input
      flex: 0 75px
      min-height: 75px
      display: flex
      flex-flow: row nowrap
      padding: 0
      margin: 0
      border-top: 3px solid $colors.blue

      input[type="text"]
        margin: 0
        padding: 1rem
        border-radius: 0
        border: 0
        background-color: $colors.charcoal
        color: $colors.earth
        font-weight: bold

      .btn
        flex: 0 4rem
        border-radius: 0
  &.open
    top: 0
    right: 0
    bottom: 0
    height: 100%


</style>
