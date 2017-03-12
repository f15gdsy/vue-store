import test from 'ava'
import Vue from 'vue'
import lite from '../dist/vue-store.min'

test.beforeEach(t => {

})

// test('store injection', t => {
//   const vm = new Vue()
//   const store = new StoreLite()

//   t.not(vm.$store, null)
//   t.not(vm.$store, undefined)
// })

test('set data - string', t => {
  const store = new lite.StoreLite()
  store.set('test', 123)
  t.is(store.core.test, 123)
})

test('set data - index string', t => {
  const store = new lite.StoreLite()
  store.set('test.begin', 123)
  t.is(store.core.test.begin, 123)
})
