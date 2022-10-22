import { test, expect } from '@playwright/experimental-ct-vue2'
import Counter from './Counter.vue'

test.use({ viewport: { width: 500, height: 500 } })


test.describe("frame",()=>{

  const array = ['hoge', 'piyo', 'huga'];

  array.forEach(elem=>{
    mountComponent(elem);
  });
});



function mountComponent(elem){
  test(elem, async ({ mount }) => {

    const values = []
    const component = await mount(Counter, {
    props: {
      name: 'test' 
    },
    on: {
        changed: counter => values.push(counter)
    }
  });
  console.log(component);
  console.log("-----------------")
  await component.rerender({ props: { name: 'test2' }});
  console.log(component);
  await component.click()
  expect(values).toEqual([1])
  await component.click()
  expect(values).toEqual([1, 2])
  await component.click()
  expect(values).toEqual([1, 2, 3])
  });
}


