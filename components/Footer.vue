<template>
  <footer>
    <v-container grid-list-xl align-center>
      <v-layout row wrap>
        <v-flex xs12 sm6>
          {{ $t('footer') }}<br>
          {{ contact.name }}
        </v-flex>
        <v-flex xs12 sm6 class="github-btn py-5">
          <gh-btns-star
            slug="renato66/Renato66.github.io"
            href="https://github.com/renato66/Renato66.github.io"
            rel="noopener"
            target="_blank"
            show-count
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star renato66/Renato66.github.io on GitHub"
          />
        </v-flex>
      </v-layout>
    </v-container>
  </footer>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style>
.github-btn .gh-button-container {
  float: right
}
.github-btn a{
  color: #4a4a4a!important
}
</style>
