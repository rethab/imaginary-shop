<template>

<v-card max-width="374" color="secondary" class="lighten-1">
  <v-img height="250" :src="require('@/assets/products/' + imagePath)" />
  <v-card-title>{{product.name}}</v-card-title>

  <v-card-text>

      <v-row align="center" class="mx-0" >
        <v-rating
          :value="product.rating"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4"> {{product.rating}} (413) </div>
      </v-row>

      <div class="my-4 subtitle-1"> Made by {{product.brand}} </div>

      <div>{{product.description}}</div>

  </v-card-text>

  <v-card-actions>
      <span class="ml-1">€ {{product.price}}</span>
      <v-spacer/>
      <TopSnackbar message="Product added to Cart" v-model="topSnackbar"/>
      <v-btn color="primary" @click="buyProduct(product)">
        Buy
      </v-btn>
  </v-card-actions>


</v-card>

</template>

<script>
  import { mapActions } from 'vuex';
  import TopSnackbar from '@/components/TopSnackbar';

  export default {
    components: {
      TopSnackbar
    },

    props: {
      product: Object
    },

    data() {
      return {
        topSnackbar: null
      }
    },

    computed: {
      imagePath() {
        return `${this.product.type}/${this.product.image}`;
      }
    },

    methods: {
      ...mapActions('cart', ['addProductToCart']),

      buyProduct(p) {
        this.addProductToCart(p).then(() => {
          let ts = (new Date()).getSeconds();
          this.topSnackbar = `product-add-${p.name}-${ts}`
        });
      }
    }
  }
</script>
