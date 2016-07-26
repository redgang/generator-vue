<template>
  <div :class="['my-component', class]">
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

<style src="./my-component"></style>