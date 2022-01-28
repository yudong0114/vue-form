<template>
  <div class="form">
    <h1>Vue Form</h1>
    <InputItem itemName="名前" itemId="name" :itemValue="name" @updateFormData="updateFormData" />
    <InputItem
      itemName="メールアドレス"
      itemId="email"
      :itemValue="email"
      @updateFormData="updateFormData"
    />
    <Button buttonLabel="フォームを送信" @btnEmit="submit" />
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
import Button from '@/components/atom/Button.vue';

export default {
  name: 'Form',
  components: {
    InputItem,
    Button,
  },
  props: {
    name: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      default: '',
    },
    updateFormData: {
      type: Function,
      default: () => {},
    },
    submit: {
      type: Function,
      default: () => {},
    },
  },
};
</script>
