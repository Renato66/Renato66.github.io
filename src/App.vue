<template>
  <v-app :dark="!print">
    <v-content v-if="!print">
      <header id="hi" style="background-image: url('/img/background.png');min-height: 100vh;">
        <PortifolioHeader :menu="menu" :contact="contact" :socialNetworks="socialNetworks"></PortifolioHeader>
      </header>
      <section id="about" class="white">
        <Presentation />
      </section>
      <section id="skills" style="background-image: url('/img/background.png');">
        <SkillBars :skills="mainSkills" />
      </section>
      <section id="timeline" class="white">
        <Timeline :timeline="timeline" />
      </section>
       <section id="work" style="background-image: url('/img/background.png');">
        <WorkTabs :experiences="work" />
      </section>
      <section id="portifolio" class="white">
        <PortifolioCards :portifolio="portifolio" />
      </section>
      <section id="resume" class="primary py-5">
        <SocialNetworks :socialNetworks="socialNetworks" @print-resume="printResume" />
      </section>
      <section style="background-image: url('/img/background.png');">
        <ContactLinks :contact="contact" />
      </section>
        <Footer :contact="contact" />
    </v-content>
    <ResumePDF :contact="contact" :work="work" :skills="skills" :socialNetworks="socialNetworks" :timeline="timeline" v-if="print"/>
  </v-app>
</template>

<script>
import WorkTabs from '@/components/WorkTabs'
import SkillBars from '@/components/SkillBars'
import SocialNetworks from '@/components/SocialNetworks'
import PortifolioHeader from '@/components/PortifolioHeader'
import PortifolioCards from '@/components/PortifolioCards'
import ContactLinks from '@/components/ContactLinks'
import Footer from '@/components/Footer'
import Timeline from '@/components/Timeline'
import Presentation from '@/components/Presentation'
import ResumePDF from '@/components/resume/Index'

export default {
  name: 'App',
  components: {
    PortifolioHeader,
    Timeline,
    WorkTabs,
    SkillBars,
    SocialNetworks,
    Footer,
    PortifolioCards,
    ContactLinks,
    Presentation,
    ResumePDF
  },
  data () {
    return {
      print: false,
      menu: [
        'hi',
        'about',
        'skills',
        'timeline',
        'work',
        'portifolio',
        'resume'
      ],
      skills: [
        {
          name: 'Vue',
          main: true,
          img: '/img/vuejs.png',
          knowlegde: 100
        },
        {
          name: 'Node.js',
          main: true,
          img: '/img/nodejs.png',
          knowlegde: 70
        },
        {
          name: 'Cypress',
          main: true,
          img: '/img/cypress.ico',
          knowlegde: 70
        },
        {
          name: 'GraphQL',
          main: true,
          img: '/img/graphQL.png',
          knowlegde: 50
        },
        {
          name: 'Laravel',
          main: true,
          img: '/img/laravel.png',
          knowlegde: 40
        },
        {
          name: 'Firebase',
          main: true,
          img: '/img/firebase.png',
          knowlegde: 80
        },
        {
          name: 'Javascript es6+'
        },
        {
          name: 'Stylus'
        },
        {
          name: 'Git'
        },
        {
          name: 'SEO'
        },
        {
          name: 'Scrum'
        },
        {
          name: 'Agile'
        },
        {
          name: 'Jasmine'
        },
        {
          name: 'Jest'
        },
        {
          name: 'PHP'
        },
        {
          name: 'Python'
        },
        {
          name: 'Go'
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
          img: '/img/facebook.png',
          icon: 'mdi-facebook'
        },
        {
          name: 'github',
          url: 'https://github.com/Renato66',
          img: '/img/github.png',
          icon: 'mdi-github-circle'
        },
        {
          name: 'linkedin',
          url: 'https://www.linkedin.com/in/renato-vicente-961a7b90/?originalSubdomain=br',
          img: '/img/linkedin.png',
          icon: 'mdi-linkedin'
        }
      ],
      contact: {
        name: 'Renato Vicente Frison dos Santos',
        shortName: 'Renato Vicente',
        avatar: 'https://www.gravatar.com/avatar/44d075eb0dc6e9d7f3528ac2de5c24c3',
        phone: {
          country: '55',
          area: '11',
          number: '95981-8159'
        },
        telegram: 'irenato66',
        mail: 'Revi66@hotmail.com',
        linkedin: 'renato-vicente-961a7b90',
        city: 'Santo André',
        state: 'SP',
        birthday: new Date(1993, 5, 9, 0, 0, 0, 0)
      },
      work: [
        {
          id: 'boxnet',
          company: 'Boxnet',
          startDate: '2019-09-02',
          endDate: null,
          website: 'http://www.boxnet.com.br'
        },
        {
          id: 'coddera',
          company: 'Coddera',
          startDate: '2018-10-01',
          endDate: '2019-08-31',
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
        }
        // {
        //   id: 'blazing',
        //   company: 'Blazing produções',
        //   startDate: '2013-03-01',
        //   endDate: null,
        //   website: 'http://blazing.com.br/blazing/'
        // }
      ],
      timeline: [
        {
          id: 'colombia',
          dialog: true,
          icon: 'mdi-airplane',
          startDate: '2019-05-29',
          endDate: '2019-06-08'
        },
        {
          id: 'fatec',
          icon: 'mdi-school',
          dialog: true,
          resume: true,
          startDate: '2012-01-01',
          endDate: '2016-01-01'
        },
        {
          id: 'fisk',
          icon: 'mdi-chat',
          year: '2016',
          resume: true,
          startDate: '2005-01-01',
          endDate: '2011-01-01'
        },
        {
          id: 'clovis',
          icon: 'mdi-book-open-page-variant',
          year: '2016',
          resume: true,
          startDate: '2007-01-01',
          endDate: '2010-01-01'
        }
      ]
    }
  },
  methods: {
    printResume () {
      this.print = true
      setTimeout(() => {
        window.print()
        this.print = false
        this.$vuetify.goTo(0)
      }, 100)
    }
  },
  computed: {
    mainSkills () {
      return this.skills.filter(elem => elem.main)
    }
  },
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}
</script>

<style>
.br-8{
  border-radius: 8px;
}
a.white--text {
  text-decoration: none;
  color: white
}
</style>
