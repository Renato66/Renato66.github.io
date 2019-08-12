<template>
  <v-menu offset-y content-class="br-8">
    <template v-slot:activator="{ on }">
    <v-btn v-on="on" icon large class="ml-0">
      <v-avatar size="24" tile>
        <v-img :src="selectedLocale.flag"></v-img>
      </v-avatar>
    </v-btn>
    </template>
    <v-list dense>
      <v-list-tile
        v-for="locale in supportedLocales"
        :key="locale.id"
        @click="selectLocale(locale.id)"
      >
        <v-list-tile-title>
          <v-avatar size="24" tile>
            <v-img :src="locale.flag"></v-img>
          </v-avatar>
        </v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data () {
    return {
      supportedLocales: [
        {
          id: 'pt-br',
          flag: 'https://www.countryflags.io/BR/flat/24.png'
        },
        {
          id: 'en',
          flag: 'https://www.countryflags.io/US/flat/24.png'
        }
      ]
    }
  },
  methods: {
    selectLocale (value) {
      this.$router.push({ name: 'App', params: {lang: value} })
    }
  },
  computed: {
    selectedLocale () {
      return this.supportedLocales.find(elem => elem.id === this.$i18n.locale)
    }
  }
}
</script>

<style>

</style>
