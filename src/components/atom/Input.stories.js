import Input from './Input.vue';

export default {
  title: 'Input',
  component: Input,
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
