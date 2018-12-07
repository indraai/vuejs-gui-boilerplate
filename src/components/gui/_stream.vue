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
  <section class="IndraStream" id="IndraStream">
    <h1>stream</h1>
    <article class="stream" v-for="item in stream">
      {{item.user.screen_name}}
    </article>
  </section>
</template>

<script>
// template javascript

export default {
  name: 'IndraStream',
  components: {},
  computed: {
    stream() {
      return this.$store.getters['gui/stream']
    },
  },
  methods: {},
  created() {},
  destroyed() {
    this.$store.dispatch('gui/stream', []);
  }
}
</script>

<style lang="stylus" scoped>
  // custom template styles
  @require '../../styles/vars'
</style>
