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
  <section class="gallery-view" id="gallery_view">
    <button class="gallery-view-close" @click="close"><i class="icn-cross"></i></button>
    <article class="gallery-view-item">
      <div class="gallery-view-img"><img :src="viewing" alt=""></div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'IndraGallery',
  props: ['type'],
  components: {},
  computed: {
    title() {
      return this.$store.getters['gallery/title'];
    },
    description() {
      return this.$store.getters['gallery/description'];
    },
    viewing() {
      return this.$store.getters['gallery/viewing'];
    },
  },
  methods: {
    close() {
      return this.$router.go(-1)
    }
  },
  created() {
    this.$store.dispatch('gallery/open', `https://deva.space/cdn/paintings/full/${this.$route.params.id}.jpg`);
  }
}
</script>

<style lang="stylus">
  @require '../../styles/vars'
  // custom template styles
  //tes
  .gallery-view
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

      &-close
        transition: $transition
        background-color: transparent
        border: none
        color: $colors.white
        font-size: 3rem
        position: fixed
        top: 0
        right: 0
        border: none
        outline: none
        &:hover
          color: $colors.blue

      &-item
        margin: auto
        margin: 0
        padding: 0
        text-align: center
        max-width: 90%
        img
          box-shadow: 0 3px 9px darken($colors.charcoal, 50%)
          max-width: 100%
</style>
