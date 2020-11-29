<template>
  <v-snackbar v-bind:value="value" :timeout="3000" :top="true">
    {{ message }}

    <template v-slot:action="{ attrs }">
      <v-btn color="primary" text v-bind="attrs" @click="$emit('input', false)">
        Close
      </v-btn>
    </template>
  </v-snackbar>

</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    },
    value: {
      show: {
        required: true
      }
    }
  },
}
</script>
