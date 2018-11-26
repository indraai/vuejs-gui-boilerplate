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
    <h1 v-html="topic.title"></h1>
    <div class="blog-view-tags"><span v-for="tag in topic.tags" v-html="tag.value"></span></div>
    <article class="blog-view-post" v-for="post in topic.posts">
      <div v-html="post.content" class="blog-view-post-content"></div>
    </article>
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
  methods: {},
  created() {
    this.$store.dispatch('blog/getTopic', this.$route.params.id);
  },
}
</script>

<style lang="stylus">
  // custom template styles
  @require '../../styles/vars'
  .blog-view
    max-width: 930px
    margin: auto

    &-post
      &-content
        border-bottom: 3px solid $colors.charcoal

        code
          display: inline-block
        pre
          > code
            display: block
            padding: 1rem
</style>
