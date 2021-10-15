import { createStore } from 'vuex'

function updateLocalStorage(cart) {
  localstorage.setItem('cart', JSON.stringify(cart))
}
export default createStore({
  state: {
    cart:[]
  },
  getters: {
    ProductQuantity: state => product => {
      const item = state.cart.find(i => i.id == product. id)

      if(item) return item.quantity // item을 찾았다면 해당 반환
      else return null  // !find => null 반환
    }
  },
  mutations: {
    addToCart (state, product) {
      let item = state.cart.find(i => i.id === product.id)

      if(item) {
        item.quantity++
      } else {
        state.cart.push({...product, quantity: 1})
      }

      updateLocalStorage(state.cart)

    },
    removeFromCart (state, product) {
      let item = state.cart.find(i => i.id === product.id)

      if(item) {
        //  수량 1이상인 경우
        if(item.quantity > 1) {  // 제거하기 위해 수량이 2이면 총합 수량은 1 -> 
          item.quantity--
        // 수량 1이하인 경우
        } else {
          // 특정 조건 충분하지 않은 경우 분리하고 담기.
          state.cart = state.cart.filter(i => i.id !== product.id)
        }
      }
      upateLocalStorage(state, cart)
    }
  },
  actions: {
  },
  modules: {
  }
})
