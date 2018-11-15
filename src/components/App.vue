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
  <main id="app">
    <h1 v-text="title"></h1>
    <p v-text="describe"></p>
    <section class="container-col">
      <caption>Regular Headings</caption>
      <h1 v-text="h1"></h1>
      <h2 v-text="h2"></h2>
      <h3 v-text="h3"></h3>
      <h4 v-text="h4"></h4>
      <h5 v-text="h5"></h5>
      <h6 v-text="h6"></h6>
      <caption>These are the display classes for headings.  They are slightly larger than normal headings.</caption>
      <h1 class="display" v-text="h1"></h1>
      <h2 class="display" v-text="h2"></h2>
      <h3 class="display" v-text="h3"></h3>
      <h4 class="display" v-text="h4"></h4>
      <h5 class="display" v-text="h5"></h5>
      <h6 class="display" v-text="h6"></h6>
    </section>
    <caption>Check out these form elements in development for your 👀.</caption>
    <section class="container-col">
      <form>
        <div><button>button</button></div>
        <div><button class="sm">small button</button></div>
        <div><button class="lg">large button</button></div>
        <div><input type="text" name="text" placeholder="Input..."></div>
        <div><textarea name="textarea" placeholder="Textarea..."></textarea></div>
      </form>
    </section>
    <caption>These are the color classes</caption>
    <section class="colors">
      <div v-for="color in (colors)">
        <div :class="colorText(color)"><strong>{{color}}</strong>The color text</div>
        <div :class="colorBg(color)"><strong>{{color}}</strong>The color background</div>
        <div :class="colorBorder(color)"><strong>{{color}}</strong>The color border</div>
      </div>
    </section>
    <caption>These are the various icons that are included using the Linear Icons Free package.</caption>
    <section class="icons">
      <div>
        <span v-for="icon in icons"><i :class="iconClass(icon)"></i><br>.icn-{{icon}}</span>
      </div>
    </section>
  </main>
</template>

<script>
  // in this part of the component we see basic data creation where we can look through colors and set the text of the heading tags from the data.
  export default {
    name: 'App',
    data() {
      return {};
    },
    computed: {
      h1() {
        return this.$store.getters['global/h1'];
      },
      h2() {
        return this.$store.getters['global/h2'];
      },
      h3() {
        return this.$store.getters['global/h3'];
      },
      h4() {
        return this.$store.getters['global/h4'];
      },
      h5() {
        return this.$store.getters['global/h5'];
      },
      h6() {
        return this.$store.getters['global/h6'];
      },
      colors() {
        return this.$store.getters['global/colors'];
      },
      icons() {
        return this.$store.getters['global/icons'];
      },
      title() {
        return this.$store.getters['global/title'];
      },
      describe() {
        return this.$store.getters['global/describe'];
      },
    },
    methods: {
      colorText(color) {
        return `${color}-txt`;
      },
      colorBg(color) {
        return `${color}-bg`;
      },
      colorBorder(color) {
        return `${color}-border`;
      },
      iconClass(icon) {
        return `icn-${icon}`
      }
    },
    components: {}
  }
</script>

<style lang="stylus">
// here we import all the base styles into the template for use
// then below that we can overwrite or modify or create any necessary styles for the current template.
  @require '../styles'

  .colors
    margin: 1rem
    > div
      > div
        margin: .3rem
        font-size: 1.5rem
        padding: 1rem

  .icons
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
