<template>
    <c-title><%= viewName %></c-title>
</template>

<script>
import { CPane, CTitle } from 'components'
import { mapGetters, mapActions } from 'vuex'

export default {
  name : "<%= viewName %>",
  data () {
    return {

    }
  },

  computed: {
    ...mapGetters([])
    
  },

  methods: {
      mapActions([])

  },

  components: {
    CPane,
    CTitle
  }
}
</script>

<style src="styles/views/<%= viewName %>"></style>