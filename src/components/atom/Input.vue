<template>
  <input v-model="inputValue" />
</template>

<script>
export default {
  name: 'Input',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(thisValue) {
        this.$emit('input', thisValue);
      },
    },
  },
};
</script>
