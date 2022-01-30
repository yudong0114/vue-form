import { shallowMount } from '@vue/test-utils';
import InputItem from '@/components/organism/InputItem.vue';

describe('@/components/organism/InputItem.vue', () => {
  const wrapper = shallowMount(InputItem, {
    propsData: {
      itemName: 'itemName',
      itemId: 'itemId',
      itemValue: 'itemValue',
    },
  });
  it('Props設定時のコンポーネントの状態', () => {
    expect(wrapper.findComponent({ name: 'Label' })).toBeTruthy();
    expect(wrapper.findComponent({ name: 'Input' })).toBeTruthy();
  });
  it('updateメソッドの発火', () => {
    wrapper.vm.update('thisValue');
    expect(wrapper.emitted().updateFormData[0]).toEqual(['itemId', 'thisValue']);
  });
});
