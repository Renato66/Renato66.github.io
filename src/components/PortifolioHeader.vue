<template>
  <v-container>
    <v-layout mt-3>
      <v-flex shrink>
        <v-menu offset-y content-class="br-8">
          <template v-slot:activator="{ on }">
          <v-btn v-on="on" icon :outline="!followScroll" :color="followScroll ? 'black' : 'white'" large :class="{'follow-scroll': followScroll}" class="ml-0">
              <v-icon>
                mdi-menu
              </v-icon>
            </v-btn>
          </template>
          <v-list dense>
            <v-list-tile
              v-for="item in menu"
              :key="item"
              @click="$vuetify.goTo(`#${item}`)"
            >
              <v-list-tile-title>{{ $t(`menu.${item}`) }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex shrink>
        <LocaleChange />
      </v-flex>
    </v-layout>
    <v-layout class="mt-5">
      <v-flex class="text-xs-center">
        <v-avatar size="236">
          <v-img
            :src="`https://images.weserv.nl/?url=${contact.avatar}%3Fsize=236&output=png`"
            :srcset="`https://images.weserv.nl/?url=${contact.avatar}%3Fsize=236&output=webp`"
            :lazy-src="`https://images.weserv.nl/?url=${contact.avatar}%3Fsize=236&q=20&output=webp`"
            :alt="contact.shortName"
          ></v-img>
        </v-avatar>
      </v-flex>
    </v-layout>
    <v-layout class="mt-4 pb-4" row wrap>
      <v-flex xs12 class="text-xs-center">
        <h1 class="font-weight-thin" :class="{'display-4': $vuetify.breakpoint.smAndUp, 'display-2': $vuetify.breakpoint.xsOnly}">{{ contact.shortName }}</h1>
      </v-flex>
      <v-flex xs12 class="text-xs-center mt-3">
        <h2 :class="{'display-1': $vuetify.breakpoint.smAndUp, 'headline': $vuetify.breakpoint.xsOnly}">{{ $t('description') }}</h2>
      </v-flex>
      <v-flex class="text-xs-center mt-3">
        <h3 class="grey--text font-weight-light">{{ contact.city }} - {{ contact.birthday | age }} {{ $t('age') }} {{ $t('aditional')}}</h3>
      </v-flex>
    </v-layout>
    <v-layout align-center>
      <v-spacer></v-spacer>
      <v-flex shrink class="text-xs-center floating-btn">
        <v-dialog width="320" content-class="br-8">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" large round class="text-none" color="primary">
              {{ $t('getInTouch') }}
            </v-btn>
          </template>
          <v-card>
            <v-card-title
              class="headline primary"
              primary-title
            >
            <v-spacer></v-spacer>
            <span class="text-uppercase">
              {{ $t('getInTouch') }}
            </span>
            <v-spacer></v-spacer>
            </v-card-title>

            <v-card-text>
              <v-container grid-list-md pa-0>
                <v-layout align-center>
                  <v-flex shrink>
                    <v-icon small color="grey">
                      mdi-phone
                    </v-icon>
                  </v-flex>
                  <v-flex>
                    {{ $t('phone')}}:
                  </v-flex>
                  <v-spacer></v-spacer>
                  <v-flex shrink>
                    +{{ contact.phone.country }}
                    ({{ contact.phone.area }})
                    {{ contact.phone.number }}
                  </v-flex>
                </v-layout>
                <v-layout align-center>
                  <v-flex shrink>
                    <v-icon small color="grey">
                      mdi-mail
                    </v-icon>
                  </v-flex>
                  <v-flex>
                    {{ $t('email')}}:
                  </v-flex>
                  <v-spacer></v-spacer>
                  <v-flex shrink>
                    {{ contact.mail }}
                  </v-flex>
                </v-layout>
                <v-layout align-center>
                  <v-flex shrink>
                    <v-icon small color="grey">
                      mdi-telegram
                    </v-icon>
                  </v-flex>
                  <v-flex>
                    Telegram:
                  </v-flex>
                  <v-spacer></v-spacer>
                  <v-flex shrink>
                    @{{ contact.telegram }}
                  </v-flex>
                </v-layout>
                <v-layout pt-3>
                  <v-flex>
                    <v-divider></v-divider>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-spacer></v-spacer>
                  <v-flex shrink v-for="network in socialNetworks" :key="network.name">
                    <v-btn icon :href="network.url" target="_blank" @click="openWhats()">
                      <v-icon>
                        {{ network.icon }}
                      </v-icon>
                    </v-btn>
                  </v-flex>
                  <v-spacer></v-spacer>
                </v-layout>
                <v-layout>
                  <v-flex>
                    <v-divider></v-divider>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-spacer></v-spacer>
                  <v-flex shrink>
                    <v-btn round class="text-none" color="#25d366">
                      WhatsApp
                      <v-icon class="ml-2">
                        mdi-whatsapp
                      </v-icon>
                    </v-btn>
                  </v-flex>
                  <v-spacer></v-spacer>
                </v-layout>
              </v-container>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-flex>
      <v-spacer></v-spacer>
    </v-layout>
  </v-container>
</template>

<script>
import LocaleChange from '@/components/LocaleChange'
export default {
  props: {
    socialNetworks: {
      type: Array
    },
    contact: {
      type: Object
    },
    menu: {
      type: Array
    }
  },
  components: {
    LocaleChange
  },
  data () {
    return {
      followScroll: false
    }
  },
  methods: {
    handleScroll () {
      this.followScroll = window.scrollY > 400
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
  filters: {
    age (value) {
      const currentDate = new Date()
      const age = currentDate.getFullYear() - value.getFullYear()
      const month = currentDate.getMonth() - value.getMonth()
      const day = currentDate.getDate() - value.getDate()
      return (month < 0 || month === 0) && day < 0 ? age - 1 : age
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>
.floating-btn {
  position: relative;
  top: 45px;
}
.follow-scroll {
  position: fixed!important;
  z-index: 2;
  /* transition: .3s cubic-bezier(.25,.8,.5,1),color 1ms; */
  transform: rotate(360deg)
}
</style>
