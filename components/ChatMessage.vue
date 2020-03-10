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
            <v-avatar
              size="50"
              style="cursor:pointer;"
              v-on="on"
            >
              <v-img
                :src="`https://images.weserv.nl/?url=${contact.avatar}%3Fsize=50&output=png`"
                :srcset="`https://images.weserv.nl/?url=${contact.avatar}%3Fsize=50&output=webp`"
                :lazy-src="`https://images.weserv.nl/?url=${contact.avatar}%3Fsize=50&q=20&output=webp`"
                :alt="contact.shortName"
              />
            </v-avatar>
          </v-badge>
        </template>
        <v-card>
          <v-card-text>
            <v-layout row wrap>
              <v-flex xs12>
                <p class="grey--text caption mb-1" v-html="$t('chat.who', { name: contact.shortName })" />
              </v-flex>
              <v-flex xs12>
                <p class="mb-1">
                  {{ $t('chat.message') }}
                </p>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex shrink>
                <v-btn
                  color="grey"
                  class="ml-0 text-none"
                  outlined
                  rounded
                  small
                  @click="menu = false"
                >
                  {{ $t('chat.actions.reject') }}
                </v-btn>
              </v-flex>
              <v-flex shrink>
                <v-btn
                  color="primary"
                  class="text-none"
                  outlined
                  rounded
                  small
                  @click="$emit('print-resume')"
                >
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
    if (process.client) {
      window.removeEventListener('scroll', this.checkPosition)
    }
  },
  created () {
    if (process.client) {
      window.addEventListener('scroll', this.checkPosition)
    }
  },
  methods: {
    notificationAlert () {
      if (this.willNotify) {
        this.willNotify = false
        setTimeout(() => {
          this.notification = true
          if (process.client) {
            window.navigator.vibrate(200)
          }
        }, 1000)
      }
    },
    checkPosition () {
      if (process.client) {
        const windowY = window.scrollY
        if (windowY < 400) {
          this.show = false
        } else {
          this.show = true
        }
      }
    },
    openWhats () {
      if (process.client) {
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
}
</script>

<style>
.chat-avatar{
  position: fixed;
  bottom: 25px;
  left: 25px;
}
</style>
