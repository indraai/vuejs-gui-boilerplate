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
  <nav :class="{'menu': true, 'chat-open': chatOpen}">
    <div class="menu-small">
      <div class="menu-title">indra.design</div>
      <button class="menu-button icn icn-menu" @click="toggle"></button>
      <div class="menu-items" v-if="open">
        <a v-for="item in items" :href="item.href" v-smooth-scroll="{offset:-50}" @click="toggle"><i :class="item.class"></i><span>{{item.text}}</span></a>
      </div>
    </div>
    <div class="menu-big">
      <div class="menu-title">indra.design</div>
      <div class="menu-items">
        <a v-for="item in items" :href="item.href" v-smooth-scroll="{offset:-100}"><i :class="item.class"></i><span>{{item.text}}</span></a>
      </div>
    </div>
  </nav>
</template>

<script>
// template javascript

export default {
  name: 'IndraMenu',
  components: {},
  computed: {
    open() {
      return this.$store.getters['menu/open']
    },
    items() {
      return this.$store.getters['menu/items']
    },
    chatOpen() {
      return this.$store.getters['chat/open']
    },
  },
  methods: {
    sticky(event) {
      if (window.pageYOffset >= this.offset) {
        this.$el.classList.add('sticky');
      }
      else {
        this.$el.classList.remove('sticky')
      }
    },
    toggle() {
      this.$store.dispatch('menu/toggle');
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
  $menu-color = lighten($colors.charcoal, 80%)


  .menu
    position: fixed
    top: 0
    left: 0
    right: 0
    background-color: $colors.charcoal
    color: $menu-color

    &-small
      display: flex
      flex-flow: row wrap
      padding: .5rem
    &-big
      display: none

    &-title
      flex: 1
      font-size: 1.3rem
    &-dropdown
      flex: 1

    &-button
      font-size: 2rem
      color: $menu-color

    &-items
      flex: 1 100%
      flex-flow: row wrap
      display: flex
      justify-content: center
      align-items: center
      align-content: center
      padding: .5rem
      a
        flex: 0
        text-align: center
        color: $menu-color
        text-decoration: none
        padding: 1rem

        &:hover
          color: $colors.blue
        &:active
        &:focus
          color: $colors.earth

        .icn
          display: block
          font-size: 4rem

@media screen and (min-width: 900px)
  .menu
    transition: $transition
    position: relative
    &-small
      display: none
    &-big
      display: flex

    &-title
      display: none
      flex: 0

    &-items
      flex: 1
      a
        flex: 0 auto
        padding: 1rem

        .icn
          font-size: 2em
          height: 2rem

    &.sticky
      position: fixed
      top: 0
      left: 0
      right: 0
      z-index: 100
      padding: 1rem

      .menu-title
        display: inline-block
        font-size: 2rem
        flex: 0

      .menu-items
        justify-content: flex-end

      a
        font-size: 1.2rem
        width: auto
        padding: .5rem

      .icn
        font-size: .75em
        margin-right: .3em
        height: inherit
        display: inline-block

    &.chat-open
      margin-right: $chat-width - $chat-gap

</style>
