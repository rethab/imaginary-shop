<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field label="First Name" ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field label="Last Name" ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="9">
          <v-text-field label="Street" ></v-text-field>
        </v-col>

        <v-col cols="12" sm="3">
          <v-text-field label="Number" ></v-text-field>
        </v-col>
      </v-row>
      <v-row>

        <v-col cols="12" sm="3">
          <v-text-field label="Postal Code" ></v-text-field>
        </v-col>

        <v-col cols="12" sm="9">
          <v-text-field label="City" ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-btn color="primary" @click="$emit('next')" >Continue</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-row>
    </v-container>

  </v-form>
</template>
