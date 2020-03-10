<template>
  <v-container grid-list-xl align-center>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        {{ $t('footer') }}<br>
        {{ contact.name }}
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <github-button href="https://github.com/renato66/Renato66.github.io" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star renato66/Renato66.github.io on GitHub">
          Star
        </github-button>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import GithubButton from 'vue-github-button'

export default {
  components: {
    GithubButton
  },
  props: {
    contact: {
      type: Object
    }
  }
}
</script>

<style>

</style>
