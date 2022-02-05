import Label from './Label.vue';

export default {
  title: 'Label',
  component: Label,
};

export const Default = () => ({
  components: { Label },
  template: '<Label labelFor="label" labelName="ラベル" />',
});
