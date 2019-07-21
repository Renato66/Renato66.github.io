<template>
  <v-app dark>
    <v-content>
      {{
        $t('message')
      }}
      <SkillBars :skills="skills" />
      <PortifolioCards :portifolio="portifolio" />
    </v-content>
  </v-app>
</template>

<script>
import SkillBars from '@/components/SkillBars'
import PortifolioCards from '@/components/PortifolioCards'
export default {
  name: 'App',
  components: {
    SkillBars,
    PortifolioCards
  },
  data () {
    return {
      skills: [
        {
          name: 'Vue',
          img: '/img/vuejs.png',
          knowlegde: 100
        },
        {
          name: 'Node.js',
          img: '/img/nodejs.png',
          knowlegde: 70
        },
        {
          name: 'Cypress',
          img: '/img/cypress.ico',
          knowlegde: 40
        },
        {
          name: 'GraphQL',
          img: '/img/graphQL.png',
          knowlegde: 20
        },
        {
          name: 'Laravel',
          img: '/img/laravel.png',
          knowlegde: 40
        },
        {
          name: 'Firebase',
          img: '/img/firebase.png',
          knowlegde: 20
        }
      ],
      portifolio: [
        {
          name: 'Lista',
          link: 'https://marvelapp.com/18fhc5hg',
          img: '/img/lista.png',
          technologies: ['vuejs', 'vuetify', 'firebase']
        },
        {
          name: 'Icondominio',
          link: 'https://renato66.github.io/projeto/icondominio',
          img: '/img/icondominio.png',
          technologies: ['vuejs', 'apple', 'google-play']
        },
        {
          name: 'Atendimento',
          link: 'https://renato66.github.io/projeto/atendimento',
          img: '/img/atendimento.png',
          technologies: ['jquery', 'firebase']
        },
        {
          name: 'Building infra',
          link: 'https://building-infra.netlify.com/',
          img: '/img/building-infra.jpg',
          technologies: ['nuxt', 'vuejs']
        },
        {
          name: 'Administradora Sell',
          link: 'http://www.sellimoveis.com.br/',
          img: '/img/sell.png',
          technologies: ['bootstrap', 'jquery']
        },
        {
          name: 'GVale imóveis',
          link: 'http://gvaleimoveis.com.br/home/',
          img: '/img/gvale.png',
          technologies: ['bootstrap', 'jquery']
        },
        {
          name: 'BR imóveis',
          link: 'http://www.brimovel.com.br/home/index.asp',
          img: '/img/brimovel.png',
          technologies: ['bootstrap', 'jquery']
        },
        {
          name: 'Icone administradora',
          link: 'http://icone.adm.br/home/',
          img: '/img/iconeadm.png',
          technologies: ['bootstrap', 'jquery']
        },
        {
          name: 'Francis imóveis',
          link: 'http://francisimoveis.com.br/home/',
          img: '/img/francis.png',
          technologies: ['bootstrap', 'jquery']
        },
        {
          name: 'Clube dos Salgados',
          link: 'http://www.clubedossalgados.com.br/',
          img: '/img/clube.png',
          technologies: ['bootstrap', 'jquery']
        }
      ]
    }
  },
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}
</script>

<style>
</style>
