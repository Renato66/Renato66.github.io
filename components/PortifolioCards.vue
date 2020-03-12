<template>
  <v-container grid-list-xl>
    <v-layout>
      <v-flex class="primary--text">
        <h2 class="primary--text display-3 font-weight-thin">
          {{ $t('portifolio.title') }}
        </h2>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="portifolio-wrapper">
      <v-flex v-for="(app, index) in portifolio" :key="index" xs12 sm6 md4>
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
              :lazy-src="`https://images.weserv.nl/?url=${baseUrl + app.img}.webp&q=20&output=jpg`"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
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
                  <v-tooltip bottom>
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
                </div>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    portifolio: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    ...mapGetters(['baseUrl', 'imageOutput'])
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
.portifolio-wrapper .v-card{
  border-radius: 4px;
}
</style>
