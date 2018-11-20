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
  <section class="gallery" id="gallery">
    <h1><i class="icn icn-picture"></i> {{title}}</h1>
    <p v-html="description"></p>
    <article class="gallery-list">
      <div class="items" v-for="(item,idx) in items" @click="galleryOpen(idx)">
        <img :src="item.thumb" :alt="item.name">
        <h3 v-html="item.name"></h3>
      </div>
    </article>
    <article class="gallery-viewing" v-if="open">
      <button class="close" @click="galleryClose"><i class="icn-cross"></i></button>
      <div class="gallery-viewing-item"><img :src="viewing.full" alt=""></div>
      <div class="gallery-viewing-card">
        <h1 v-text="viewing.title"></h1>
        <p v-text="viewing.describe"></p>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'IndraHeads',
  components: {},
  computed: {
    title() {
      return this.$store.getters['gallery/title'];
    },
    description() {
      return this.$store.getters['gallery/description'];
    },
    items() {
      // yes
      return this.$store.getters['gallery/items'];
    },
    open() {
      return this.$store.getters['gallery/open'];
    },
    viewing() {
      return this.$store.getters['gallery/viewing'];
    },
  },
  methods: {
    galleryClass(profile) {
      return `gallery-${profile.name}-s`;
    },
    galleryOpen(profile) {
      this.$store.dispatch('gallery/open', profile)
    },
    galleryClose(profile) {
      this.$store.dispatch('gallery/close')
    }
  },
  created() {
    this.$store.dispatch('gallery/items')
  }
}
</script>

<style lang="stylus">
  @require '../../styles/vars'
  // custom template styles
  //tes
  .gallery
    &-list
      display: flex
      flex-flow: row wrap

    &-viewing
      z-index: 1000
      position: fixed
      top: 0
      left: 0
      right: 0
      bottom: 0
      background-color: $colors.charcoal
      display: flex
      flex-flow: column nowrap
      align-content: center
      align-items: center
      justify-content: center
      overflow: auto

      .close
        transition: $transition
        background-color: transparent
        border: none
        color: $colors.white
        font-size: 5rem
        position: fixed
        top: 0
        right: 0
        border: none
        outline: none
        &:hover
          color: $colors.blue

      &-item
      &-card
        margin: auto
        margin: 0
        padding: 0
        text-align: center
      &-item
        img
          box-shadow: 0 3px 9px darken($colors.charcoal, 50%)
          max-width: 100%
      &-card
        color: lighten($colors.charcoal, 30%)
        width: 75%
        border-radius: 1rem
        display: flex
        flex-flow: column nowrap

</style>
