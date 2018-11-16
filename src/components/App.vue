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
    <IndraHeader></IndraHeader>
    <IndraMenu></IndraMenu>
    <section class="headings" id="headings">
      <h2>Headings</h2>
      <caption>Regular Headings</caption>
      <article class="items">
        <h1 v-text="h1"></h1>
        <h2 v-text="h2"></h2>
        <h3 v-text="h3"></h3>
        <h4 v-text="h4"></h4>
        <h5 v-text="h5"></h5>
        <h6 v-text="h6"></h6>
      </article>
    </section>
    <section class="display-headings">
      <h2>Display Headings</h2>
      <caption>Those display classes when you want your headings to be bigger than they already are for that obvious touch.</caption>
      <article class="items">
        <h1 class="display" v-text="h1"></h1>
        <h2 class="display" v-text="h2"></h2>
        <h3 class="display" v-text="h3"></h3>
        <h4 class="display" v-text="h4"></h4>
        <h5 class="display" v-text="h5"></h5>
        <h6 class="display" v-text="h6"></h6>
      </article>
    </section>
    <section class="lists" id="lists">
      <h2>List Items</h2>
      <caption>Those boring bullets are gone, and hello beautiful Indra head list items to tickle your imagination.</caption>
      <article class="items">
        <ul>
          <li>List Item</li>
          <li>List Item</li>
          <li>List Item</li>
          <li>List Item</li>
          <li>List Item</li>
        </ul>
      </article>
    </section>
    <section class="alerts" id="alerts">
      <h2>Alerts</h2>
      <caption>Varoius cool ass classes to use for your alerts and shit.</caption>
      <article class="items">
        <div class="alert alert-primary">A primary alert for that boring shit you just have to show people.</div>
        <div class="alert alert-secondary">A secondary alert for when they don't pay attention the first time.</div>
        <div class="alert alert-success">A success alert for the times when they get it right.</div>
        <div class="alert alert-danger">A danger alert for shit is about to go down!</div>
        <div class="alert alert-warning">A warning alert for when someone is about to do something they probably shouldn't.</div>
      </article>
    </section>
    <section class="buttons" id="buttons">
      <h2>Buttons</h2>
      <caption>Check out these form elements in development for your 👀.</caption>
      <article class="buttons-items container">
        <div><button class="btn">default button</button></div>
        <div><button class="btn btn-sm">small button</button></div>
        <div><button class="btn btn-md">medium button</button></div>
        <div><button class="btn btn-lg">large button</button></div>
      </article>
      <article class="buttons-items container">
        <div><button class="btn btn-primary">Primary button</button></div>
        <div><button class="btn btn-secondary">Secondary button</button></div>
        <div><button class="btn btn-success">Success button</button></div>
        <div><button class="btn btn-danger">Danger button</button></div>
        <div><button class="btn btn-warning">Warning button</button></div>
      </article>
    </section>
    <section class="forms" id="forms">
      <h2>Forms</h2>
      <caption>Form Elements so you have somewhere to press buttons and have it appear like magic.</caption>
    </section>
    <section class="colors" id="colors">
      <h2>Colors</h2>
      <caption>These are the color classes</caption>
      <article class="items" v-for="color in (colors)">
        <div :class="colorText(color)"><strong>{{color}}</strong>The color text</div>
        <div :class="colorBg(color)"><strong>{{color}}</strong>The color background</div>
        <div :class="colorBorder(color)"><strong>{{color}}</strong>The color border</div>
      </article>
    </section>
    <section class="icons" id="icons">
      <h2>Icons</h2>
      <caption>These are the various icons that are included using the Linear Icons Free package.</caption>
      <article class="items">
        <span v-for="icon in icons"><i :class="iconClass(icon)"></i><br>.icn-{{icon}}</span>
      </article>
    </section>
    <section class="examples example-chat" id="examples">
      <h2><i class="icn-poop"></i> Examples</h2>
      <section>Here are some examples to show off some of the shit this thing can do when you put your imagination into it. We built a few examples to get your imagination going</section>
      <IndraChuck></IndraChuck>
    </section>
    <section class="info" id="info">
      <h2>Information</h2>
      <p>Thank you for taking the to look over our little program here.  If you are with a company, agency, or development group please reach out to us about on-site offerings.</p>
      <p>At indra.ai we can assist you with lots of ceative and technical things that you may need help with and we work on a very flexible offering model.</p>
      <p>If you are interested in having Indra.ai come and teach you how to really use this toolkit reach us at <a href="contact@indra.ai">contact@indra.ai</a>, and we can get the ball rolling.</p>
      <p>If you would like to provide offerings of support you can do that at:</p>
      <ul>
        <li><a href="https://paypal.me/rahulaclub">paypal.me/rahulaclub</a></li>
        <li><a href="https://patreon.com/rahulaclub">patreon.com/rahulaclub</a></li>
      </ul>
    </section>
    <IndraFooter></IndraFooter>
  </main>
</template>

<script>
  // in this part of the component we see basic data creation where we can look through colors and set the text of the heading tags from the data.
  import IndraHeader from './header/index.vue';
  import IndraFooter from './footer/index.vue';
  import IndraMenu from './menu/index.vue';
  import IndraChuck from './chuck/index.vue';

  export default {
    name: 'App',
    components: {
      IndraHeader,
      IndraFooter,
      IndraMenu,
      IndraChuck,
    },
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
  }
</script>

<style lang="stylus">
// here we import all the base styles into the template for use
// then below that we can overwrite or modify or create any necessary styles for the current template.
  @require '../styles'

  #app
    max-width: 1440px
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
