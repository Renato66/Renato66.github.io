<template>
  <v-container class="pa-0">
    <v-layout>
      <v-flex xs2 class>
        <div class="side-bar primary">
          <v-flex xs12 class="text-center mb-4">
            <v-avatar size="100" class="elevation-2 mt-3" style="cursor:pointer;">
              <v-img
                :src="
                  `https://images.weserv.nl/?url=${contact.avatar}%3Fsize=100&output=webp`
                "
                :lazy-src="
                  `https://images.weserv.nl/?url=${contact.avatar}%3Fsize=100&q=10&output=webp`
                "
                :alt="contact.shortName"
              />
            </v-avatar>
          </v-flex>

          <v-layout
            v-for="network in socialNetworks"
            :key="network.name"
            row
            wrap
            mb-2
            align-center
            px-3
          >
            <v-flex shrink>
              <a rel="noopener" target="_blank" :href="network.url">
                <v-icon color="white" small>{{ iconList[network.icon] }}</v-icon>
              </a>
            </v-flex>
            <v-flex shrink class="caption mt-1 ml-1">
              <a
                rel="noopener"
                target="_blank"
                class="white--text"
                :href="network.url"
              >{{ network.url.split("/")[network.url.split("/").length - 1] }}</a>
            </v-flex>
          </v-layout>
          <div class="py-2" />
          <v-layout
            v-for="skill in skills.sort(function(a, b) {
              return b.time - a.time;
            })"
            :key="skill.name"
            row
            wrap
            mb-4
            pr-5
            align-center
          >
            <v-flex shrink>
              <v-chip class="pl-4" color="primary darken-2">
                {{ skill.name }}
              </v-chip>
            </v-flex>
            <v-spacer />
            <v-flex v-if="skill.time !== 0" shrink class="white--text">
              <v-btn icon class="text-none" x-small color="white darken-2">
                {{ skill.time }}
              </v-btn>
            </v-flex>
          </v-layout>
          <v-layout class="mt-4">
            <v-spacer />
            <v-flex shrink>
              <a :href="qrcode" class="qrcode-wrapper">
                <div ref="qrcode" />
              </a>
            </v-flex>
            <v-spacer />
          </v-layout>
        </div>
      </v-flex>
      <v-flex xs10>
        <v-container grid-list-md>
          <v-layout row wrap>
            <v-flex xs12 class="my-name mb-4">
              {{ contact.name }}
            </v-flex>
            <v-flex xs12>
              <strong>{{ $t("address") }}:</strong>
              {{ contact.city }} - {{ contact.state }}
            </v-flex>
            <v-flex xs12>
              <strong>{{ $t("phone") }}:</strong>
              +{{ contact.phone.country }} ({{ contact.phone.area }})
              {{ contact.phone.number }}
            </v-flex>
            <v-flex xs12>
              <strong>Email:</strong>
              {{ contact.mail }}
            </v-flex>
          </v-layout>
          <v-layout mt-4>
            <v-flex xs12 class="display-1">
              {{ $t("work.title") }}
            </v-flex>
          </v-layout>
          <v-layout v-for="experience in work" :key="experience.id" row wrap mt-4>
            <v-flex xs12>
              <strong class="title">{{ experience.company }}</strong>
              <span v-if="experience.endDate === null" class="caption">
                {{ experience.startDate }}
                ({{ $t("actual") }})
              </span>
              <span v-else class="caption">
                {{ $tc("year", howLong(experience).years) }}
                {{ $tc("month", howLong(experience).months) }}
              </span>
            </v-flex>
            <v-flex>{{ $t(`work.${experience.id}.description`) }}</v-flex>
          </v-layout>
          <div style="page-break-after: always;" class="ma-12" />
          <v-layout mt-4>
            <v-flex xs12 class="display-1">
              {{ $t("about.title") }}
            </v-flex>
          </v-layout>
          <v-layout mt-4>
            <v-flex xs12 class="pt-2">
              <p>{{ $t("about.paragraph.1") }}</p>
              <p>{{ $t("about.paragraph.2") }} Doc88</p>
              <p>{{ $t("about.paragraph.3") }}</p>
            </v-flex>
          </v-layout>
          <v-layout mt-4>
            <v-flex xs12 class="display-1">
              {{ $t("formation.title") }}
            </v-flex>
          </v-layout>
          <v-layout
            v-for="item in timeline.filter((elem) => elem.resume)"
            :key="item.id"
            row
            wrap
            mt-4
          >
            <v-flex xs12>
              <strong class="title">
                {{
                  $t(`timeline.${item.id}.place`)
                }}
              </strong>
              <span v-if="item.endDate === null" class="caption">
                {{ item.startDate }}
                ({{ $t("doing") }})
              </span>
              <span v-else class="caption">
                {{ $tc("year", howLong(item).years) }}
                {{ $tc("month", howLong(item).months) }}
              </span>
              <v-flex>
                {{ $t(`timeline.${item.id}.title`) }} -
                {{ $t(`timeline.${item.id}.description`) }}
              </v-flex>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { differenceInCalendarMonths } from 'date-fns'
import {
  mdiGithub,
  mdiFacebook,
  mdiLinkedin,
  mdiTwitter
} from '@mdi/js'

import * as QRCode from 'easyqrcodejs'
export default {
  props: {
    timeline: {
      type: Array,
      default: () => {
        return []
      }
    },
    socialNetworks: {
      type: Array,
      default: () => {
        return []
      }
    },
    contact: {
      type: Object,
      default: () => {
        return {}
      }
    },
    work: {
      type: Array,
      default: () => {
        return []
      }
    },
    skills: {
      type: Array,
      default: () => {
        return []
      }
    },
    qrcode: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconList () {
      return {
        'mdi-github': mdiGithub,
        'mdi-facebook': mdiFacebook,
        'mdi-linkedin': mdiLinkedin,
        'mdi-twitter': mdiTwitter
      }
    }
  },
  mounted () {
    this.mountQrcode()
  },
  methods: {
    mountQrcode () {
      if (this.qrcode) {
        new QRCode(this.$refs.qrcode, { // eslint-disable-line no-new
          width: 110,
          height: 110,
          colorDark: '#ffffff',
          colorLight: 'transparent',
          text: this.qrcode
        })
      }
    },
    howLong (value) {
      const months = differenceInCalendarMonths(value.endDate, value.startDate)
      return {
        years: Math.floor(months / 12),
        months: months % 12
      }
    }
  }
}
</script>

<style>
.my-name {
  font-size: 2.6rem;
}
.side-bar {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0px;
  width: 120px;
  box-shadow: inset -3px 0px 3px #0000003d;
}
.v-chip {
  -webkit-print-color-adjust: exact;
}
.qrcode-wrapper {
  position: absolute;
  bottom: 10px;
  left: 10px;
}
@media print {
  @page {
    size: A4;
    margin: 0;
  }
  .qrcode-wrapper {
    position: fixed;
  }
  .side-bar {
    height: calc(296.6mm * 2);
  }
  body {
    margin: 0cm 0cm;
  }
}
</style>
