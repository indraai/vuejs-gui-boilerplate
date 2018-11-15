<!--
// Copyright 2018 Quinn Michaels
// This file is part of Indra VueJs Gui Boilerplate
//
// Indra VueJs Gui Boilerplate is free software:
// you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Foobar is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Foobar.  If not, see <https://www.gnu.org/licenses/>.
 -->
<template>
  <section class="errors">
    <h2>Notes</h2>
    <div class="error" v-for="error in errors">
      <p>{{JSON.stringify(error)}}</p>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Errors',
  computed: {
    errors() {
      return this.$store.getters['errors/list']
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleString();
    }
  },
}
</script>

<style lang="stylus">
  @require '../../styles/require'
</style>
