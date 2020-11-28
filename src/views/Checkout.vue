<template>
  <div>
  <v-stepper
    v-model="step"
    vertical
  >
    <v-stepper-step :complete="step > 1" step="1" >
      Shipping Address
    </v-stepper-step>

    <v-stepper-content step="1">
      <ShippingAddress v-on:next="step = 2"/>
    </v-stepper-content>

    <v-stepper-step :complete="step > 2" step="2" >
      Payment
    </v-stepper-step>

    <v-stepper-content step="2">
      <Payment v-on:next="step = 3"/>
    </v-stepper-content>

    <v-stepper-step :complete="step > 3" step="3" >
      Confirmation
    </v-stepper-step>

    <v-stepper-content step="3">
          Congratulations! Your order is being shipped.

          <v-progress-linear
            color="primary accent-4"
            indeterminate
            rounded
            height="6"
          ></v-progress-linear>
    </v-stepper-content>

  </v-stepper>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  import ShippingAddress from '@/components/ShippingAddress';
  import Payment from '@/components/Payment';

  export default {
    components: {
      ShippingAddress,
      Payment
    },
    data() {
      return {
        step: 1
      }
    },
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
    }
  }
</script>
