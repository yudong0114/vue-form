import Button from './Button.vue';
import results from '../../../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';

export default {
  title: 'Button',
  component: Button,
  decorators: [withTests({ results })],
};

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<Button v-bind="$props"/>',
});

export const Default = Template.bind({});

Default.args = {
  buttonLabel: 'Button',
};

Default.parameters = {
  jest: ['Button.spec.js'],
};
