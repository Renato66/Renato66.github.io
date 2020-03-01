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
      <v-flex xs12 sm6 md4 v-for="(app, index) in portifolio" :key="index">
        <v-hover>
          <v-card
            slot-scope="{ hover }"
            class="mx-auto"
            color="grey lighten-4"
            max-width="600"
          >
            <v-img
              :aspect-ratio="16/9"
              :src="`https://images.weserv.nl/?url=${baseUrl + app.img}.webp&output=png`"
              :lazy-src="`https://images.weserv.nl/?url=${baseUrl + app.img}.webp&q=20`"
              :srcset="`https://images.weserv.nl/?url=${baseUrl + app.img}.webp&output=webp`"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="transition-fast-in-fast-out card-overlay darken-2"
                >
                  <v-tooltip bottom v-for="(tech, index) in app.technologies" :key="index">
                    <template v-slot:activator="{ on }">
                      <v-btn icon color="white" flat v-on="on" class="ma-1">
                        <v-icon small>
                          mdi-{{ tech }}
                        </v-icon>
                      </v-btn>
                    </template>
                    <span class="text-capitalize">{{ tech }}</span>
                  </v-tooltip>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-btn icon color="white" flat v-on="on" :href="app.link" :aria-label="`Open ${app.name}`" class="ma-1">
                        <v-icon small>
                          mdi-open-in-new
                        </v-icon>
                      </v-btn>
                    </template>
                    <span>Abrir em nova</span>
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
export default {
  props: {
    portifolio: {
      type: Array
    }
  },
  data () {
    return {
      baseUrl: process.env.VUE_APP_BASE_URL
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
.portifolio-wrapper .v-card{
  border-radius: 4px;
}
</style>
