<!--
Copyright 2018 Quinn Michaels

This file is part of Indra VueJs Gui Boilerplate

Indra VueJs Gui Boilerplate is free software:
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
  <section class="chuck-example">
    <h1><i class="icn icn-bullhorn"></i> Chuck Norris Jokes</h1>
    <article class="joke-box">
      <div class="chuck-joke" v-html="joke"></div>
      <button class="btn btn-warning" @click="askChuck"><img :src="bot.avatar" alt="" class="icon"></button>
    </article>
  </section>
</template>

<script>
// template javascript

export default {
  name: 'IndraChuck',
  components: {},
  computed: {
    bot() {
      return this.$store.getters['chuck/bot'];
    },
    communicating() {
      return this.$store.getters['chuck/communicating'];
    },
    joke() {
      return this.$store.getters['chuck/joke'];
    }
  },
  methods: {
    askChuck() {
      this.$store.dispatch('chuck/askChuck');
    }
  },
  created() {},
  destroyed() {},
}
</script>

<style lang="stylus" scoped>
// custom template styles
  @require '../../styles/vars'

  .chuck-example

    .btn
      border-radius: 50%
      margin-top: .5rem

    .joke-box
      text-align: center
      padding: 1rem

    .chuck-joke
      width: 500px
      margin: auto
      font-size: 1.5rem
      border: 1px solid $colors.charcoal
      border-bottom: none
      border-radius: 5rem
      background-color: lighten($colors.charcoal, 20%)
      color: lighten($colors.charcoal, 75%)
      padding: 2rem

</style>
