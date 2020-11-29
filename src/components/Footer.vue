  <template>
    <v-footer v-bind="localAttrs" :padless="padless" app >
      <v-card dark flat tile width="100%" class="lighten-3 text-center">

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Lau's Shop</strong>
        </v-card-text>
      </v-card>
    </v-footer>
</template>

