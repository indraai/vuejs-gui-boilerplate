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
  <section class="share">
    <h5>Sharing is caring.</h5>
    <p>Clicking share buttons help create a better future.</p>
    <article class="share-icons">
      <a :class="{'share-icon': true, [share.name]: true}" :href="shareLink(share.link)" v-for="share in sharing" :target="share.name"><img :src="share.icon" alt=""></a>
    </article>
  </section>
</template>

<script>
// template javascript

export default {
  name: 'IndraShare',
  props: ['share_text'],
  components: {},
  computed: {
    title() {
      return this.$store.getters['share/title'];
    },
    description() {
      return this.$store.getters['share/description'];
    },
    sharing() {
      return this.$store.getters['share/sharing'];
    }
  },
  methods: {
    shareLink(link) {
      return link + window.location.href.replace(/\/#\//g, '/');
    },
  },
  created() {}
}
</script>

<style lang="stylus" scoped>
  // custom template styles
  @require '../../styles/vars'
  $icon-size = 100px
  .share
    color: inherit
    border-top: 3px dotted $colors.orange-lt
    display: flex
    flex-flow: column nowrap
    align-items: center
    &-icon
      display: inline-block
      border-radius: 50%
      box-shadow: 0 0 9px $colors.charcoal
      width: $icon-size
      height: $icon-size
      margin: .5rem
      img
        width: $icon-size
        height: $icon-size


</style>
