import { createLocalVue, shallowMount } from '@vue/test-utils';
import FormContainer from '@/components/page/FormContainer.vue';

describe('@/components/page/FormContainer.vue', () => {
  const localVue = createLocalVue();
  const wrapper = shallowMount(FormContainer, {
    localVue,
  });
  window.alert = jest.fn();
  it('watch - formData.name', async () => {
    // バリデーションエラーが発生しないパターン
    await wrapper.setData({ formData: { name: 'nameデータ', email: 'emailデータ' } });
    expect(wrapper.vm.formValidation).toEqual({
      name: [],
      email: [],
    });
    // バリデーションエラーが発生するパターン
    await wrapper.setData({ formData: { name: '', email: 'emailデータ' } });
    expect(wrapper.vm.formValidation).toEqual({
      name: ['nameが入力欄が空です。'],
      email: [],
    });
  });
  it('watch - formData.email', async () => {
    // バリデーションエラーが発生しないパターン
    await wrapper.setData({ formData: { name: 'nameデータ', email: 'emailデータ' } });
    expect(wrapper.vm.formValidation).toEqual({
      name: [],
      email: [],
    });
    // バリデーションエラーが発生するパターン
    await wrapper.setData({ formData: { name: 'nameデータ', email: '' } });
    expect(wrapper.vm.formValidation).toEqual({
      name: [],
      email: ['emailが入力欄が空です。'],
    });
  });
  it('computed - isSubmit', async () => {
    await wrapper.setData({
      formValidation: { name: ['nameエラーデータ'], email: ['emailエラーデータ'] },
    });
    expect(wrapper.vm.isSubmit).toBeFalsy();
    await wrapper.setData({ formValidation: { name: [], email: [] } });
    expect(wrapper.vm.isSubmit).toBeTruthy();
  });
  it('methods - updateFormData', () => {
    wrapper.vm.updateFormData('name', 'nameデータ');
    expect(wrapper.vm.formData.name).toBe('nameデータ');
  });
  it('methods - submit', async () => {
    wrapper.setData({ formData: { name: '', email: '' } });
    wrapper.vm.submit();
    expect(window.alert).toHaveBeenCalledTimes(0);
    expect(wrapper.vm.formValidation).toEqual({
      name: ['nameが入力欄が空です。'],
      email: ['emailが入力欄が空です。'],
    });
    wrapper.setData({ formData: { name: 'nameデータ', email: 'emailデータ' } });
    wrapper.vm.submit();
    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(wrapper.vm.formValidation).toEqual({
      name: [],
      email: [],
    });
  });
});
