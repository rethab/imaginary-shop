<template>
  <div>
  <v-container v-if="numberOfProducts() == 0">
    Shopping Cart is Empty!

    <v-spacer/>

    <v-btn class="mt-5" color="primary" to="/products">
      Continue Shopping
    </v-btn>

  </v-container>
  <v-container v-else>
   <v-row>
     <v-col>
      <v-simple-table dark>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left"> Product </th>
              <th class="text-left"> Quantity </th>
              <th class="text-right"> Price </th>
              <th class="text-right"> Total </th>
              <th > </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="product in cartProducts()"
              :key="product.name"
            >
              <td>{{ product.name }}</td>
              <td>{{ product.quantity }}</td>
              <td class="text-right">€ {{ product.price }}</td>
              <td class="text-right">€ {{ product.price * product.quantity }}</td>
              <td class="text-right">
                <v-icon color="error" @click="removeProduct(product)">mdi-minus-circle-outline</v-icon>
              </td>
            </tr>
            <tr class="font-weight-bold">
              <td class="text-right" colspan=3>Total Price</td>
              <td class="text-right">€ {{totalPrice}}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
     </v-col>
   </v-row>

   <v-row>
     <v-col class="text-right">
       <router-link to="/checkout">
        <v-btn class="ml-5" color="primary">
          Go to Checkout <v-icon>mdi-currency-usd</v-icon>
        </v-btn>
       </router-link>
     </v-col>
   </v-row>
  
  </v-container>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    computed: {
      totalPrice() {
        var total = 0;
        this.cartProducts().forEach(product => {
          total += product.price * product.quantity;
        });
        return total;
      }
    },
    methods: {
      ...mapGetters('cart', ['cartProducts', 'numberOfProducts']),
      ...mapActions('cart', [ 'removeProduct']),
    }
  }
</script>
