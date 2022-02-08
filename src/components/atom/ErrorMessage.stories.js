import ErrorMessage from './ErrorMessage.vue';
import results from '../../../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';

export default {
  title: 'ErrorMessage',
  component: ErrorMessage,
  decorators: [withTests({ results })],
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

Default.parameters = {
  jest: ['ErrorMessage.spec.js'],
};
