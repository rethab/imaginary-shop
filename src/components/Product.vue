<template>

<v-card max-width="374">
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
      <v-btn color="deep-purple lighten-2" text @click="addToCart">
        Buy
      </v-btn>
    </v-card-actions>


</v-card>

</template>

<script>

  export default {
    props: {
      product: Object
    },

    computed: {
      imagePath() {
        return `${this.product.type}/${this.product.image}`;
      }
    },

    methods: {
      addToCart() {}
    }
  }
</script>
