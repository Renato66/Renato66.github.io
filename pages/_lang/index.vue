<template>
  <v-app dark :class="{'no-webp': imageOutput !== 'webp'}">
    <v-content>
      <header id="hi" class="background-section" style="min-height: 100vh;">
        <PortifolioHeader :menu="menu" :contact="contact" :social-networks="socialNetworks" />
      </header>
      <section id="about" class="white" v-lazy>
        <Presentation />
      </section>
      <section id="skills" class="background-section">
        <SkillBars :skills="mainSkills" />
      </section>
      <section id="timeline" class="white">
        <Timeline :timeline="timeline" />
      </section>
      <section id="work" class="background-section">
        <WorkTabs :experiences="work" />
      </section>
      <section id="portfolio" class="white">
        <PortifolioCards :portfolio="portfolio" />
      </section>
      <section id="resume" class="primary py-12">
        <SocialNetworks :social-networks="socialNetworks" @print-resume="printResume" />
      </section>
      <section class="background-section">
        <ContactLinks :contact="contact" />
      </section>
      <Footer :contact="contact" />
      <ChatMessage :contact="contact" @print-resume="printResume" />
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import WorkTabs from '@/components/WorkTabs'
import SkillBars from '@/components/SkillBars'
import SocialNetworks from '@/components/SocialNetworks'
import PortifolioHeader from '@/components/PortifolioHeader'
import PortifolioCards from '@/components/PortifolioCards'
import ContactLinks from '@/components/ContactLinks'
import Footer from '@/components/Footer'
import Timeline from '@/components/Timeline'
import Presentation from '@/components/Presentation'
import ChatMessage from '@/components/ChatMessage'

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
    ChatMessage
  },
  data () {
    return {
      menu: [
        'hi',
        'about',
        'skills',
        'timeline',
        'work',
        'portfolio',
        'resume'
      ]
    }
  },
  computed: {
    ...mapGetters(['baseUrl', 'imageOutput', 'skills', 'portfolio', 'socialNetworks', 'contact', 'work', 'timeline']),
    mainSkills () {
      return this.skills.filter(elem => elem.main)
    },
    structuredData () {
      return {
        '@context': 'http://schema.org',
        '@type': 'Person',
        name: this.contact.name,
        url: this.baseUrl,
        image: this.contact.avatar,
        sameAs: this.socialNetworks.map(elem => elem.url),
        address: {
          '@type': 'PostalAddress',
          addressRegion: this.contact.region,
          postalCode: this.contact.postalCode,
          addressCountry: this.contact.country
        }
      }
    }
  },
  methods: {
    onImgError (event) {
      this.webpSupport = false
    },
    printResume () {
      const a = document.createElement('a')
      const url = `${this.baseUrl}/download/renato-vicente-cv-${this.$i18n.locale}.pdf`
      a.style.display = 'none'
      document.body.appendChild(a)
      a.target = '_blank'
      a.href = url
      a.download = `Renato-Vicente-${this.$i18n.locale}.pdf`
      a.click()
      document.body.removeChild(a)
    }
  },
  head () {
    return {
      __dangerouslyDisableSanitizers: ['script'],
      script: [{ innerHTML: JSON.stringify(this.structuredData), type: 'application/ld+json' }],
      title: this.$t('seo.og.title'),
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: this.$t('seo.description') },
        { hid: 'og:description', name: 'og:description', content: this.$t('seo.og.description') },
        { hid: 'keywords', name: 'keywords', content: this.$t('seo.keywords') },
        { hid: 'og:image', name: 'og:image', content: this.contact.avatar },
        { hid: 'og:title', name: 'og:title', content: this.$t('seo.og.title') },
        { hid: 'og:url', name: 'og:url', content: this.baseUrl }
      ]
    }
  }
}
</script>

<style>
.invisible {
  opacity: 0;
  position: absolute;
}
.br-8{
  border-radius: 8px;
}
section, footer {
  padding: 20px
}
a.white--text {
  text-decoration: none;
  color: white
}
.theme--dark.v-application {
  background: #303030!important
}
.background-section{
  background-image: url('/img/background.webp');
}
.no-webp .background-section {
  background-image: url('/img/background.png');
}
</style>
