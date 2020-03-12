<template>
  <v-app :dark="false">
    <ResumePDF
      :contact="contact"
      :work="work"
      :skills="skills"
      :social-networks="socialNetworks"
      :timeline="timeline"
    />
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import ResumePDF from '@/components/resume/Index'

export default {
  name: 'App',
  components: {
    ResumePDF
  },
  computed: {
    ...mapGetters(['skills', 'portfolio', 'socialNetworks', 'contact', 'work', 'timeline'])
  },
  mounted () {
    this.$vuetify.theme.dark = false
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
