import Vue from 'vue';

const state = () => ({
  items: [],
  checkoutStatus: null
})

const getters = {
  numberOfProducts: state => {
    return state.items.length;
  },
  cartProducts: state => {
    return state.items;
  },

  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}

const actions = {

  addProductToCart ({ state, commit }, product) {
    const cartItem = state.items.find(item => item.name === product.name)
    if (!cartItem) {
      commit('pushProductToCart', { product: product})
    } else {
      commit('incrementItemQuantity', cartItem)
    }
  },

  removeProduct ({ state, commit }, product) {
    const cartItem = state.items.find(item => item.name === product.name)
    if (cartItem.quantity == 1) {
      commit('removeProductFromCart', { product: product})
    } else {
      commit('decrementItemQuantity', cartItem)
    }
  }
}

// mutations
const mutations = {
  pushProductToCart (state, { product }) {
    product.quantity = 1;
    state.items.push(
      product
    )
  },

  removeProductFromCart (state, { product }) {
    state.items = state.items.filter(item => item.name != product.name)
  },

  incrementItemQuantity (state, { name }) {
    const cartItem = state.items.find(item => item.name === name)
    cartItem.quantity++
  },

  decrementItemQuantity (state, { name }) {
    const index = state.items.findIndex(item => item.name === name)
    const cartItem = state.items[index]
    cartItem.quantity--
    Vue.set(state.items, index, cartItem)
  },

  setCartItems (state, { items }) {
    state.items = items
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
