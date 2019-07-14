<template>
  <v-app>
    <v-content>
      {{
        $t('message')
      }}
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}
</script>
