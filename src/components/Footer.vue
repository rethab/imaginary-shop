  <template>
    <v-footer v-bind="localAttrs" :padless="padless" app >
      <v-card flat tile width="100%" color="grey" class="darken-3 text-center">

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Lau's Shop</strong>
        </v-card-text>
      </v-card>
    </v-footer>
</template>

