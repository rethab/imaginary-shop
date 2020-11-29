<template>
<v-app>
  <v-app-bar absolute dark shrink-on-scroll prominent app>


      <v-toolbar-title>Lau's Shop</v-toolbar-title>

      <v-spacer></v-spacer>

      <TopRightMenu />

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab to="/">All </v-tab>
          <v-spacer/>
          <v-tab to="/products/bedsheets">Bedsheets</v-tab>
          <v-tab to="/products/cups">Cups</v-tab>
          <v-tab to="/products/shoes">Shoes </v-tab>
        </v-tabs>
      </template>
  </v-app-bar>

  <v-main>

    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-main>

  <Footer />
</v-app>
</template>

<script>
  import TopRightMenu from '@/components/TopRightMenu';
  import Footer from '@/components/Footer';

  export default {
    components: {
      TopRightMenu, Footer
    }
  }
</script>
