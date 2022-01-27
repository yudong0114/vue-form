<template>
  <label for="for">{{ name }}</label>
</template>

<script>
export default {
  name: 'Label',
  props: {
    for: {
      type: String,
      required: true,
      default: '',
    },
    name: {
      type: String,
      required: true,
      default: '',
    },
  },
};
</script>
