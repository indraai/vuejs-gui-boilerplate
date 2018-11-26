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
  <div id="app">
    <IndraHeader></IndraHeader>
    <IndraMenu></IndraMenu>
    <router-view class="view"></router-view>
    <IndraFooter></IndraFooter>
  </div>
</template>

<script>
  // in this part of the component we see basic data creation where we can look through colors and set the text of the heading tags from the data.
  import IndraHeader from './components/header/index.vue';
  import IndraFooter from './components/footer/index.vue';
  import IndraMenu from './components/menu/index.vue';
  export default {
    name: 'App',
    components: {
      IndraHeader,
      IndraFooter,
      IndraMenu,
    },
    data() {
      return {};
    },
    computed: {},
    methods: {},
    beforeCreate() {
      this.$store.dispatch('blog/loadTopics');
      this.$store.dispatch('gallery/loadItems')
    }
  }
</script>

<style lang="stylus">
// here we import al the base styles into the template for use
// then belo that we can overwrite or modify or create any necessary styles for the current template.
  @require './styles'

  #app
    margin: auto
    background-color: $colors.white
    overflow: hidden

    > section
      padding: 2rem

  .colors
    margin: 1rem
    .items
      > div
        margin: .3rem
        font-size: 1.5rem
        padding: 1rem

  .items
    margin: 1rem

  .icons
    .items
      display: flex
      flex-flow: row wrap
      align-items: center
      align-content: center
      justify-content: center
      text-align: center
      span
        flex: 1 auto
        padding: 1rem
        display: inline-block
        i
          font-size: 2rem
</style>
