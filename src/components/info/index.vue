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
  <section class="info">
    <h1 class="info-title" v-html="title"></h1>
    <p class="info-description" v-html="description"></p>
    <article class="info-content" v-html="content" v-if="!small"></article>
  </section>
</template>

<script>
// template javascript

export default {
  name: 'IndraInfo',
  props: ['type'],
  components: {},
  computed: {
    title() {
      return this.$store.getters['info/title']
    },
    small() {
      return this.type && this.type === 'small'
    },
    description() {
      return this.$store.getters['info/description']
    },
    content() {
      return this.$store.getters['info/content']
    }
  },
  methods: {},
  created() {}
}
</script>

<style lang="stylus">
  // custom template styles
  @require '../../styles/vars'
  .info
    max-width: 930px
    margin: auto

    &-content
      img[src="https://deva.space/cdn/people/quinn.jpg"]
        border-radius: 50%
        box-shadow: 0 3px 9px $colors.charcoal
        float: left
        margin-right: 2rem
        width: 150px
        height: 150px
</style>
