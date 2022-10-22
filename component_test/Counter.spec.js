import { test, expect } from '@playwright/experimental-ct-vue2'
import mountComponent from './mountComponent.spec'　

test.use({ viewport: { width: 500, height: 500 } })


test.describe("frame",()=>{
  console.log("hihihi");

  const array = ['hoge', 'piyo', 'huga'];

  array.forEach(elem=>{
    mountComponent(elem);
  });
});


