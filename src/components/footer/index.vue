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
  <footer>
    <article class="footer-left">&copy;Copyright 2018 Quinn Michaels | indra.ai</article>
    <article class="footer-right"><img src="https://deva.space/cdn/badges/License-GPL-v3-blue.svg" alt="GPL-v3 License"></article>
  </footer>
</template>

<script>

export default {
  name: 'IndraFooter',
  components: {},
  computed: {},
  methods: {},
  created() {}
}
</script>

<style lang="stylus" scoped>
  @require '../../styles/vars'
  footer
    padding: 1rem
    background-color: $colors.charcoal
    color: lighten($colors.charcoal, 75%)
    display: flex
    flex-flow: row nowrap

    .footer
      &-left
        flex: 1
      &-right
        flex: 0

</style>
