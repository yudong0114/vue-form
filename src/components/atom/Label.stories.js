import Label from './Label.vue';
import results from '../../../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';

export default {
  title: 'Label',
  component: Label,
  decorators: [withTests({ results })],
};

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Label },
  template: '<Label v-bind="$props"/>',
});

export const Default = Template.bind({});

Default.args = {
  labelFor: 'label',
  labelName: 'ラベル',
};

Default.parameters = {
  jest: ['Label.spec.js'],
};
