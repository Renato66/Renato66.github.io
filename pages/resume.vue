<script setup lang="ts">
import contact from '~/assets/info/contact.json'
import networks from '~/assets/info/networks.json'
// import portfolio from '~/assets/info/portfolio.json'
import skills from '~/assets/info/skills.json'
import timeline from '~/assets/info/timeline.json'
import work from '~/assets/info/work.json'
import QRCode from 'easyqrcodejs'
import { differenceInCalendarMonths } from 'date-fns'

const qrCode = ref('qrCode')
const url = ref()
onMounted(() => {
  url.value = window.location.origin
  new QRCode(qrCode.value, {
    width: 110,
    height: 110,
    colorDark: '#000000',
    colorLight: 'transparent',
    text: url.value
  })
});

const howLong = ({ startDate, endDate }: {
  startDate: string;
  endDate: string;
}) => {
  const months = differenceInCalendarMonths(new Date(endDate), new Date(startDate))
  return {
    years: Math.floor(months / 12),
    months: months % 12
  }
}

</script>
<template>
  <v-row>
    <div class="side-bar bg-primary">
      <v-col sm="12" class="text-center mb-4">
        <v-avatar size="100" class="elevation-2 mt-3" style="cursor:pointer;">
          <v-img :src="`https://images.weserv.nl/?url=${contact.avatar}%3Fsize=100&output=webp`
            " :lazy-src="`https://images.weserv.nl/?url=${contact.avatar}%3Fsize=100&q=10&output=webp`
    " :alt="contact.shortName" />
        </v-avatar>
      </v-col>

      <v-row v-for="network in networks" :key="network.name" row wrap mb-2 align-center px-3>
        <v-col shrink>
          <a rel="noopener" target="_blank" :href="network.url">
            <v-icon color="white" small>
              <Icon :name="network.icon" />
            </v-icon>
          </a>
        </v-col>
        <v-col shrink class="caption mt-1 ml-1">
          <a rel="noopener" target="_blank" class="white--text" :href="network.url">{{
            network.url.split("/")[network.url.split("/").length - 1] }}</a>
        </v-col>
      </v-row>
      <div class="py-2"></div>
      <v-row v-for="skill in skills.sort((a, b) => b.time - a.time)" :key="skill.name" row wrap mb-4 pr-5 align-center>
        <v-col shrink>
          <v-chip class="pl-4" color="primary darken-2">
            {{ skill.name }}
          </v-chip>
        </v-col>
        <v-spacer />
        <v-col v-if="skill.time !== 0" shrink class="white--text">
          <v-btn icon class="text-none" x-small color="white darken-2">
            {{ skill.time }}
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="mt-4">
        <v-spacer />
        <v-col shrink>
          <a :href="url" class="qrCode-wrapper">
            <div ref="qrCode"></div>
          </a>
        </v-col>
        <v-spacer />
      </v-row>
    </div>
    <v-col sm="10" offset-sm="2">
      <v-row grid-list-md>
        <v-row row wrap>
          <v-col sm="12" class="my-name mb-4">
            {{ contact.name }}
          </v-col>
          <v-col sm="12">
            <strong>{{ $t("address") }}:</strong>
            {{ contact.city }} - {{ contact.state }}
          </v-col>
          <v-col sm="12">
            <strong>{{ $t("phone") }}:</strong>
            +{{ contact.phone.country }} ({{ contact.phone.area }})
            {{ contact.phone.number }}
          </v-col>
          <v-col sm="12">
            <strong>Email:</strong>
            {{ contact.mail }}
          </v-col>
        </v-row>
        <v-row mt-4>
          <v-col sm="12" class="display-1">
            {{ $t("work.title") }}
          </v-col>
        </v-row>
        <v-row v-for="experience in work" :key="experience.id" row wrap mt-4>
          <v-col sm="12">
            <strong class="title">{{ experience.company }}</strong>
            <span v-if="experience.endDate === null" class="caption">
              {{ experience.startDate }}
              ({{ $t("actual") }})
            </span>
            <span v-else class="caption">
              {{ $t("year", howLong(experience).years) }}
              {{ $t("month", howLong(experience).months) }}
            </span>
          </v-col>
          <v-col>{{ $t(`work.${experience.id}.description`) }}</v-col>
        </v-row>
        <div style="page-break-after: always;" class="ma-12" />
        <v-row mt-4>
          <v-col sm="12" class="display-1">
            {{ $t("about.title") }}
          </v-col>
        </v-row>
        <v-row mt-4>
          <v-col sm="12" class="pt-2">
            <p>{{ $t("about.paragraph.1") }}</p>
            <p>{{ $t("about.paragraph.2") }} Doc88</p>
            <p>{{ $t("about.paragraph.3") }}</p>
          </v-col>
        </v-row>
        <v-row mt-4>
          <v-col sm="12" class="display-1">
            {{ $t("formation.title") }}
          </v-col>
        </v-row>
        <v-row v-for="item in timeline.filter((elem) => elem.resume)" :key="item.id" row wrap mt-4>
          <v-col sm="12">
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
              {{ $t("year", howLong(item).years) }}
              {{ $t("month", howLong(item).months) }}
            </span>
            <v-col>
              {{ $t(`timeline.${item.id}.title`) }} -
              {{ $t(`timeline.${item.id}.description`) }}
            </v-col>
          </v-col>
        </v-row>
      </v-row>
    </v-col>
  </v-row>
</template>

<style>
body {
  margin: 0cm 0cm;
}

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
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
}

.qrCode-wrapper {
  position: absolute;
  bottom: 10px;
  left: 10px;
}

@media print {
  @page {
    size: A4;
    margin: 0;
  }

  .qrCode-wrapper {
    position: fixed;
  }

  .side-bar {
    height: calc(296.6mm * 2);
  }


}
</style>