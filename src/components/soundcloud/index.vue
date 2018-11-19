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
    <article class="soundclound-embed">
      <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/552230709&color=%23264040&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
    </article>
  </section>
</template>

<script>
// template javascript

export default {
  name: 'IndraSoundcloud',
  components: {},
  computed: {
    title() {
      return this.$store.getters['soundcloud/title']
    },
    description() {
      return this.$store.getters['soundcloud/description']
    },
  },
  methods: {},
  created() {}
}
</script>

<style lang="stylus" scoped>
  // custom template styles
</style>
