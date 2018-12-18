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
  <section class="IndraStream" id="IndraStream">
    <h1>stream</h1>
    <article class="stream">
      <div class="stream-item" v-for="item in stream">
        {{item.user.screen_name}}
      </div>
    </article>
  </section>
</template>

<script>
// template javascript

export default {
  name: 'IndraStream',
  components: {},
  computed: {
    stream() {
      return this.$store.getters['gui/stream']
    },
  },
  methods: {},
  created() {},
  destroyed() {
    this.$store.dispatch('gui/stream', []);
  }
}
</script>

<style lang="stylus" scoped>
  // custom template styles
  @require '../../styles/vars'
  .IndraStream
    color: $colors.fire
    background-color: darken($colors.fire, 90%)
    box-shadow: inset 0 0 1rem rgba($colors.fire, .25)
    > h1
      background-color: rgba($colors.fire, .1)
      text-shadow: 0 0 3px rgba(darken($colors.fire, 50%), .5)
      box-shadow: inset 0 0 1rem rgba($colors.fire, .5)
    .stream
      &-item
        transition: $transition
        &:hover
          cursor: pointer
          color: lighten($colors.fire, 75%)
          text-shadow: 0 0 3px lighten($colors.fire, 50%)

</style>
