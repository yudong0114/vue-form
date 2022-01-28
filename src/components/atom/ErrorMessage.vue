<template>
  <p class="errorMessage">{{ errorMessage }}</p>
</template>
<style lang="scss" scoped>
.errorMessage {
  color: red;
}
</style>
<script>
export default {
  name: 'ErrorMessage',
  props: {
    errorMessage: {
      type: String,
      required: true,
      default: '',
    },
  },
};
</script>
