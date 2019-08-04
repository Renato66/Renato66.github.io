<template>
  <v-app dark>
    <v-content>
      {{
        $t('message')
      }}
      <v-container>
        <v-layout>
          <v-flex xs12>
            <v-timeline align-top :dense="$vuetify.breakpoint.xs">
              <v-timeline-item
                v-for="item in timeline"
                :key="item.id"
                color="primary"
                :icon="item.icon"
                fill-dot
                large
              >
                <v-card>
                  <v-card-title class="title pb-0">{{ $t(`timeline.${item.id}.title`) }} </v-card-title>
                  <v-card-text>
                    <p class="mb-0">{{ $t(`timeline.${item.id}.description`) }}</p>
                    <span class="float-place">{{ $t(`timeline.${item.id}.place`) }}</span>
                    <!-- <v-btn
                      :color="item.color"
                      class="mx-0"
                      outline
                    >
                      Button
                    </v-btn> -->
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-flex>
        </v-layout>
        <v-dialog v-model="open" content-class="text-xs-center dialog-frame">
          <iframe class="white" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D10203204040314104%26set%3Da.4213882857609%26type%3D3&width=500&show_text=true&appId=998943660228637&height=424" width="500" height="424" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        </v-dialog>
      </v-container>
      <WorkTabs :experiences="work" />
      <SkillBars :skills="skills" />
      <PortifolioCards :portifolio="portifolio" />
      <SocialNetworks :socialNetworks="socialNetworks" />
      <ContactLinks :contact="contact" />
      <Footer :contact="contact" />
    </v-content>
  </v-app>
</template>

<script>
import WorkTabs from '@/components/WorkTabs'
import SkillBars from '@/components/SkillBars'
import SocialNetworks from '@/components/SocialNetworks'
import PortifolioCards from '@/components/PortifolioCards'
import ContactLinks from '@/components/ContactLinks'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    WorkTabs,
    SkillBars,
    SocialNetworks,
    Footer,
    PortifolioCards,
    ContactLinks
  },
  data () {
    return {
      open: true,
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
      ],
      contact: {
        name: 'Renato Vicente Frison dos Santos',
        img: 'https://www.gravatar.com/avatar/44d075eb0dc6e9d7f3528ac2de5c24c3',
        phone: '5511959818159',
        telegram: 'irenato66',
        mail: 'Revi66@hotmail.com',
        city: 'Santo André',
        state: 'SP',
        birthday: new Date(1993, 5, 9, 0, 0, 0, 0)
      },
      work: [
        {
          id: 'coddera',
          company: 'Coddera',
          startDate: '2018-10-01',
          endDate: null,
          website: 'http://www.coddera.com'
        },
        {
          id: 'athos',
          company: 'Athos',
          startDate: '2016-12-01',
          endDate: '2018-04-04',
          website: 'https://www.athos.com.br'
        },
        {
          id: 'cgm',
          company: 'CGM SP',
          startDate: '2014-12-01',
          endDate: '2015-06-01',
          website: 'https://www.prefeitura.sp.gov.br/cidade/secretarias/controladoria_geral/'
        },
        {
          id: 'vanzoline',
          company: 'Vanzoline',
          startDate: '2013-02-01',
          endDate: '2014-04-01',
          website: 'https://vanzolini.org.br'
        },
        {
          id: 'blazing',
          company: 'Blazing produções',
          startDate: '2013-03-01',
          endDate: null,
          website: 'http://blazing.com.br/blazing/'
        }
      ],
      timeline: [
        {
          id: 'colombia',
          icon: 'mdi-airplane',
          startDate: '2019-05-29',
          endDate: '2019-06-08'
        },
        {
          id: 'fatec',
          icon: 'mdi-school',
          startDate: '2012-01-01',
          endDate: '2016-01-01'
        },
        {
          id: 'fisk',
          icon: 'mdi-chat',
          year: '2016',
          startDate: '2005-01-01',
          endDate: '2011-01-01'
        },
        {
          id: 'clovis',
          icon: 'mdi-book-open-page-variant',
          year: '2016',
          startDate: '2007-01-01',
          endDate: '2010-01-01'
        }
      ]
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
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}
</script>

<style>
.dialog-frame {
  width: auto;
  height: 424px;
  overflow: hidden;
}
a.white--text {
  text-decoration: none;
  color: white
}
</style>
