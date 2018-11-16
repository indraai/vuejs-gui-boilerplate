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
    <a href="#headings" v-smooth-scroll><i class="icn-text-format"></i><br>Headings</a>
    <a href="#lists" v-smooth-scroll><i class="icn-list"></i><br>Lists</a>
    <a href="#alerts" v-smooth-scroll><i class="icn-bullhorn"></i><br>Alerts</a>
    <a href="#forms" v-smooth-scroll><i class="icn-highlight"></i><br>Forms</a>
    <a href="#buttons" v-smooth-scroll><i class="icn-pointer-down"></i><br>Buttons</a>
    <a href="#colors" v-smooth-scroll><i class="icn-leaf"></i><br>Colors</a>
    <a href="#icons" v-smooth-scroll><i class="icn-thumbs-up"></i><br>Icons</a>
    <a href="#examples" v-smooth-scroll><i class="icn-bookmark"></i><br>Examples</a>
    <a href="#examples" v-smooth-scroll><i class="icn-eye"></i><br>Info</a>
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

<style lang="stylus">
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
    padding: 1rem

    &.sticky
      position: fixed
      top: 0
      left: 0
      right: 0
      z-index: 100

    a
      text-decoration: none
      display: inline-block
      text-align: center
      width: 75px
      color: $colors.orange-lt

      i
        font-size: 2rem
</style>
