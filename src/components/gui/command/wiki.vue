<template>
  <section class="wiki">
    <div class="wiki-search" v-if="convo.type === 'search'">
      <div class="wiki-content" v-for="item in convo.result">
        <h2 v-html="item.title" @click="wikiLookup('summary', item.title)"></h2>
        <p v-html="item.snippet"></p>
      </div>
    </div>
    <div class="wiki-summary" v-if="convo.type === 'summary'">
      <div class="wiki-thumbanail">
        <img :src="convo.result.thumbnail.source" alt="">
      </div>
      <div class="wiki-content">
        <h2 v-html="convo.result.title" @click="wikiLookup('html', convo.result.title)"></h2>
        <p v-html="convo.result.extract"></p>
      </div>
    </div>
    <div class="wiki-html" v-if="convo.type === 'html'" v-html="convo.result"></div>
  </section>
</template>

<script>
// template javascript

export default {
  name: 'IndraCmdWiki',
  props: ['convo'],
  components: {},
  computed: {
    results() {
      return Array.isArray(this.convo.result) ? this.convo.result.reverse() : [this.convo.result];
    },
  },
  methods: {
    checkType(type) {
      return ['mentions','home','timeline','tweet','retweet'].includes(type);
    },
    wikiLookup(key, value) {
      const question = `#wiki ${key} ${value}`;
      return this.$store.dispatch('gui/question', question)
    },
  },
  created() {}
}
</script>

<style lang="stylus" scoped>
  // custom template styles
  @require '../../../styles/vars'
  .wiki
    border: 1px solid rgba($colors.blue, .5)
    border-radius: .3rem
    padding: 1rem
    margin-top: .3rem
    background-color: darken($colors.white, 5%)
    color: $colors.charcoal
    position: relative
    min-height: 42px

    &-summary
      display: flex
      flex-flow: row nowrap
      h2
        font-size: 1.5rem
        margin: 0
        padding: 0
        line-height: 1
      p
        font-size: 1.25rem
        line-height: 1.5
        margin: 0

    &-thumbanail
      order: 2

    &-search
      display: flex
      flex-flow: column nowrap
      h2
        font-size: 1.5rem
        margin: 0
        padding: 0
      p
        font-size: 1.25rem
        line-height: 1.5
        margin: 0
        padding: 0
      .wiki-content
        padding: 0 0 .5rem 0
</style>
