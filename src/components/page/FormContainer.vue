<script>
import Form from '@/components/page/Form.vue';
import { inputEmptyCheck } from '@/functions/validation';

const connect = (Presenter) => {
  return {
    name: `${Presenter.name}Container`,
    data() {
      return {
        formData: {
          name: '',
          email: '',
        },
        formValidation: {
          name: [],
          email: [],
        },
      };
    },
    watch: {
      'formData.name': function () {
        const nameFormValidation = [inputEmptyCheck('name', this.formData.name)];
        this.formValidation.name = nameFormValidation.filter(Boolean);
      },
      'formData.email': function () {
        const emailFormValidation = [inputEmptyCheck('email', this.formData.email)];
        this.formValidation.email = emailFormValidation.filter(Boolean);
      },
    },
    computed: {
      isSubmit: function () {
        return Object.keys(this.formValidation).every((formValidationKey) => {
          return this.formValidation[formValidationKey].length === 0;
        });
      },
    },
    methods: {
      updateFormData(key, value) {
        this.formData[key] = value;
      },
      submit() {
        Object.keys(this.formData).map((formDataKey) => {
          const thisFormValidation = [inputEmptyCheck(formDataKey, this.formData[formDataKey])];
          this.formValidation[formDataKey] = thisFormValidation.filter(Boolean);
        });
        if (this.isSubmit) {
          alert(`nameは${this.formData.name}\nemalは${this.formData.email}`);
        }
      },
    },
    render(h) {
      return h(Presenter, {
        props: {
          formData: this.formData,
          formValidation: this.formValidation,
          isSubmit: this.isSubmit,
          updateFormData: this.updateFormData,
          submit: this.submit,
        },
      });
    },
  };
};

export default connect(Form);
</script>
