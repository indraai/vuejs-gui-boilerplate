<template>
  <main id="app">
    <section class="container-col">
      <h1 v-text="h1"></h1>
      <h2 v-text="h2"></h2>
      <h3 v-text="h3"></h3>
      <h4 v-text="h4"></h4>
      <h5 v-text="h5"></h5>
      <h6 v-text="h6"></h6>
      <caption>These are the display classes for headings.  They are slightly larger than normal headings.</caption>
      <h1 class="display" v-text="h1"></h1>
      <h2 class="display" v-text="h2"></h2>
      <h3 class="display" v-text="h3"></h3>
      <h4 class="display" v-text="h4"></h4>
      <h5 class="display" v-text="h5"></h5>
      <h6 class="display" v-text="h6"></h6>
    </section>
    <section class="container-col">
      <div><button>button</button></div>
      <div><button class="sm">small button</button></div>
      <div><button class="lg">large button</button></div>
      <div><input type="text" name="text" placeholder="Input..."></div>
      <div><textarea name="textarea" placeholder="Textarea..."></textarea></div>
    </section>
  </main>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        h1: 'H1 Title Heading',
        h2: 'H2 Title Heading',
        h3: 'H3 Title Heading',
        h4: 'H4 Title Heading',
        h5: 'H5 Title Heading',
        h6: 'H6 Title Heading',
      }
    },
    computed: {},
    components: {}
  }
</script>

<style lang="stylus">
  @require '../styles'


</style>
