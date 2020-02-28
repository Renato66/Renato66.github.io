<template>
  <v-scale-transition>
    <div v-show="show" class="chat-avatar">
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        max-width="260"
        offset-y
        fixed
        bottom
        nudge-bottom="100"
      >
      <template v-slot:activator="{ on }">
        <v-badge
          v-model="notification"
          color="red"
          right
          bottom
          overlap
          >
          <template v-slot:badge>
            <v-icon
              dark
              size="12"
            >
              mdi-bell
            </v-icon>
          </template>
          <v-avatar size="50" style="cursor:pointer;" 
            v-on="on"
          >
            <v-img :src="`https://images.weserv.nl/?url=${contact.avatar}?size=50`"></v-img>
          </v-avatar>
        </v-badge>
      </template>
      <v-card>
        <v-card-text>
          <v-layout row wrap>
            <v-flex xs12>
              <p class="grey--text caption mb-1" v-html="$t('chat.who', { name: contact.shortName })">
              </p>
            </v-flex>
            <v-flex xs12>
              <p class="mb-1">
                {{ $t('chat.message') }}
              </p>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex shrink>
              <v-btn color="grey" class="ml-0 text-none" @click="menu = false" outline round small>
                {{ $t('chat.actions.reject') }}
              </v-btn>
            </v-flex>
            <v-flex shrink>
              <v-btn color="primary"  class="text-none" @click="$emit('print-resume')" outline round small>
                {{ $t('chat.actions.download') }}
              </v-btn>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-menu>
    </div>
  </v-scale-transition>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object
    }
  },
  data () {
    return {
      notification: false,
      show: false,
      willNotify: true,
      menu: false
    }
  },
  methods: {
    notificationAlert () {
      if (this.willNotify) {
        this.willNotify = false
        setTimeout(() => {
          this.notification = true
          window.navigator.vibrate(200)
        }, 1000)
      }
    },
    checkPosition () {
      let windowY = window.scrollY
      if (windowY < 400) {
        this.show = false
        } else {
        this.show = true
      }
    },
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
  },
  computed: {
    phone () {
      return `${this.contact.phone.country}${this.contact.phone.area}${this.contact.phone.number}`.replace(/[^0-9]/g, '')
    }
  },
  watch: {
    menu (value) {
      this.willNotify = false
      this.notification = false
    },
    show (value) {
      if (value) {
        this.notificationAlert()
      }
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.checkPosition)
  },
  created () {
    window.addEventListener('scroll', this.checkPosition)
  }
}
</script>

<style>
.chat-avatar{
  position: fixed;
  bottom: 25px;
  left: 25px;
}
</style>
