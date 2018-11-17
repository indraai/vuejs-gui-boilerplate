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
  <nav>
    <a href="#header" v-smooth-scroll><i class="icn-home"></i><br>Home</a>
    <a href="#code" v-smooth-scroll="{offset:-100}"><i class="icn-code"></i><br>Code</a>
    <a href="#technology" v-smooth-scroll="{offset:-100}"><i class="icn-rocket"></i><br>Tech</a>
    <a href="#elements" v-smooth-scroll="{offset:-100}"><i class="icn-paperclip"></i><br>Elements</a>
    <a href="#information" v-smooth-scroll="{offset:-100}"><i class="icn-eye"></i><br>Info</a>
  </nav>
</template>

<script>
// template javascript

export default {
  name: 'IndraMenu',
  data() {
    return {
      offset: 0,
    }
  },
  components: {},
  computed: {},
  methods: {
    sticky(event) {
      if (window.pageYOffset >= this.offset) {
        this.$el.classList.add('sticky');
      }
      else {
        this.$el.classList.remove('sticky')
      }
    }
  },
  mounted() {
    this.offset = this.$el.offsetTop;
    window.addEventListener('scroll', this.sticky);
  },
  destroyed() {
    window.removeEventListener('scroll', this.sticky);
  }
}
</script>

<style lang="stylus" scoped>
// custom template styles
  @require('../../styles/vars')
  nav
    font-size: .8rem
    display: flex
    flex-flow: row nowrap
    align-items: center
    justify-content: center
    align-content: center
    background-color: $colors.charcoal

    &.sticky
      position: fixed
      top: 0
      left: 0
      right: 0
      z-index: 100

    a
      transition: $transition
      text-decoration: none
      display: inline-block
      text-align: center
      padding: 1rem
      width: 75px
      height: 100%
      color: $colors.fire
      text-shadow: 0 0 3px darken($colors.fire, 30%)

      &:hover
        color: $colors.blue
        text-shadow: 0 0 9px darken($colors.blue, 50%)
      &:active
      &:focus
        color: $colors.earth
        text-shadow: 0 0 9px darken($colors.earth, 50%)

      i
        font-size: 2rem
</style>
