import { test, expect } from '@playwright/experimental-ct-vue2'

import Radio from './v-radio.vue'

test.use({ viewport: { width: 500, height: 500 } })

test('should work', async ({ mount }) => {
  const values = []
  const component = await mount(Radio, {
    props: {
      name: 'test' 
    },
    // on: {
    //   changed: Radio => values.push(counter)
    // }
  })
  console.log(component);
  console.log("-----------------")
  await component.rerender({ props: { name: 'test2' }});
  console.log(component);
  // await component.click()
  // expect(values).toEqual([1])
  // await component.click()
  // expect(values).toEqual([1, 2])
  // await component.click()
  // expect(values).toEqual([1, 2, 3])
})