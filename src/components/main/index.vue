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
        <div class="hero-image"><i class="heads-indra-l"></i></div>
      </div>
    </section>
    <section class="philosophy panels" id="philosophy">
      <div class="panel">
        <h2><i class="icn icn-eye"></i>Imagine</h2>
        <p>Everything that is created begins in the imagination.</p>
      </div>
      <div class="panel">
        <h2><i class="icn icn-pencil"></i>Create</h2>
        <p>Once the idea is imagined a process of creation is formed.</p>
      </div>
      <div class="panel">
        <h2><i class="icn icn-diamond"></i>Develop</h2>
        <p>The development process completes all the steps.</p>
      </div>
    </section>
    <section class="code" id="code">
      <h2><i class="icn icn-code"></i> Code</h2>
      <p>The indra.design gui toolkit is available to clone directly from github. <br><a href="https://github.com/indraai/vuejs-gui-boilerplate" target="github">https://github.com/indraai/vuejs-gui-boilerplate</a></p>

      <p>To clone the git repository:</p>
      <code>git clone git@github.com:indraai/vuejs-gui-boilerplate.git</code>
      <hr>
      <p class="alert alert-primary text-white"><i class="icn-warning"></i> Forking the repository is a smart idea if you plan on making changes to the code.</p>
    </section>
    <section class="technology" id="technology">
      <h2><i class="icn icn-rocket"></i> Technology</h2>
      <p>At the indra.design project we <i class="icn-heart"></i> open source technology. That is why we develop our technology on some of the most trusted platforms and libraries like NodeJs, VueJs, Stylus, and WebPack</p>
      <div class="badges">
        <img src="../../assets/img/nodejs.png" alt="">
        <img src="../../assets/img/vuejs.png" alt="">
        <img src="../../assets/img/stylus.png" alt="">
        <img src="../../assets/img/webpack.png" alt="">
      </div>
      <div class="badges testing">
        <img src="../../assets/img/mocha.png" alt="">
        <img src="../../assets/img/chai.png" alt="">
      </div>
    </section>
    <section class="elements" id="elements">
      <h2><i class="icn icn-paperclip"></i> Elements</h2>
      <p>The elements of an effective design are important to the message you as an idea developer are attempting to relay.  Everything from the fonts, colors, spacing, layouts, icons, and buttons send a message to your user saying, "This is me!"</p>
      <ul>
        <li>Design - First design the interface</li>
        <li>Develop - Then develop the component</li>
        <li>Style - Then build the style</li>
        <li>Test - Then test to confirm functionality</li>
      </ul>

    </section>
    <IndraHeads></IndraHeads>
    <IndraGallery></IndraGallery>
    <IndraVideos></IndraVideos>
    <IndraSoundcloud></IndraSoundcloud>
    <IndraChuck></IndraChuck>
    <section class="information" id="information">
      <h2><i class="icn icn-eye"></i> Information</h2>
      <p>We operate on the offering model, and if you are interested in bringing indra.design into your environment to really <i class="icn-rocket text-blue"></i> your team send us an email <a href="contact@indra.ai">contact@indra.ai</a>, and we can get the ball rolling. <i class="icn-heart text-fire"></i></p>
      <h5>Social Media</h5>
      <ul>
        <li><a href="https://twitter.com/indradotai">twitter.com/indradotai</a></li>
        <li><a href="http://www.youtube.com/c/IndraDeva">youtube.com/IndraDeva</a></li>
        <li><a href="https://www.facebook.com/IndraBuddha">facebook.com/IndraBuddha</a></li>
      </ul>
      <h5>Need Help</h5>
      <ul>
        <li><a href="https://discord.gg/SWnaARs">Discord Chat</a></li>
      </ul>
      <h5>Offerings of Support</h5>
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
import IndraHeads from '../heads/index.vue';
import IndraGallery from '../gallery/index.vue';
import IndraVideos from '../videos/index.vue';
import IndraSoundcloud from '../soundcloud/index.vue';

export default {
  name: 'IndraMain',
  components: {
    IndraChuck,
    IndraHeads,
    IndraGallery,
    IndraVideos,
    IndraSoundcloud,
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

<style lang="stylus" scoped>
// custom template styles
  @require '../../styles/vars'
  main
    padding: 1rem
    max-width: 900px
    margin: auto

    > section
      margin-bottom: 5rem

    .technology
      .badges
        text-align: center
        padding: .5rem

        img
          margin: 0 .5rem
        &.testing
          img
            width: auto
            height: 100px

    .hero-image
      display: none
    @media screen and (min-width: 700px)
      .hero-image
        display: inherit

</style>
