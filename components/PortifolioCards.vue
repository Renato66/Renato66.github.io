<template>
  <v-container grid-list-xl>
    <v-layout>
      <v-flex class="primary--text">
        <h2 class="primary--text display-3 font-weight-thin">
          {{ $t('portfolio.title') }}
        </h2>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="portfolio-wrapper">
      <v-flex v-for="(app, index) in portfolio" :key="index" xs12 sm6 md4>
        <v-lazy
          :options="{
            threshold: .5
          }"
          min-height="200"
          transition="fade-transition"
        >
          <v-hover>
            <v-card
              slot-scope="{ hover }"
              class="mx-auto"
              color="grey lighten-4"
              max-width="600"
            >
              <v-img
                :aspect-ratio="16/9"
                :src="`https://images.weserv.nl/?url=${baseUrl + app.img}.webp&output=${imageOutput}`"
                :lazy-src="`https://images.weserv.nl/?url=${baseUrl + app.img}.webp&q=20&output=webp`"
              >
                <v-expand-transition>
                  <div
                    v-show="hover"
                    class="transition-fast-in-fast-out card-overlay darken-2"
                  >
                    <v-tooltip v-for="(tech, index2) in app.technologies" :key="index2" bottom>
                      <template v-slot:activator="{ on }">
                        <v-btn icon color="white" text class="ma-1" v-on="on">
                          <v-icon small>
                            mdi-{{ tech }}
                          </v-icon>
                        </v-btn>
                      </template>
                      <span class="text-capitalize">{{ tech }}</span>
                    </v-tooltip>
                    <v-tooltip v-if="app.link" bottom>
                      <template v-slot:activator="{ on }">
                        <v-btn
                          icon
                          color="white"
                          text
                          :href="app.link"
                          target="_blank"
                          rel="noopener"
                          :aria-label="`Open ${app.name}`"
                          class="ma-1"
                          v-on="on"
                        >
                          <v-icon small>
                            mdi-open-in-new
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>{{ $t('openProject') }}</span>
                    </v-tooltip>
                    <v-tooltip v-if="app.youtube" bottom>
                      <template v-slot:activator="{ on }">
                        <v-btn
                          icon
                          color="red"
                          text
                          class="ma-1"
                          :href="app.youtube"
                          rel="noopener"
                          target="_blank"
                          v-on="on"
                          @click="youtube(app.name)"
                        >
                          <v-icon small>
                            mdi-youtube
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>Youtube</span>
                    </v-tooltip>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-lazy>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    portfolio: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    ...mapGetters(['baseUrl', 'imageOutput'])
  },
  methods: {
    youtube (id) {
      if (process.browser) {
        this.$ga.event('portfolio', 'click', 'youtube')
      }
    }
  }
}
</script>

<style>
.card-overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: right;
  background: linear-gradient(#00000000, #00000090)
}
.portfolio-wrapper .v-card{
  border-radius: 4px;
}
</style>
