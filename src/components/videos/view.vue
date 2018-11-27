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
  <section class="videos-view" id="videos_view">
    <button class="videos-view-close" @click="close"><i class="icn-cross"></i></button>
    <article class="videos-view-item">
      <div class="videos-view-responsive">
        <iframe width="560" height="315" :src="viewing" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </article>
    <IndraShare></IndraShare>
  </section>
</template>

<script>
export default {
  name: 'IndraVideosView',
  props: ['type'],
  components: {},
  computed: {
    viewing() {
      const view = this.$store.getters['videos/viewing'];
      return `https://www.youtube.com/embed/${view}`;
    },
  },
  methods: {
    close() {
      return this.$router.go(-1)
    }
  },
  created() {
    this.$store.dispatch('videos/viewing', this.$route.params.id);
  }
}

</script>

<style lang="stylus">
  @require '../../styles/vars'
  // custom template styles
  //tes
  .videos-view
    z-index: 1000
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    background-color: $colors.charcoal
    overflow: auto
    align-items: center
    color: lighten($colors.charcoal, 75%)

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

    &-responsive
      padding-bottom: 56.25%
      position: relative
      max-width: 90%
      margin: auto
      height: 0

      iframe
        position: absolute
        top: 0
        left: 0
        height: 100%
        width: 100%
</style>
