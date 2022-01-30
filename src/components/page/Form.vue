<template>
  <div class="form">
    <h1>Vue Form</h1>
    <InputItem
      itemName="名前"
      itemId="name"
      :itemValue="formData.name"
      @updateFormData="updateFormData"
    />
    <ErrorMessage
      v-for="(errorMessage, index) in formValidation.name"
      :errorMessage="errorMessage"
      :key="`name${index}`"
    />
    <InputItem
      itemName="メールアドレス"
      itemId="email"
      :itemValue="formData.email"
      @updateFormData="updateFormData"
    />
    <ErrorMessage
      v-for="(errorMessage, index) in formValidation.email"
      :errorMessage="errorMessage"
      :key="`email${index}`"
    />
    <Button buttonLabel="フォームを送信" :disabled="!isSubmit" @btnEmit="submit" />
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
import ErrorMessage from '@/components/atom/ErrorMessage.vue';
import Button from '@/components/atom/Button.vue';

export default {
  name: 'Form',
  components: {
    InputItem,
    ErrorMessage,
    Button,
  },
  props: {
    formData: {
      type: Object,
      required: true,
      default: () => ({
        name: '',
        email: '',
      }),
    },
    formValidation: {
      type: Object,
      required: true,
      default: () => ({
        name: [],
        email: [],
      }),
    },
    isSubmit: {
      type: Boolean,
      required: true,
      default: false,
    },
    updateFormData: {
      type: Function,
      required: true,
      default: () => {},
    },
    submit: {
      type: Function,
      required: true,
      default: () => {},
    },
  },
};
</script>
