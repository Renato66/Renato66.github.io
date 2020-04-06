<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12 class="white--text text-center pb-0">
        <h2 class="display-3 font-weight-thin">
          {{ $t('contact.title') }}
        </h2>
      </v-flex>
      <v-flex xs4 offset-xs4 mb-6>
        <v-divider class="primary" />
      </v-flex>
    </v-layout>
    <v-layout row wrap mb-6>
      <v-flex xs12 sm6 class="text-center headline">
        <v-icon large>
          mdi-map-marker
        </v-icon>
        <br>
        {{ $t('liveIn') }}
        <a :href="`https://www.google.com.br/maps/place/${contact.city}, ${contact.state}`" rel="noopener" target="_blank" class="white--text">
          <b>{{ contact.city }}</b>
        </a>
      </v-flex>
      <v-flex xs12 sm6 class="text-center headline">
        <v-icon large>
          mdi-email
        </v-icon>
        <br>
        <a :href="`mailto:${contact.mail}`" class="white--text">
          <b>
            {{ contact.mail }}
          </b>
        </a>
      </v-flex>
    </v-layout>
    <v-layout row wrap mb-4>
      <v-spacer />
      <v-flex shrink>
        <v-btn
          icon
          outlined
          large
          :href="`tg://resolve?domain=${contact.telegram}`"
          class="mx-0"
          rel="noopener"
          target="_blank"
          aria-label="Open telegram"
        >
          <v-icon>
            mdi-telegram
          </v-icon>
        </v-btn>
      </v-flex>
      <v-flex shrink>
        <v-btn
          icon
          outlined
          large
          class="mx-0"
          aria-label="Open whatsapp"
          @click="openWhats"
        >
          <v-icon>
            mdi-whatsapp
          </v-icon>
        </v-btn>
      </v-flex>
      <v-flex shrink>
        <v-btn
          icon
          outlined
          large
          :href="`tel:${phone}`"
          class="mx-0"
          aria-label="Open phone"
        >
          <v-icon>
            mdi-phone
          </v-icon>
        </v-btn>
      </v-flex>
      <v-spacer />
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    phone () {
      return `${this.contact.phone.country}${this.contact.phone.area}${this.contact.phone.number}`.replace(/[^0-9]/g, '')
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
        window.open(`https://api.whatsapp.com/send?phone=${this.phone}`, '_blank')
      } else {
        window.open(`https://web.whatsapp.com/send?phone=${this.phone}`, '_blank')
      }
    }
  }
}
</script>

<style>

</style>
