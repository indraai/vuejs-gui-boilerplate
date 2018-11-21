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
          <p class="lead">Are you paying attention to this man? Because he is like Walt Disney after working out with Arnold Swartzeneggar without all the muscles.</p>
          <p class="lead">Sometimes he's making art, sometimes it's code, sometimes it's singing bowls, but it's always an adventure of the mind.</p>
        </div>
        <div class="hero-image"><i class="heads-indra-l"></i></div>
      </div>
    </section>
    <IndraRahula></IndraRahula>
    <IndraHeads></IndraHeads>
    <IndraGallery></IndraGallery>
    <IndraVideos></IndraVideos>
    <IndraSoundcloud></IndraSoundcloud>
    <section class="information" id="information">
      <h2><i class="icn icn-eye"></i> Contact Information</h2>
      <h5>Email</h5>
      <ul>
        <li><a href="mailto:contact@quinnmichaels.com">contact@quinnmichaels.com</a></li>
      </ul>
      <h5>Social Media</h5>
      <ul>
        <li><a href="https://twitter.com/quinnmichaels">twitter.com/quinnmichaels</a></li>
        <li><a href="http://www.youtube.com/quinnmichaels">youtube.com/quinnmichaels</a></li>
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
import IndraRahula from '../rahula/index.vue';

export default {
  name: 'IndraMain',
  components: {
    IndraChuck,
    IndraHeads,
    IndraGallery,
    IndraVideos,
    IndraSoundcloud,
    IndraRahula,
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

    .hero-image, .hero-content > h1
      display: none

    @media screen and (min-width: 700px)
      .hero-image, .hero-content > h1
        display: inherit

</style>
