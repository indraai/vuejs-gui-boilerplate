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
  <section class="videos">
    <h1><i class="icn icn-film-play"></i> {{title}}</h1>
    <p v-html="description"></p>
    <article class="videos-list">
      <div class="items" v-for="(item,idx) in items" @click="videosOpen(idx)">
        <img :src="item.thumb" :alt="item.name">
        <h3 v-html="item.name"></h3>
      </div>
    </article>
    <article class="videos-viewing" v-if="open">
      <button class="close" @click="videosClose"><i class="icn-cross"></i></button>
      <div class="videos-viewing-item">
<iframe width="900" height="506" :src="videosEmbed(viewing.id)" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="videos-viewing-card">
        <h1 v-text="viewing.title"></h1>
        <p v-text="viewing.describe"></p>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'IndraVideos',
  components: {},
  computed: {
    title() {
      return this.$store.getters['videos/title'];
    },
    description() {
      return this.$store.getters['videos/description'];
    },
    items() {
      // yes
      return this.$store.getters['videos/items'];
    },
    open() {
      return this.$store.getters['videos/open'];
    },
    viewing() {
      return this.$store.getters['videos/viewing'];
    },
  },
  methods: {
    videosEmbed(id) {
      return `https://www.youtube.com/embed/${id}`;
    },
    videosOpen(profile) {
      this.$store.dispatch('videos/open', profile)
    },
    videosClose(profile) {
      this.$store.dispatch('videos/close')
    }
  },
  created() {
    this.$store.dispatch('videos/items')
  }
}
</script>

<style lang="stylus">
  @require '../../styles/vars'
  // custom template styles
  //tes
  .videos
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

      .close
        transition: $transition
        background-color: transparent
        border: none
        color: $colors.white
        font-size: 5rem
        position: absolute
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

      &-card
        color: lighten($colors.charcoal, 30%)
        width: 75%
        border-radius: 1rem
        display: flex
        flex-flow: column nowrap

</style>
