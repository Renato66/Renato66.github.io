<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 class="display-2 mb-3">
        {{ contact.name }}
      </v-flex>
      <v-flex shrink>
        <strong>
          Telefone:
        </strong>
        +{{ contact.phone.country }}
          ({{ contact.phone.area }})
          {{ contact.phone.number }}
      </v-flex>
      <v-flex shrink>
        <strong>
          Endereço:
        </strong>
        {{ contact.city }} - {{ contact.state }}
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <strong>
          Email:
        </strong>
          {{ contact.mail }}
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <strong>
          Github:
        </strong>
        <a :href="`${socialNetworks.find(elem => elem.name === 'github').url}`">
          {{ socialNetworks.find(elem => elem.name === 'github').url }}
        </a>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <strong>
          Linkedin:
        </strong>
        <a :href="`${socialNetworks.find(elem => elem.name === 'linkedin').url}`">
          {{ socialNetworks.find(elem => elem.name === 'linkedin').url }}
        </a>
      </v-flex>
    </v-layout>
    <v-layout mt-3>
      <v-flex xs12 class="display-1">
        {{ $t('work.title') }}
      </v-flex>
    </v-layout>
    <v-layout v-for="experience in work" :key="experience.id" row wrap mt-3>
      <v-flex xs12>
        <strong class="title">{{ experience.company }}</strong>
        <span v-if="experience.endDate === null" class="caption">
          {{ experience.startDate }}
          ({{ $t('actual') }})
        </span>
        <span v-else class="caption">
          {{ $tc('year', howLong(experience).years) }}
          {{ $tc('month', howLong(experience).months) }}
        </span>
      </v-flex>
      <v-flex>
        {{ $t(`work.${experience.id}.description`) }}
      </v-flex>
    </v-layout>
    <v-layout mt-3>
      <v-flex xs12 class="display-1">
        {{ $t('skills.title') }}
      </v-flex>
    </v-layout>
    <v-layout row wrap mt-3>
      <v-flex xs12>
        <v-chip v-for="skill in skills" :key="skill.name">
          {{ skill.name }}
        </v-chip>
      </v-flex>
    </v-layout>
    <div style="page-break-after: always;" class="ma-5"></div>
    <v-layout mt-3>
      <v-flex xs12 class="display-1">
        {{ $t('about.title') }}
      </v-flex>
    </v-layout>
    <v-layout mt-3>
      <v-flex xs12 class="pt-2">
        <p>
          {{ $t('about.paragraph.1')}}
        </p>
        <p>
          {{ $t('about.paragraph.2')}} Boxnet
        </p>
        <p>
          {{ $t('about.paragraph.3')}}
        </p>
      </v-flex>
    </v-layout>
    <v-layout mt-3>
      <v-flex xs12 class="display-1">
        {{ $t('formation.title') }}
      </v-flex>
    </v-layout>
    <v-layout v-for="item in timeline.filter(elem => elem.resume)" :key="item.id" row wrap mt-3>
      <v-flex xs12>
        <strong class="title">{{ $t(`timeline.${item.id}.place`)}}</strong>
        <span v-if="item.endDate === null" class="caption">
          {{ item.startDate }}
          ({{ $t('doing') }})
        </span>
        <span v-else class="caption">
          {{ $tc('year', howLong(item).years) }}
          {{ $tc('month', howLong(item).months) }}
        </span>
        <v-flex>
          {{ $t(`timeline.${item.id}.title`)}} - {{ $t(`timeline.${item.id}.description`)}}
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { differenceInCalendarMonths } from 'date-fns'

export default {
  props: {
    timeline: {
      type: Array
    },
    socialNetworks: {
      type: Array
    },
    contact: {
      type: Object
    },
    work: {
      type: Array
    },
    skills: {
      type: Array
    }
  },
  methods: {
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
.v-chip {
  -webkit-print-color-adjust: exact
}

@media print {
  @page { margin: 0; }
  body { margin: 0cm 0.5cm; }
}
</style>
