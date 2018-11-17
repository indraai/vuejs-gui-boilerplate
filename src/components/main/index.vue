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
  <main>
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>indra.design</h1>
          <p class="lead">Design, develop, and deliver amazing interfaces into the future with indra.design.</p>
          <p class="lead">The indra.design open source tool can help developers in creating amazing complex dynamic interfaces that will WOW your friends, coworkers, and land you that #RockstarDeveloper role.</p>
          <p class="lead">Built ontop of NodeJs, VueJs, Stylus(CSS), and WebPack this will enable any developer to adapt their skills hardened over the many years of pounding away at a keyboard.</p>
        </div>
        <div class="hero-image"><img src="../../assets/img/avatar.png" alt=""></div>
      </div>


    </section>

    <p class="lead"></p>

    <section class="headings" id="headings">
      <h2>Headings</h2>
      <caption>Regular Headings</caption>
      <article class="items">
        <h1>H1 Heading</h1>
        <h2>H2 Heading</h2>
        <h3>H3 Heading</h3>
        <h4>H4 Heading</h4>
        <h5>h5 Heading</h5>
        <h6>h6 Heading</h6>
      </article>
    </section>
    <section class="display-headings">
      <h2>Display Headings</h2>
      <caption>Those display classes when you want your headings to be bigger than they already are for that obvious touch.</caption>
      <article class="items">
        <h1 class="display">H1 Display Heading</h1>
        <h2 class="display">H2 Display Heading</h2>
        <h3 class="display">H3 Display Heading</h3>
        <h4 class="display">H4 Display Heading</h4>
        <h5 class="display">H5 Display Heading</h5>
        <h6 class="display">H6 Display Heading</h6>
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
  </main>
</template>

<script>
// template javascript
import IndraChuck from '../chuck/index.vue';

export default {
  name: 'IndraMain',
  components: {
    IndraChuck,
  },
  computed: {
    colors() {
      return this.$store.getters['main/colors'];
    },
    icons() {
      return this.$store.getters['main/icons'];
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
  created() {}
}
</script>

<style lang="stylus">
// custom template styles
  @require '../../styles/vars'
  main
    padding: 1rem
    max-width: 900px
    margin: auto
</style>
