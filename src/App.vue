<template>
<v-app>
  <v-app-bar
   absolute
   dark
   shrink-on-scroll
   prominent
   app>


      <v-toolbar-title>Imagine Shopping</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <router-link to="/cart">
          <v-icon>mdi-cart-variant</v-icon>
        </router-link>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>
            <router-link to="/">All</router-link>
          </v-tab>
          <v-spacer/>
          <v-tab>
            <router-link to="/products/bedsheets">Bedsheets</router-link>
          </v-tab>
          <v-tab>
            <router-link to="/products/cups">Cups</router-link>
          </v-tab>
          <v-tab>
            <router-link to="/products/shoes">Shoes</router-link>
          </v-tab>
        </v-tabs>
      </template>
  </v-app-bar>

  <v-main>

    <v-container fluid>

      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
  </v-footer>
</v-app>
</template>

