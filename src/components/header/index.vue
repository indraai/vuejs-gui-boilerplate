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
  <header>
    <span class="avatar"><img src="../../assets/img/avatar.png" alt=""></span>
    <h1>{{title}}</h1>
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
  background-color: $colors.orange-lt
  background-image: url(../../assets/img/header-bg.png)
  background-repeat: no-repeat
  background-size: 100%
  background-position: center
  text-align: center
  padding: 1rem
  color: $colors.orange-dk
  text-shadow: 0 3px 6px $colors.charcoal
  display: flex
  align-items: stretch
  align-content: center
  justify-content: center
  flex-flow: column nowrap
  box-shadow: 0 0 1rem darken($colors.charcoal, 50%)

  .avatar
    display: inline-block
    border-radius: 50%
    margin-bottom: 1rem

    img
      width: 200px
      height: auto

  h1, p
    text-align: left
    color: $colors.white

  h1
    padding: 1rem 2rem
    margin: 0
    font-weight: 500
  p
    margin: 0
    padding: 0 2rem .5rem 2rem
    font-size: 2rem
</style>
