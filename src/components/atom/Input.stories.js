import Input from './Input.vue';
import results from '../../../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';

export default {
  title: 'Input',
  component: Input,
  decorators: [withTests({ results })],
};

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Input },
  template: '<Input v-bind="$props"/>',
});

export const Default = Template.bind({});

Default.args = {
  value: 'テキスト',
};

Default.parameters = {
  jest: ['Input.spec.js'],
};
