import Label from './Label.vue';

export default {
  title: 'Label',
  component: Label,
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
