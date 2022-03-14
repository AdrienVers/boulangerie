<script>
export default {
  name: 'BaseButton'
}
</script>

<template>
  <button v-on="$listeners">   <!-- assign events to an element in a component -->
    <slot></slot>
  </button>
</template>

<style></style>