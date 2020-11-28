const state = () => ({
  all: [
    {
      "type": "shoes",
      "brand": "Nike",
      "name": "Air One",
      "rating": 4.5,
      "image": "nike_air-one.jpeg",
      "price": 199,
      "description": "Unisex sporty shoe for everybody. Buy now and save 50%."
    },
    {
      "type": "bedsheets",
      "brand": "Peuter",
      "name": "Zacht Katoen",
      "rating": 2.5,
      "price": 35,
      "image": "peuter_zach-katoen.webp",
      "description": "Een zachte, katoenen dekbedovertrek van 120 bij 150 cm met een kussensloop van 50 bij 60 cm."
    },
    {
      "type": "cups",
      "brand": "Paste Afresh",
      "name": "Pols Potten",
      "rating": 3.5,
      "price": 7,
      "image": "pastel_pols-potten.jpeg",
      "description": "Pastel Afresh mok 35 cl set van 4"
    }
  ]
})

const getters = {

  getProducts: (state) => (type) => {
    console.log(type);
    if (!type) return state.all;
    else return state.all.filter(p => p.type == type);
  }


}

const actions = {
}

const mutations = {
  setProducts (state, products) {
    state.all = products
  },

  decrementProductInventory (state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}