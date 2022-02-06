import ErrorMessage from './ErrorMessage.vue';

export default {
  title: 'ErrorMessage',
  component: ErrorMessage,
};

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ErrorMessage },
  template: '<ErrorMessage v-bind="$props"/>',
});

export const Default = Template.bind({});

Default.args = {
  errorMessage: 'エラーメッセージ',
};
