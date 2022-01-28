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
        formValidation: {
          name: [],
          email: [],
        },
      };
    },
    watch: {
      'formData.name': function () {
        // 入力項目が未入力
        if (this.formData.name.length === 0) {
          this.formValidation.name = ['nameが入力欄が空です。'];
        } else {
          this.formValidation.name = [];
        }
      },
      'formData.email': function () {
        // 入力項目が未入力
        if (this.formData.email.length === 0) {
          this.formValidation.email = ['emailが入力欄が空です。'];
        } else {
          this.formValidation.email = [];
        }
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
          // 入力項目が未入力
          if (this.formData[formDataKey].length === 0) {
            this.formValidation[formDataKey] = [`${formDataKey}入力欄が空です。`];
          } else {
            this.formValidation[formDataKey] = [];
          }
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
