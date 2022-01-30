import { shallowMount } from '@vue/test-utils';
import Input from '@/components/atom/Input.vue';

describe('@/components/atom/Input.vue', () => {
  const wrapper = shallowMount(Input);
  it('デフォルト時のコンポーネントの状態', () => {
    expect(wrapper.find('input').element.value).toBe('');
  });
  it('Props設定時のコンポーネントの状態', () => {
    const textInput = wrapper.find('input');
    textInput.setValue('テキスト入力');
    expect(textInput.element.value).toBe('テキスト入力');
  });
});
