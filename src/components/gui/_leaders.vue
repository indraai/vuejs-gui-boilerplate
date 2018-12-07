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
  <section class="IndraLeaders" id="IndraLeaders">
    <h1>leaders</h1>
    <article class="leaders">
      <div class="leaders-data" v-for="leader in leaders.data">
        <div class="leaders-data-name" v-html="leader.screen_name"></div><div class="leader-data-count" v-html="leader.count"></div>
      </div>
    </article>
  </section>
</template>

<script>
// template javascript

export default {
  name: 'IndraLeaders',
  components: {},
  computed: {
    leaders() {
      return this.$store.getters['gui/leaders']
    },
  },
  methods: {},
  created() {},
  destroyed() {
    this.$store.dispatch('gui/leaders', []);
  },
}
</script>

<style lang="stylus" scoped>
  // custom template styles
  @require '../../styles/vars'
  .IndraLeaders
    .leaders
      &-data
        display: flex
        flex-flow: row nowrap

        &-name
          flex: 1 0 auto
        &-count
          flex: 0

</style>
