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
  <section class="IndraParty" id="IndraParty">
    <h1>party</h1>
    <article class="party">
      <div class="party-item" v-for="member in party">
        {{member.screen_name}}
      </div>
    </article>
  </section>
</template>

<script>
// template javascript

export default {
  name: 'IndraParty',
  components: {},
  computed: {
    party() {
      return this.$store.getters['gui/party']
    },
  },
  methods: {},
  created() {},
  destroyed() {
    this.$store.dispatch('gui/party', []);
  }
}
</script>

<style lang="stylus" scoped>
  // custom template styles
  @require '../../styles/vars'
  .IndraParty
    color: $colors.water
    background-color: darken($colors.water, 90%)
    box-shadow: inset 0 0 1rem rgba($colors.water, .25)
    > h1
      background-color: rgba($colors.water, .1)
      text-shadow: 0 0 3px rgba(darken($colors.water, 50%), .5)
      box-shadow: inset 0 0 1rem rgba($colors.water, .5)
    .party-item
      transition: $transition
      &:hover
        cursor: pointer
        color: lighten($colors.water, 75%)
        text-shadow: 0 0 3px lighten($colors.water, 50%)

</style>
