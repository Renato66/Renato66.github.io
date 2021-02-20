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
                {{ mdiBell }}
              </v-icon>
            </template>
            <v-avatar
              size="50"
              style="cursor:pointer;"
              v-on="on"
            >
              <v-img
                :src="`https://images.weserv.nl/?url=${contact.avatar}%3Fsize=50&output=${imageOutput}`"
                :lazy-src="`https://images.weserv.nl/?url=${contact.avatar}%3Fsize=50&q=10&output=webp`"
                :alt="contact.shortName"
              />
            </v-avatar>
          </v-badge>
        </template>
        <v-card>
          <v-card-text>
            <v-layout row wrap class="ml-2">
              <v-flex xs12>
                <p class="grey--text caption mb-1">
                  {{ $t('chat.who') }} <strong>{{ contact.shortName }}</strong>:
                </p>
              </v-flex>
              <v-flex xs12>
                <p class="mb-2">
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
                  @click="reject"
                >
                  {{ $t('chat.actions.reject') }}
                </v-btn>
              </v-flex>
              <v-flex shrink class="ml-2">
                <v-btn
                  color="primary"
                  class="text-none"
                  outlined
                  rounded
                  small
                  @click="accept"
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
import { mdiBell } from '@mdi/js'
import { mapGetters } from 'vuex'
export default {
  props: {
    contact: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      notification: false,
      show: false,
      willNotify: true,
      menu: false,
      mdiBell
    }
  },
  computed: {
    ...mapGetters(['imageOutput']),
    phone () {
      return `${this.contact.phone.country}${this.contact.phone.area}${this.contact.phone.number}`.replace(/[^0-9]/g, '')
    }
  },
  watch: {
    menu (value) {
      this.willNotify = false
      this.notification = false
      if (value) {
        this.$ga.event('chat', 'open')
      }
    },
    show (value) {
      if (value) {
        this.notificationAlert()
      }
    }
  },
  beforeDestroy () {
    if (process.browser) {
      window.removeEventListener('scroll', this.checkPosition)
    }
  },
  beforeMount () {
    if (process.browser) {
      window.addEventListener('scroll', this.checkPosition)
    }
  },
  methods: {
    reject () {
      this.$ga.event('resume', 'reject', 'chat')
      this.menu = false
    },
    accept () {
      this.$ga.event('resume', 'download', 'chat')
      this.$emit('print-resume')
    },
    notificationAlert () {
      if (this.willNotify) {
        this.willNotify = false
        setTimeout(() => {
          this.notification = true
          if (process.browser) {
            window.navigator.vibrate(200)
          }
        }, 1000)
      }
    },
    checkPosition () {
      if (process.browser) {
        const windowY = window.scrollY
        if (windowY < 400) {
          this.show = false
        } else {
          this.show = true
        }
      }
    }
  }
}
</script>

<style>
.chat-avatar{
  position: fixed;
  z-index:2;
  bottom: 25px;
  left: 25px;
}
</style>
