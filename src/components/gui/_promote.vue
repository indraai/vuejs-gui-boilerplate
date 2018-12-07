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
  <section class="IndraPromote" id="IndraPromote">
    <article class="promote"></article>
  </section>
</template>

<script>
// template javascript

export default {
  name: 'IndraPromote',
  components: {},
  computed: {
    promote() {
      return this.$store.getters['gui/promote']
    },
  },
  methods: {},
  created() {},
  destroyed() {
    this.$store.dispatch('gui/friends', []);
  }
}
</script>

<style lang="stylus" scoped>
  // custom template styles
  @require '../../styles/vars'
  #IndraPromote
    position: fixed
    top: 0
    right: 0
    left: 0
    height:70px
    width: 100%
    padding: 0

    .promote
      background: $colors.charcoal
      color: lighten($colors.charcoal, 75%)
      position: relative
      min-height: 5rem
      border-radius: .3rem

      &::before
        content: 'Promote'
        display: inline-block
        transform: rotate(-90deg)
        position: absolute
        left: -.7rem
        top: 1.5rem
        text-align: right
        padding: .2rem
</style>
