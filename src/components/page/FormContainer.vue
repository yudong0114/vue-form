<script>
import Form from '@/components/page/Form.vue';

const connect = (Presenter) => {
  return {
    name: `${Presenter.name}Container`,
    data() {
      return {
        formData: {
          name: '',
          email: '',
        },
      };
    },
    methods: {
      updateFormData(key, value) {
        this.formData[key] = value;
      },
      submit() {
        alert(`nameは${this.formData.name}\nemalは${this.formData.email}`);
      },
    },
    render(h) {
      return h(Presenter, {
        props: {
          name: this.formData.name,
          email: this.formData.email,
          updateFormData: this.updateFormData,
          submit: this.submit,
        },
      });
    },
  };
};

export default connect(Form);
</script>
