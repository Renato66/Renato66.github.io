<template>
  <v-app dark>
    <v-content>
      {{
        $t('message')
      }}
      <SkillBars :skills="skills" />
      <PortifolioCards :portifolio="portifolio" />
      <SocialNetworks :socialNetworks="socialNetworks" />
      <v-container grid-list-xl>
        <v-layout row wrap>
          <v-flex xs12 sm6 class="text-xs-center headline">
            <v-icon large>mdi-map-marker</v-icon>
            <br>
            Resido em
            <a href="https://www.google.com.br/maps/place/Santo+André,+SP">
              <b>Santo André</b>
            </a>
          </v-flex>
          <v-flex xs12 sm6 class="text-xs-center headline">
            <v-icon large>mdi-email</v-icon>
            <br>
            <a href="mailto:revi66@hotmail.com">
              <b>
                Revi66@hotmail.com
              </b>
            </a>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import SkillBars from '@/components/SkillBars'
import SocialNetworks from '@/components/SocialNetworks'
import PortifolioCards from '@/components/PortifolioCards'
export default {
  name: 'App',
  components: {
    SkillBars,
    SocialNetworks,
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
      ],
      socialNetworks: [
        {
          name: 'facebook',
          url: 'https://www.facebook.com/renato.vicente.3344',
          img: '/img/facebook.png'
        },
        {
          name: 'github',
          url: 'https://github.com/Renato66',
          img: '/img/github.png'
        },
        {
          name: 'linkedin',
          url: 'https://www.linkedin.com/in/renato-vicente-961a7b90/?originalSubdomain=br',
          img: '/img/linkedin.png'
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
