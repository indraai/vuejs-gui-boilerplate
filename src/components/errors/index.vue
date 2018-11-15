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
