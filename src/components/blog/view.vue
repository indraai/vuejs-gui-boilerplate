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
  <section class="blog-view">
    <h1 class="blog-view-title" v-html="topic.title"></h1>
    <div class="blog-view-tags"><span class="blog-view-tag" v-for="tag in topic.tags" v-html="tag.value"></span></div>
    <div class="blog-view-link"><a target="rahula" :href="rahulaLink(topic.slug)" v-html="rahulaLink(topic.slug)"></a></div>
    <article class="blog-view-post" v-for="post in topic.posts">
      <div class="blog-view-post-date" v-html="formatDate(post.timestamp)"></div>
      <div v-html="post.content" class="blog-view-post-content"></div>
    </article>
    <IndraShare></IndraShare>
  </section>
</template>

<script>
// template javascript

export default {
  name: 'IndraBlogView',
  components: {},
  computed: {
    topic() {
      return this.$store.getters['blog/topic']
    },
  },
  methods: {
    rahulaLink(data) {
      return `https://rahula.club/topic/${data}`;
    },
    formatDate(date) {
      date = new Date(date)
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      return date.toLocaleDateString('en-US', options);
    },
  },
  created() {
    this.$store.dispatch('blog/getTopic', this.$route.params.id);
  },
  destroyed() {
    this.$store.dispatch('blog/clearTopic')
  }
}
</script>

<style lang="stylus">
  // custom template styles
  @require '../../styles/vars'
  .blog-view
    max-width: 930px
    margin: auto

    > h1
      border-bottom: 1px solid $colors.charcoal
      margin-bottom: 1rem

    &-tags
      padding: .5rem
      &::before
        content: "Tags"
        display: inline-block
        padding-right: .5rem
        margin-right: .5rem
        border-right: 1px solid $colors.fire
        width: 2rem
    &-tag
      display: inline-block
      padding: .25rem .75rem
      border: 1px dotted $colors.blue
      border-radius: .3rem
      margin: 0 .1rem

    &-link
      padding: .5rem
      &::before
        content: "Link"
        display: inline-block
        padding-right: .5rem
        margin-right: .5rem
        border-right: 1px solid $colors.fire
        width: 2rem
      a
        display: inline-block
        padding: .25rem .75rem
        border: 1px dotted $colors.earth
        border-radius: .3rem
        color: $colors.earth

    &-post
      margin-top: 1rem
      border-top: 3px dotted $colors.charcoal
      &-date
        font-size: 1.5rem
        font-weight: 500
        color: lighten($colors.charcoal, 75%)

      &-content
        code
          display: inline-block
        pre
          > code
            display: block
            padding: 1rem
</style>
