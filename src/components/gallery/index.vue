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
    <h1 v-html="title"></h1>
    <p v-html="description"></p>
    <article class="gallery-list">
      <div class="gallery-list-item" v-for="item in items">
        <router-link :to="{ name: 'galleryView', params: {id:item.id} }"><img :src="item.src" :alt="item"></router-link>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'IndraGallery',
  props: ['type'],
  components: {},
  computed: {
    galleryCount() {
      return this.type === 'small' ? 9 : 96;
    },
    title() {
      return this.$store.getters['gallery/title'];
    },
    description() {
      return this.$store.getters['gallery/description'];
    },
    items() {
      const items = this.$store.getters['gallery/items'];
      if (this.type && this.type === 'small') return items.slice(0,9)
      return items;
    }
  },
  methods: {},
  created() {}
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
      justify-content: center
      &-item
        padding: .3rem
        line-height: 1
        img
          width: 250px
          height: 140px
          border-radius: .3rem
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
        margin: auto
        margin: 0
        padding: 0
        text-align: center

        img
          box-shadow: 0 3px 9px darken($colors.charcoal, 50%)
          max-width: 100%
</style>
