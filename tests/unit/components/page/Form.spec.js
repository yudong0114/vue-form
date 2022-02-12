import { shallowMount } from '@vue/test-utils';
import Form from '@/components/page/Form.vue';

describe('@/components/page/Form.vue', () => {
  it('スナップショットテスト', () => {
    const wrapper = shallowMount(Form, {
      propsData: {
        formData: {
          name: '',
          email: '',
        },
        formValidation: {
          name: [],
          email: [],
        },
        isSubmit: true,
        updateFormData: () => {},
        submit: () => {},
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
  it('Props設定時のコンポーネントの状態', () => {
    const wrapper = shallowMount(Form, {
      propsData: {
        formData: {
          name: '',
          email: '',
        },
        formValidation: {
          name: [],
          email: [],
        },
        isSubmit: true,
        updateFormData: () => {},
        submit: () => {},
      },
    });
    expect(wrapper.findAllComponents({ name: 'InputItem' })).toHaveLength(2);
    expect(wrapper.findComponent({ name: 'Button' })).toBeTruthy();
    expect(wrapper.findComponent({ name: 'Button' }).attributes().disabled).toBeFalsy();
  });
  it('バリデーションエラー時のテスト', () => {
    const wrapper = shallowMount(Form, {
      propsData: {
        formData: {
          name: '',
          email: '',
        },
        formValidation: {
          name: ['error'],
          email: ['error'],
        },
        isSubmit: false,
        updateFormData: () => {},
        submit: () => {},
      },
    });
    expect(wrapper.findAllComponents({ name: 'InputItem' })).toHaveLength(2);
    expect(wrapper.findAllComponents({ name: 'ErrorMessage' })).toHaveLength(2);
    expect(wrapper.findComponent({ name: 'Button' }).attributes().disabled).toBeTruthy();
  });
  it('ボタン状態のテスト', async () => {
    const wrapper = shallowMount(Form, {
      propsData: {
        formData: {
          name: '',
          email: '',
        },
        formValidation: {
          name: ['error'],
          email: ['error'],
        },
        isSubmit: true,
        updateFormData: () => {},
        submit: () => {},
      },
    });
    // isSubmitがtrueの状態 -> disabledが有効
    expect(wrapper.findComponent({ name: 'Button' }).attributes().disabled).toBeFalsy();
    // isSubmitがfalseの状態 -> disabledが無効
    wrapper.setProps({ isSubmit: false });
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent({ name: 'Button' }).attributes().disabled).toBeTruthy();
  });
  it('イベントによるメソッド発火のテスト', () => {
    const wrapper = shallowMount(Form, {
      propsData: {
        formData: {
          name: '',
          email: '',
        },
        formValidation: {
          name: [],
          email: [],
        },
        isSubmit: true,
        updateFormData: jest.fn(),
        submit: jest.fn(),
      },
    });
    // updateFormDataメソッド
    const spyUpdateFormData = jest.spyOn(wrapper.vm, 'updateFormData');
    // スタブコンポーネントからのeventUp
    wrapper.findComponent({ name: 'InputItem' }).vm.$emit('updateFormData');
    expect(spyUpdateFormData).toHaveBeenCalledTimes(1);
    // Propsのメソッドを実行
    wrapper.vm.updateFormData();
    expect(spyUpdateFormData).toHaveBeenCalledTimes(2);
    // submitメソッド
    const spySubmit = jest.spyOn(wrapper.vm, 'submit');
    // スタブコンポーネントからのeventUp
    wrapper.findComponent({ name: 'Button' }).vm.$emit('btnEmit');
    expect(spySubmit).toHaveBeenCalledTimes(1);
    // Propsのメソッドを実行
    wrapper.vm.submit();
    expect(spySubmit).toHaveBeenCalledTimes(2);
  });
});
