<template>
  <v-container>
    <v-layout>
      <v-flex class="primary--text">
        <h2 class="primary--text display-3 font-weight-thin">
          {{ $t('about.title') }}
        </h2>
      </v-flex>
    </v-layout>
    <v-layout class="grey--text text--darken-2">
      <v-flex xs12 class="pt-2">
        <p>
          Formado em Análise e desenvolvimento de sistemas pela FATEC São Caetano do Sul, desenvolvi alguns projetos em PHP porem me aprofundei na area de front end, aplicando nos meu trabalhos: SPA, performance, desing responsivo, mobile first, offline first.
        </p>
        <p>
          Atualmente trabalho com Vue.js e AWS stack na <a href="#work" class="primary--text">Boxnet</a>
        </p>
        <p>
          Em alguns finais de semana trabalho como DJ, aproveitando a festa, fazendo do meu trabalho um hobbie.
        </p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm4 class="text-xs-center pa-4" v-for="quote in quotes" :key="quote.id">
        <img :src="quote.img" :alt="quote.id">
        <h4 class="primary--text text--darken-2 display-1">{{ $t(`about.quotes.${quote.id}.title`) }}</h4>
        <h5 class="grey--text text--darken-2 title pt-2 font-weight-light" v-html="$t(`about.quotes.${quote.id}.description`)"></h5>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      quotes: [
        {
          id: 'programming',
          img: 'https://renato66.github.io/img/programmer.png',
          author: 'John Johnson'
        },
        {
          id: 'creativity',
          img: 'https://renato66.github.io/img/brain.png',
          author: 'Maya Angelou'
        },
        {
          id: 'inovation',
          img: 'https://renato66.github.io/img/rocket.png',
          autor: 'S. Brown'
        }
      ]
    }
  }
}
</script>

<style>
</style>
