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
  <section class="heads" id="heads">
    <h1><i class="icn icn-mustache"></i> {{title}}</h1>
    <p v-html="description"></p>
    <article class="heads-list">
      <div class="profiles" v-for="(prof,idx) in profiles" @click="headOpen(idx)">
        <i :class="headClass(prof)"></i>
        <h3 v-html="idx.name"></h3>
      </div>
    </article>
    <article class="heads-viewing" v-if="open">
      <button class="close" @click="headClose"><i class="icn-cross"></i></button>
      <div class="heads-viewing-card">
        <div class="avatar"><i :class="viewingClass"></i></div>
        <div class="info"><h1 v-text="viewing.full_name"></h1><p v-text="viewing.describe"></p></div>
      </div>
    </article>
  </section>
</template>

<script>
// template javascript
export default {
  name: 'IndraHeads',
  components: {},
  computed: {
    title() {
      return this.$store.getters['heads/title'];
    },
    description() {
      return this.$store.getters['heads/description'];
    },
    profiles() {
      // yes
      return this.$store.getters['heads/profiles'];
    },
    open() {
      return this.$store.getters['heads/open'];
    },
    viewing() {
      return this.$store.getters['heads/viewing'];
    },
    viewingClass() {
      return `heads-${this.viewing.name}-m`
    }
  },
  methods: {
    headClass(profile) {
      return `heads-${profile.name}-s`;
    },
    headOpen(profile) {
      this.$store.dispatch('heads/open', profile)
    },
    headClose(profile) {
      this.$store.dispatch('heads/close')
    }
  },
  created() {
    this.$store.dispatch('heads/profiles')
  }
}
</script>

<style lang="stylus">
  @require '../../styles/vars'
  // custom template styles
  $heads = json('./data.json', { hash: true, leave-strings: true })
  //tes
  for $idx in ($heads.profiles)
    $head = $heads.profiles[$idx]
    $imgPath = 'https://deva.space/cdn/heads/' + $head.name + '/' + $head.name
    $img = $imgPath + '.png'
    $imgS = $imgPath + '@25.png'
    $imgM = $imgPath + '@50.png'
    $imgL = $imgPath + '@75.png'

    .heads
      &-list
        display: flex
        flex-flow: row wrap
      &-viewing
        z-index: 1000
        position: fixed
        top: 0
        left: 0
        right: 0
        bottom: 0
        background-color: $colors.white
        display: flex

        .close
          transition: $transition
          background-color: transparent
          border: none
          color: $colors.charcoal
          font-size: 5rem
          position: absolute
          top: 0
          right: 0
          border: none
          outline: none
          &:hover
            color: $colors.blue

        &-card
          background-color: $colors.white
          margin: auto
          border-radius: 1rem
          padding: 1rem
          display: flex
          flex-flow: column nowrap
          justify-content: center
          align-items: center

          .info
            padding: 0 0 0 1rem

      &-{$head.name}
        &-full
          $f-size = 512px
          background-image: url($img)
          background-size: $f-size $f-size
          width: $f-size
          height: $f-size

        &-s
          $s-size = 128px
          display: inline-block
          background-image: url($imgS)
          background-size: $s-size $s-size
          width: $s-size
          height: $s-size

        &-m
          $m-size = 256px
          display: inline-block
          background-image: url($imgM)
          background-size: $m-size $m-size
          width: $m-size
          height: $m-size

        &-l
          $l-size = 384px
          display: inline-block
          background-image: url($imgL)
          background-size: $l-size $l-size
          width: $l-size
          height: $l-size

</style>
