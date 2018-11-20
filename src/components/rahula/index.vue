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
  <section>
    <h1 v-html="title"></h1>
    <p v-html="description"></p>
    <article class="items">
      <div v-for="topic in topics">
        <h3 v-html="topic.title" @click="topicOpen(topic.slug)"></h3>
      </div>
    </article>
    <article class="topic-viewing" v-if="open">
      <button class="close" @click="topicClose"><i class="icn-cross"></i></button>
      <div class="topic-viewing-card">
        <h1 v-html="viewing.title"></h1>
        <div class="topic-author">
          by <span>{{viewing.posts[0].user.username}}</span>
        </div>
        <div class="topic-tags">
          tags <span v-for="tag in viewing.tags" v-text="tag.value"></span>
        </div>
        <article v-html="viewing.posts[0].content"></article>
      </div>
    </article>
  </section>
</template>

<script>
// template javascript

export default {
  name: 'IndraRahula',
  components: {},
  computed: {
    title() {
      return this.$store.getters['rahula/title']
    },
    description() {
      return this.$store.getters['rahula/description']
    },
    topics() {
      return this.$store.getters['rahula/topics']
    },
    open() {
      return this.$store.getters['rahula/open'];
    },
    viewing() {
      return this.$store.getters['rahula/viewing'];
    },
  },
  methods: {
    topicOpen(slug) {
      return this.$store.dispatch('rahula/open', slug);
    },
    topicClose() {
      return this.$store.dispatch('rahula/close');
    },
    topicPicture(pic) {
      return `https://rahula.club/${pic}`;
    },
  },
  created() {
    this.$store.dispatch('rahula/topics');
  }
}
</script>

<style lang="stylus" scoped>
  // custom template styles
  @require '../../styles/vars'

  .topic
    &-viewing
      position: fixed
      top: 0
      left: 0
      right: 0
      bottom: 0
      height: 100%
      width: 100%
      background-color: $colors.white
      z-index: 1000

      &-card
        max-width: 900px
        height: 100%
        margin: auto
        overflow: auto

      .close
        transition: $transition
        background-color: transparent
        border: none
        color: $colors.charcoal
        font-size: 5rem
        position: absolute
        top: 0
        right: 0
        border: none
        outline: none
        &:hover
          color: $colors.blue

    &-tags
      padding: .5rem
      font-size: 1.5rem

      span
        display: inline-block
        padding: 0 1rem
        background-color: $colors.yellow
        margin: 0 .1rem
        color: darken($colors.yellow, 75%)
        border-radius: .5rem
        &::before
          content: '#'

    &-author
      padding: .5rem
      font-size: 2rem
</style>
