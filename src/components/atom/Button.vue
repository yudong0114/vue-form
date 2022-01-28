<template>
  <button type="button" @click="btnClick">{{ buttonLabel }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    buttonLabel: {
      type: String,
      required: true,
      default: '',
    },
  },
  methods: {
    btnClick() {
      this.$emit('btnEmit');
    },
  },
};
</script>
