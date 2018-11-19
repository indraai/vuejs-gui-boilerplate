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
  </section>
</template>

<script>
// template javascript

export default {
  name: ':component:',
  components: {},
  computed: {
    title() {
      return this.$store.getters[':store:/title']
    },
    description() {
      return this.$store.getters[':store:/description']
    },
  },
  methods: {},
  created() {}
}
</script>

<style lang="stylus" scoped>
  // custom template styles
</style>
