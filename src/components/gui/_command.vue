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
  <section :class="{IndraCommand:true, communicating:false}" id="IndraCommand">
    <article class="command-answers" id="command_answers">
      <div class="command-answer" v-for="answer in answers">
        <div class="command-q">{{answer.q.text}}</div>
        <div class="command-a">
          <span class="command-a-text" v-text="answer.a.text"></span>
          <div v-if="answer.a.data">
            <div v-if="answer.a.data.format === 'twitter'">
              <div class="tweet" v-if="answer.a.data.type === 'tweet'" v-html="answer.a.data.result.text">
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
    <form class="command-form" method="post" lpformnum="1" v-on:submit.prevent.stop="ask" autocomplete="off">
      <input name="input" ref="command" type="text" v-model="question" maxlength="300"/>
    </form>
  </section>
</template>

<script>
// template javascript

export default {
  name: 'IndraCmd',
  components: {},
  computed: {
    question: {
      get() {
        return this.$store.getters['gui/question'];
      },
      set(newValue) {
        this.$store.dispatch('gui/question', newValue)
      },
    },
    answers() {
      return this.$store.getters['gui/answers'];
    }
  },
  methods: {
    ask() {
      this.$store.dispatch('gui/ask');
    },
  },
  updated() {
    const container = document.getElementById("command_answers");
    container.scrollTop = container.scrollHeight;

    if (this.$refs.command) this.$refs.command.focus();
  },
  created() {},
  destroyed() {}
}
</script>

<style lang="stylus" scoped>
  // custom template styles
  @require '../../styles/vars'
  .IndraCommand
    position: fixed
    bottom: 0
    left: 0
    right: 0
    width: 100%
    padding: 0
    height: 40%
    background-color: darken($colors.charcoal, 50%)
    display: flex
    flex-flow: column nowrap
    .command
      &-answers
        flex: 1
        overflow: auto
      &-input
        flex: 0
        height:50px

      &-a
      &-q
        padding: .25rem .5rem
        &::before
          display: inline-block
          width: 1.3rem
      &-a
        color: $colors.earth
        &::before
          content: "A: "

        .tweet
          color: $colors.orange-lt
          border: 1px solid rgba($colors.blue, .5)
          border-radius: .3rem
          padding: .3rem
          margin-top: .3rem
          &::before
            content: 'Tw: '
            color: lighten($colors.blue, 50%)
      &-q
        color: $colors.blue
        &::before
          content: "Q: "

    input[type="text"]
      font-size: 1.2rem
      transition: $transition
      box-shadow: inset 0 0 1.3rem rgba($colors.earth, 50%)
      background: black
      padding: .5rem 1rem
      margin: 0
      border: none
      width: 100%
      border-radius: 0
      color: $colors.earth
      font-weight: normal

</style>
