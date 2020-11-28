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
  checkout ({ commit, state }, products) {
    const savedCartItems = [...state.items]
    commit('setCheckoutStatus', null)
    commit('setCartItems', { items: [] })
    commit('setCheckoutStatus', 'successful')
    console.log(products, savedCartItems);
  },

  addProductToCart ({ state, commit }, product) {
    console.log(product);
    commit('setCheckoutStatus', null)
    const cartItem = state.items.find(item => item.name === product.name)
    if (!cartItem) {
      commit('pushProductToCart', { product: product})
    } else {
      commit('incrementItemQuantity', cartItem)
    }
    commit('products/decrementProductInventory', { id: product.id }, { root: true })
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

  incrementItemQuantity (state, { name }) {
    const cartItem = state.items.find(item => item.name === name)
    cartItem.quantity++
  },

  setCartItems (state, { items }) {
    state.items = items
  },

  setCheckoutStatus (state, status) {
    state.checkoutStatus = status
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
