<template>
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
              <v-card-title class="title pb-0">
                <v-flex shrink>
                  {{ $t(`timeline.${item.id}.title`) }}
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex shrink>
                  <v-btn
                    v-if="item.dialog"
                    class="ma-0"
                    small
                    flat
                    icon
                    @click="open[item.id] = true"
                    style="position: relative;top: -12px;right: -12px;"
                  >
                    <v-icon small>
                      mdi-camera-outline
                    </v-icon>
                  </v-btn>
                </v-flex>
              </v-card-title>
              <v-card-text>
                <p class="mb-0">{{ $t(`timeline.${item.id}.description`) }}</p>
                <span class="float-place">{{ $t(`timeline.${item.id}.place`) }}</span>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-flex>
    </v-layout>
    <v-dialog v-model="open['fatec']" content-class="text-xs-center dialog-frame">
      <iframe v-if="$vuetify.breakpoint.xs" class="white" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D10203204040314104%26set%3Da.4213882857609%26type%3D3&width=350&show_text=true&appId=998943660228637&height=323" width="350" height="323" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
      <iframe v-else class="white" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D10203204040314104%26set%3Da.4213882857609%26type%3D3&width=500&show_text=true&appId=998943660228637&height=424" width="500" height="424" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
    </v-dialog>
    <v-dialog v-model="open['colombia']" content-class="text-xs-center">
      <v-carousel v-if="open['colombia']" hide-delimiters :cycle="false">
        <v-carousel-item v-for="photo in colombia" :key="photo" :src="`/img/colombia/photo${photo}.jpeg`"></v-carousel-item>
      </v-carousel>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  props: {
    timeline: {
      type: Array
    }
  },
  data () {
    return {
      colombia: 8,
      open: {
        fatec: false,
        colombia: false
      }
    }
  },
  mounted () {
    if (process.env.NODE_ENV !== 'production') {
      this.timeline.forEach(elem => {
        if (elem.dialog) {
          if (this.open[elem.id] !== false) {
            console.warn(`No dialog set for id: '${elem.id}' at Timeline.vue`)
          }
        }
      })
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
