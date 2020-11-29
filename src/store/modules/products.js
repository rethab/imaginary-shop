const state = () => ({
  all: [
    {
      "type": "shoes",
      "brand": "Blundstone",
      "name": "Blundstone 500",
      "rating": 3.5,
      "image": "blundstone_500.webp",
      "price": 170,
      "description": "De populaire Blundstone 500 combineert een chique uitstraling met het comfort en gemak van Blundstone."
    },
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
      "type": "shoes",
      "brand": "Dr Martens",
      "name": "1461 Bex Smooth",
      "rating": 5,
      "image": "drmartens_bex-black.png",
      "price": 129,
      "description": "Deze minimalistische schoen met 3 veterogen staat op onze extra dikke"
    },
    {
      "type": "shoes",
      "brand": "Dr Martens",
      "name": "Sinclair",
      "rating": 4,
      "image": "drmartens_sinclair.png",
      "price": 245,
      "description": "Een van onze bestsellers - onze torenhoge Sinclair"
    },
    {
      "type": "shoes",
      "brand": "Dr Martens",
      "name": "Jadon Black",
      "rating": 4.5,
      "image": "drmartens_jadon-black.png",
      "price": 211,
      "description": "Deze Jadon is een vinnige evolutie van onze laars met 8 veterogen"
    },
    {
      "type": "bedsheets",
      "brand": "Zara Home",
      "name": "Dekbed met Bloemen",
      "rating": 4,
      "price": 50,
      "image": "zarahome_bloemenprint.png",
      "description": "Dekbedovertrek van 200-draads perkalkatoen met bloemenprint. Verborgen knoopsluiting aan de onderzijde."
    },
    {
      "type": "bedsheets",
      "brand": "Zara Home",
      "name": "Dekbed met Dennen",
      "rating": 3.5,
      "price": 69,
      "image": "zarahome_dennenprint.png",
      "description": "Dekbedovertrek van 200-draads perkalkatoen met kerstprint met dennenbomen. Verborgen knoopsluiting aan de onderzijde"
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
    },
    {
      "type": "cups",
      "brand": "Mica Decorations",
      "name": "Tabo Geel",
      "rating": 3,
      "price": 4,
      "image": "intratuin_cups.jpg",
      "description": "Maak je tafeldekking compleet met het Tabo servies van Mica Decorations."
    },
    {
      "type": "cups",
      "brand": "HKliving",
      "name": "Cappuccino Cup",
      "rating": 2.5,
      "price": 6,
      "image": "hkliving_stream.jpeg",
      "description": "70's Stream cappuccinokopje 30 cl"
    }
  ]
})

const getters = {

  getProducts: (state) => (type) => {
    const products = type ? state.all.filter(p => p.type == type) : state.all;
    products.sort( () => .5 - Math.random())
    return products
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
