<template>
  <v-btn icon to="/cart">
    <v-icon>mdi-cart-variant</v-icon> ({{numberOfProducts()}})
  </v-btn>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    methods: mapGetters('cart', ['numberOfProducts'])
  }
</script>
