<template>
  <v-container grid-list-md>
    <v-layout row wrap align-center>
      <v-spacer class="hidden-sm-and-up"></v-spacer>
      <v-flex shrink v-for="(social, index) in socialNetworks" :key="index">
        <a class="social-icon" target="_blank" :href="social.url">
          <img
            :src="`https://images.weserv.nl/?url=${baseUrl + social.img}.webp&output=png`"
            :srcset="`https://images.weserv.nl/?url=${baseUrl + social.img}.webp&output=webp`"
            :lazy-src="`https://images.weserv.nl/?url=${baseUrl + social.img}.webp&q=20`"
            :alt="social.name"
          >
        </a>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn download="Renato-CV.pdf" round large color="white" light class="text-none" @click="$emit('print-resume')">
          {{ $t('downloadResume') }}
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    socialNetworks: {
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
.social-icon {
  display: block;
  padding: 18px;
  border: 1px solid #fff;
  border-radius: 100%;
  transition: all .3s;
}
.social-icon:hover {
  border-color: #2D373D;
  background-color: #2D373D;
}
.social-icon img {
  width: 40px;
}
</style>
