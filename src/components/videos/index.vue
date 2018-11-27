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
    <h1 v-html="title"></h1>
    <p v-html="description"></p>
    <article class="videos-content">
      <div class="videos-thumbnail" v-for="video in videos"  :data-title="video.title">
        <router-link :to="{ name: 'videoView', params: {id:video.id} }">
          <img :src="thumbnail(video.id)" alt="">
        </router-link>
      </div>
    </article>
  </section>
</template>

<script>
// template javascript

export default {
  name: 'IndraVideos',
  props: ['type'],
  components: {},
  computed: {
    title() {
      return this.$store.getters['videos/title'];
    },
    description() {
      return this.$store.getters['videos/description'];
    },
    content() {
      return this.$store.getters['videos/content'];
    },
    videos() {
      const videos = this.$store.getters['videos/data'];
      if (this.type && this.type === 'small') return videos.slice(0,9)
      return videos;
    }
  },
  methods: {
    thumbnail(id) {
      return `http://img.youtube.com/vi/${id}/0.jpg`;
    }
  },
  created() {}
}
</script>

<style lang="stylus" scoped>
  // custom template styles
  @require '../../styles/vars'
  .videos
    &-content
      display: flex
      flex-flow: row wrap
      justify-content: center

    &-thumbnail
      position: relative
      margin: .5rem
      &[data-title]
        &::before
          content: attr(data-title)
          display: block
          color: $colors.white
          background-color: rgba(black, .75)
          padding: 2rem 1rem
          font-size: 1.5rem
          text-align: center
          position: absolute
          bottom: 0
          left: 0
          right: 0
          width: calc(100% - 2rem)
          border-radius: 0 0 1rem 1rem
          text-overflow: ellipsis
          overflow: hidden
          white-space: nowrap
      img
        border-radius: .5rem
        width: 250px
        height: auto

</style>
