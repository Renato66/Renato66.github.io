<template>
  <v-container>
    <v-layout>
      <v-flex class="primary--text">
        <h2 class="primary--text display-3 font-weight-thin">
          {{ $t('timeline.title') }}
        </h2>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12>
        <v-timeline align-top light :dense="mobile">
          <v-timeline-item
            v-for="item in timeline"
            :key="item.id"
            color="primary"
            :icon="item.icon"
            fill-dot
            large
          >
            <v-card style="position:relative">
              <v-card-title class="title pb-0 pt-2">
                <v-flex shrink class="primary--text pt-1">
                  {{ $t(`timeline.${item.id}.title`) }}
                </v-flex>
                <v-spacer />
                <v-flex shrink>
                  <v-btn
                    v-if="item.dialog"
                    small
                    text
                    icon
                    color="grey darken-1"
                    aria-label="Open photos"
                    style="position: absolute;top: 2px;right: 0;"
                    @click="open[item.id] = true"
                  >
                    <v-icon small>
                      {{ mdiCameraOutline }}
                    </v-icon>
                  </v-btn>
                </v-flex>
              </v-card-title>
              <v-card-text>
                <p class="mb-0">
                  {{ $t(`timeline.${item.id}.description`) }}
                </p>
                <span class="float-place">{{ $t(`timeline.${item.id}.place`) }}</span>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-flex>
    </v-layout>
    <v-dialog v-model="open['fatec']" content-class="text-center dialog-frame" max-width="500">
      <div v-if="open['fatec']">
        <iframe
          v-if="$vuetify.breakpoint.xs"
          class="white"
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D10203204040314104%26set%3Da.4213882857609%26type%3D3&width=350&show_text=true&appId=998943660228637&height=323"
          width="350"
          height="323"
          style="border:none;overflow:hidden"
          scrolling="no"
          frameborder="0"
          allowTransparency="true"
          allow="encrypted-media"
        />
        <iframe
          v-else
          class="white"
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D10203204040314104%26set%3Da.4213882857609%26type%3D3&width=500&show_text=true&appId=998943660228637&height=424"
          width="500"
          height="424"
          style="border:none;overflow:hidden"
          scrolling="no"
          frameborder="0"
          allowTransparency="true"
          allow="encrypted-media"
        />
      </div>
    </v-dialog>
    <v-dialog v-model="open['colombia']" content-class="text-center" max-width="500">
      <v-carousel v-if="open['colombia']" hide-delimiters :cycle="false">
        <v-carousel-item v-for="photo in colombia" :key="photo" :src="`/img/colombia/photo${photo}.webp`" />
      </v-carousel>
    </v-dialog>
  </v-container>
</template>

<script>
import { mdiCameraOutline } from '@mdi/js'
export default {
  props: {
    timeline: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      mobile: false,
      colombia: 8,
      open: {
        fatec: false,
        colombia: false
      },
      mdiCameraOutline
    }
  },
  mounted () {
    if (process.browser) {
      this.mobile = this.$vuetify.breakpoint.xsOnly
    }
  }
}
</script>

<style>
.dialog-frame {
  width: auto;
  overflow: hidden;
  box-shadow: none;
}
</style>
