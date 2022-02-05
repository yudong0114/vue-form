import ErrorMessage from './ErrorMessage.vue';

export default {
  title: 'ErrorMessage',
  component: ErrorMessage,
};

export const Default = () => ({
  components: { ErrorMessage },
  template: '<ErrorMessage errorMessage="エラーメッセージ" />',
});
