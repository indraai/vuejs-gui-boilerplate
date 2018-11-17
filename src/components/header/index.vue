<!--
Copyright 2018 Quinn Michaels

This file is part of Indra VueJs Gui Boilerplate

Indra VueJs Gui Boilerplate is free software:
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
  <header id="header">
    <h1 v-text="title"></h1>
    <p v-text="describe"></p>
</header>
</template>

<script>

export default {
  name: 'IndraHeader',
  components: {},
  computed: {
    title() {
      return this.$store.getters['header/title'];
    },
    describe() {
      return this.$store.getters['header/describe'];
    }
  },
  methods: {},
  created() {}
}
</script>

<style lang="stylus">
@require '../../styles/vars'

header
  position: relative;
  background-color: $colors.fire
  background-repeat: no-repeat
  background-size: auto 100%
  background-position: right
  text-align: center
  padding: 1rem
  color: lighten($colors.fire, 75%)
  display: flex
  align-items: stretch
  align-content: center
  justify-content: center
  flex-flow: column nowrap
  box-shadow: 0 0 1rem darken($colors.charcoal, 50%)

  h1, p
    text-align: left
    line-height: 1

  h1
    padding: 1rem 2rem 0 2rem
    margin: 10rem 0 0 0
    font-weight: 100
    font-size: 5rem
    font-weight: 200
  p
    margin: 0
    padding: 0 2rem .5rem 2rem
    font-size: 2rem
</style>
