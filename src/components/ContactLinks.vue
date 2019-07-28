<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-xs-center headline">
        <v-icon large>mdi-map-marker</v-icon>
        <br>
        {{ $t('liveIn') }}
        <a :href="`https://www.google.com.br/maps/place/${contact.city}, ${contact.state}`" class="white--text">
          <b>{{ contact.city }}</b>
        </a>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center headline">
        <v-icon large>mdi-email</v-icon>
        <br>
        <a :href="`mailto:${contact.mail}`" class="white--text">
          <b>
            {{ contact.mail }}
          </b>
        </a>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-spacer></v-spacer>
      <v-flex shrink>
        <v-btn icon outline large :href="`tg://resolve?domain=${contact.telegram}`" class="mx-0">
          <v-icon>
            mdi-telegram
          </v-icon>
        </v-btn>
      </v-flex>
      <v-flex shrink>
        <v-btn icon outline large @click="openWhats" class="mx-0">
          <v-icon>
            mdi-whatsapp
          </v-icon>
        </v-btn>
      </v-flex>
      <v-flex shrink>
        <v-btn icon outline large :href="`tel:${contact.phone}`" class="mx-0">
          <v-icon>
            mdi-phone
          </v-icon>
        </v-btn>
      </v-flex>
      <v-spacer></v-spacer>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object
    }
  },
  methods: {
    openWhats () {
      if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)) {
        window.open(`https://api.whatsapp.com/send?phone=${this.contact.phone}`, '_blank')
      } else {
        window.open(`https://web.whatsapp.com/send?phone=${this.contact.phone}`, '_blank')
      }
    }
  }
}
</script>

<style>

</style>
