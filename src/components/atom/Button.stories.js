import Button from './Button.vue';

export default {
  title: 'Button',
  component: Button,
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
