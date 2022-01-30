<template>
  <label :for="labelFor">{{ labelName }}</label>
</template>

<script>
export default {
  name: 'Label',
  props: {
    labelFor: {
      type: String,
      required: true,
      default: '',
    },
    labelName: {
      type: String,
      required: true,
      default: '',
    },
  },
};
</script>
