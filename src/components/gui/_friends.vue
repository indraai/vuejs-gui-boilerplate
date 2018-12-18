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
  <section class="IndraFriends" id="IndraFriends">
    <h1>friends</h1>
    <article class="friends">
      <div class="friends-data" v-for="friend in friends.data">
        {{friend.screen_name}}
      </div>
    </article>
  </section>
</template>

<script>
// template javascript

export default {
  name: 'IndraFriends',
  components: {},
  computed: {
    friends() {
      return this.$store.getters['gui/friends']
    },
  },
  methods: {},
  created() {},
  destroyed() {
    this.$store.dispatch('gui/friends', []);
  }
}
</script>

<style lang="stylus" scoped>
  // custom template styles
  @require '../../styles/vars'
  .IndraFriends
    color: $colors.air
    background-color: darken($colors.air, 90%)
    box-shadow: inset 0 0 1rem rgba($colors.air, .25)
    > h1
      background-color: rgba($colors.air, .1)
      text-shadow: 0 0 3px rgba(darken($colors.air, 50%), .5)
      box-shadow: inset 0 0 1rem rgba($colors.air, .5)

</style>
