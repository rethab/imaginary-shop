<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="9">
          <v-text-field label="Credit Card Number" ></v-text-field>
        </v-col>

        <v-col cols="12" sm="3">
          <v-text-field label="CVC" ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="3">
          <v-text-field label="Expiration" ></v-text-field>
        </v-col>

        <v-col cols="12" sm="9">
          <v-text-field label="Card Holder" ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-btn color="primary" @click="$emit('next')" >Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-row>
    </v-container>

  </v-form>
</template>
