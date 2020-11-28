<template>
  <v-container>
    <v-row>
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          {{ title }}
        </h1>
      </v-col>
    </v-row>

    <v-row cols=4>
      <v-col v-for="product in products" :key="product.id">
        <Product :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  import {  mapActions } from 'vuex';
  import Product from '@/components/Product';

  export default {

    components: {
      Product
    },

    computed: {
      type() {
        return this.$route.params.type
      },

      products() {
        return this.$store.getters["products/getProducts"](this.type)
      },

      title() {
        let title = this.type;
        if (!title) { title = "All Products"; }
        else { title = title.charAt(0).toUpperCase() + title.slice(1); }
        return title
      }
    },

    methods: mapActions('cart', [
      'addProductToCart'
    ])
  }
</script>
