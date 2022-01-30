import { shallowMount } from '@vue/test-utils';
import Label from '@/components/atom/Label.vue';

describe('@/components/atom/Label.vue', () => {
  const wrapper = shallowMount(Label, {
    propsData: {
      labelFor: 'idfor',
      labelName: 'ラベル',
    },
  });
  it('Props設定時のコンポーネントの状態', () => {
    expect(wrapper.find('label').text()).toBe('ラベル');
    expect(wrapper.find('label').attributes().for).toBe('idfor');
  });
});
