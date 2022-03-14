import { mount } from '@vue/test-utils';
import About from '@/views/About.vue';

describe('Test About', () => {
  // eslint-disable-next-line jest/expect-expect
  it('render', () => {
    const wrapper = mount(About);
    console.log(wrapper.html());
  });
});
