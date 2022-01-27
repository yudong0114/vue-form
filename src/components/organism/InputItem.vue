<template>
  <dl class="inputItem">
    <dt><Label :for="itemId" :name="itemName" /></dt>
    <dd><Input :value="itemValue" @input="update" /></dd>
  </dl>
</template>
<style lang="scss" scoped>
.inputItem {
  display: flex;
}
</style>
<script>
import Label from '@/components/atom/Label.vue';
import Input from '@/components/atom/Input.vue';

export default {
  name: 'InputItem',
  components: {
    Label,
    Input,
  },
  props: {
    itemName: {
      type: String,
      required: true,
      default: '',
    },
    itemId: {
      type: String,
      required: true,
      default: '',
    },
    itemValue: {
      type: String,
      required: true,
      default: '',
    },
  },
  methods: {
    update(thisValue) {
      this.$emit('updateFormData', this.itemId, thisValue);
    },
  },
};
</script>
