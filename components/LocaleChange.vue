<template>
  <v-menu offset-y nudge-left="6" nudge-top="47" content-class="br-8">
    <template v-slot:activator="{ on }">
      <v-btn icon large :ripple="false" aria-label="Choose language" v-on="on">
        <v-avatar size="24" tile>
          <v-img :src="selectedLocale.flag" />
        </v-avatar>
      </v-btn>
    </template>
    <v-list dense>
      <v-list-item>
        <v-avatar size="24" tile @click="selectLocale(selectedLocale.id)">
          <v-img :src="selectedLocale.flag" />
        </v-avatar>
      </v-list-item>
      <v-list-item
        v-for="locale in filteredLocales"
        :key="locale.id"
        :aria-label="`Choose ${locale.name} language`"
        @click="selectLocale(locale.id)"
      >
        <v-avatar size="24" tile>
          <v-img :src="locale.flag" />
        </v-avatar>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      supportedLocales: [
        {
          id: 'pt',
          name: 'Portugues',
          flag: 'https://www.countryflags.io/BR/flat/24.png'
        },
        {
          id: 'en',
          name: 'English',
          flag: 'https://www.countryflags.io/US/flat/24.png'
        }
      ]
    }
  },
  computed: {
    selectedLocale () {
      return this.supportedLocales.find(elem => elem.id === this.$i18n.locale)
    },
    filteredLocales () {
      return this.supportedLocales.filter(elem => elem.id !== this.$i18n.locale)
    }
  },
  methods: {
    ...mapMutations(['SET_LANG']),
    selectLocale (value) {
      this.SET_LANG(value)
      this.$router.push(`/${value}`)
    }
  }
}
</script>

<style>

</style>
