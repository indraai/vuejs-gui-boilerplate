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
  <section :class="{ blog:true, small: type }">
    <h1 class="blog-title" v-html="title"></h1>
    <p class="blog-description" v-html="description"></p>
    <article class="blog-topics">
      <div v-for="topic in topics" class="blog-topics-topic">
        <h2><router-link :to="{ name: 'blogView', params: {id: topic.tid, title: topic.slug.split('/')[1]} }">{{topic.title}}</router-link></h2>
        <div class="blog-date" v-html="formatDate(topic.timestamp)"></div>
      </div>
    </article>
  </section>
</template>

<script>
// template javascript

export default {
  name: 'IndraBlog',
  props: ['type'],
  components: {},
  computed: {
    title() {
      return this.$store.getters['blog/title']
    },
    description() {
      return this.$store.getters['blog/description']
    },
    topics() {
      const topics = this.$store.getters['blog/topics'];
      if (this.type && this.type === 'small') return topics.slice(0,3)
      return topics
    },
  },
  methods: {
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
  created() {},
}
</script>

<style lang="stylus" scoped>
  // custom template styles
  @require '../../styles/vars'
  .blog
    max-width: 930px
    margin: auto
    &-topics
      border-top: 5px solid $colors.blue
      &-topic
        padding: 1rem
        border-bottom: 3px dashed $colors.charcoal
    &.small
      .blog-topics
        border-top: none
      .blog-topics-topic
        border-bottom: none
</style>
