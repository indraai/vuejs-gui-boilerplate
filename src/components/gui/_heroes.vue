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
  <section class="IndraHeroes" id="IndraHeroes">
    <h1>heroes</h1>
    <article class="heroes">
      <div class="heroes-data" v-for="leader in heroes.data">
        <div @click="mention(leader.screen_name)" class="heroes-data-name" v-html="leader.screen_name"></div>
        <!-- <div class="leader-data-count" v-html="leader.count"></div> -->
      </div>
    </article>
  </section>
</template>

<script>
// template javascript

export default {
  name: 'IndraHeroes',
  components: {},
  computed: {
    heroes() {
      return this.$store.getters['gui/heroes']
    },
  },
  methods: {
    mention(screen_name) {
      return this.$store.dispatch('gui/question', `@${screen_name} `)
    }
  },
  created() {},
  destroyed() {
    this.$store.dispatch('gui/heroes', []);
  },
}
</script>

<style lang="stylus" scoped>
  // custom template styles
  @require '../../styles/vars'
  .IndraHeroes
    color: $colors.earth
    background-color: darken($colors.earth, 90%)
    box-shadow: inset 0 0 1rem rgba($colors.earth, .25)

    > h1
      background-color: rgba($colors.earth, .1)
      box-shadow: inset 0 0 1rem rgba($colors.earth, .5)

    .heroes
      &-data
        display: flex
        flex-flow: row nowrap

        &-name
          transition: $transition
          flex: 1 0 auto
          &:hover
            cursor: pointer
            color: lighten($colors.earth, 75%)
            text-shadow: 0 0 3px lighten($colors.earth, 50%)
        &-count
          flex: 0

</style>
