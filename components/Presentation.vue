<template>
  <v-container>
    <v-layout>
      <v-flex class="primary--text">
        <h2 class="primary--text display-3 font-weight-thin">
          {{ $t('about.title') }}
        </h2>
      </v-flex>
    </v-layout>
    <v-layout class="grey--text text--darken-2 subheading">
      <v-flex xs12 class="pt-2">
        <p>
          {{ $t('about.paragraph.1') }}
        </p>
        <p v-if="latestWork">
          {{ $tc('about.paragraph.2', latestWork.endDate) }} <a href="#work" class="primary--text">{{ latestWork.company }}</a>
        </p>
        <p>
          {{ $t('about.paragraph.3') }}
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex v-for="quote in quotes" :key="quote.id" xs12 sm4 class="text-center pa-6">
        <v-lazy
          :options="{
            threshold: .5
          }"
          min-height="128"
          transition="fade-transition"
        >
          <img
            :src="`https://images.weserv.nl/?url=${baseUrl + quote.img}.webp&output=${imageOutput}`"
            :lazy-src="`https://images.weserv.nl/?url=${baseUrl + quote.img}.webp&q=10&output=webp`"
            :alt="quote.id"
          >
        </v-lazy>
        <h3 class="primary--text text--darken-2 display-1">
          {{ $t(`about.quotes.${quote.id}.title`) }}
        </h3>
        <h4 class="grey--text text--darken-2 title pt-2 font-weight-light">
          {{ $t(`about.quotes.${quote.id}.description`) }}
        </h4>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    latestWork: {
      type: Object,
      default: () => null
    }
  },
  data () {
    return {
      quotes: [
        {
          id: 'programming',
          img: '/img/programmer',
          author: 'John Johnson'
        },
        {
          id: 'creativity',
          img: '/img/brain',
          author: 'Maya Angelou'
        },
        {
          id: 'inovation',
          img: '/img/rocket',
          author: 'S. Brown'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['baseUrl', 'imageOutput'])
  }
}
</script>

<style>
</style>
