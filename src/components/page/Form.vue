<template>
  <div class="form">
    <h1>Vue Form</h1>
    <InputItem
      itemName="名前"
      itemId="name"
      :itemValue="formData.name"
      @updateFormData="updateFormData"
    />
    <InputItem
      itemName="メールアドレス"
      itemId="email"
      :itemValue="formData.email"
      @updateFormData="updateFormData"
    />
  </div>
</template>
<style lang="scss" scoped>
.form {
  display: flex;
  flex-flow: column;
  align-items: center;
}
</style>
<script>
import InputItem from '@/components/organism/InputItem.vue';

export default {
  name: 'Form',
  components: {
    InputItem,
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
      },
    };
  },
  methods: {
    updateFormData(key, value) {
      this.formData[key] = value;
    },
  },
};
</script>
