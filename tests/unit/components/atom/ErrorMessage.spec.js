import { shallowMount } from '@vue/test-utils';
import ErrorMessage from '@/components/atom/ErrorMessage.vue';

describe('@/components/atom/ErrorMessage.vue', () => {
  const wrapper = shallowMount(ErrorMessage, {
    propsData: {
      errorMessage: 'エラーメッセージ',
    },
  });
  it('Props設定時のコンポーネントの状態', () => {
    expect(wrapper.find('.errorMessage').text()).toBe('エラーメッセージ');
  });
});
