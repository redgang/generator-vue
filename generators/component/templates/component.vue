<template>
  <div :class="['<%= componentName %>', class]">
    <slot></slot>
  </div>
</template>

<script>
  
  export default {
    props: {
      class: {
        type: String,
        default: ''
      }
    },

    computed: {
    
    },

    methods: {
      
    },

    components: {

    }
  }
</script>

<style src="./<%= inputComponentName %>"></style>