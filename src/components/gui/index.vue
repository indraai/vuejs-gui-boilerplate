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
  <main class="IndraGui" id="IndraGui">
    <IndraStream></IndraStream>
    <IndraParty></IndraParty>
    <IndraLeaders></IndraLeaders>
    <IndraFriends></IndraFriends>
    <IndraPromote></IndraPromote>
    <IndraCommand></IndraCommand>
    <IndraError v-if="error"></IndraError>
  </main>
</template>

<script>
// template javascript
import IndraStream from './_stream.vue';
import IndraParty from './_party.vue';
import IndraLeaders from './_leaders.vue';
import IndraFriends from './_friends.vue';
import IndraPromote from './_promote.vue';
import IndraCommand from './_command.vue';
import IndraError from './_error.vue';
import axios from 'axios';

export default {
  name: 'IndraGui',
  components: {
    IndraStream,
    IndraParty,
    IndraLeaders,
    IndraFriends,
    IndraPromote,
    IndraCommand,
    IndraError,
  },
  computed: {
    error() {
      this.$store.getters['gui/error'];
    }
  },
  methods: {},
  created() {},
  destroyed() {},
}
</script>

<style lang="stylus">
  // custom template styles
  @require '../../styles/vars'
  header
  footer
    display: none !important

  .IndraGui
    position: fixed
    top: 72px
    left: 0
    right: 0
    bottom: 300px
    width: 100%
    height: calc(100% - 72px)
    background-color: $colors.blue

    display: flex
    flex-flow: row nowrap

    > section
      background: darken($colors.charcoal, 25%)
      padding: 0
      margin: 0
      flex: 1 0
      height: 100%
      color: lighten($colors.charcoal, 50%)
      overflow: hidden
      display: flex
      flex-flow: column nowrap
      > h1
        font-size: 1.5rem
        padding: 0
        margin: 0
        text-align: center
        flex: 0 0
      > article
        flex: 1 1
        padding: 1rem
        overflow: auto
</style>
