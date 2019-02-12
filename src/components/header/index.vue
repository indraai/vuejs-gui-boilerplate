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
  <header id="header" :class="{'header': true, 'small':smallClass}">
    <div class="header-content">
      <h1 v-text="title"></h1>
      <p v-text="describe"></p>
    </div>
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
    },
    smallClass() {
      return this.$route.name !== 'main';
    },
  },
  methods: {},
  created() {}
}
</script>

<style lang="stylus" scoped>
  @require '../../styles/vars'

  .header
    position: relative;
    background-image: url(https://deva.space/cdn/banners/qm-02.jpg)
    background-color: $colors.blue
    background-repeat: no-repeat
    background-size: cover
    background-position: center
    text-align: center
    padding: 0
    color: lighten($colors.fire, 80%)
    display: flex
    align-items: stretch
    align-content: center
    justify-content: center
    flex-flow: column nowrap
    box-shadow: 0 0 1rem darken($colors.charcoal, 50%)

    &-content
      padding: 1rem
      margin-top: 20rem
      background-color: rgba(black, .75)

    h1, p
      text-align: left

    h1
      padding: 0
      margin: 0
      font-weight: 100
      font-size: 4rem
      font-weight: 200
      letter-spacing: -6px
      line-height: 1
    p
      margin: 0
      padding: 0
      font-size: 1.75rem
      line-height: 1

    @media screen and (min-width: 700px)
      h1
        font-size: 9rem
      p
        font-size: 3rem

    &.small
      .header-content
        margin-top: 0
      h1
        margin: 5rem 0 0 0
        font-size: 4rem
        padding: 0
      p
        font-size: 1rem
        padding: 0
        margin: 0
</style>
