import { shallowMount } from '@vue/test-utils';
import Button from '@/components/atom/Button.vue';

describe('@/components/atom/Button.vue', () => {
  const wrapper = shallowMount(Button, {
    propsData: {
      buttonLabel: 'ボタンラベル',
    },
  });
  it('Props設定時のコンポーネントの状態', () => {
    expect(wrapper.find('Button').text()).toBe('ボタンラベル');
  });
  it('ボタンクリック時のイベント発火', () => {
    wrapper.trigger('click');
    expect(wrapper.emitted().btnEmit).toBeTruthy();
  });
});
