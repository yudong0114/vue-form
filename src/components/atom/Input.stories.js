import Input from './Input.vue';

export default {
  title: 'Input',
  component: Input,
};

export const Default = () => ({
  components: { Input },
  template: '<Input value="テキスト" />',
});
