<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 class="display-2">
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
          Linkedin:
        </strong>
        <a :href="`https://www.linkedin.com/in/${contact.linkedin}`">
          https://www.linkedin.com/in/{{ contact.linkedin }}
        </a>
      </v-flex>
    </v-layout>
    <v-layout mt-3>
      <v-flex xs12 class="display-1">
        Experiências
      </v-flex>
    </v-layout>
    <v-layout v-for="experience in work" :key="experience.id" row wrap mt-3>
      <v-flex xs12>
        <strong class="title">@ {{ experience.company }}</strong>
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
    <div style="page-break-after: always;" class="ma-5"></div>
    <v-layout>
      <v-flex xs12 class="display-1">
        Sobre mim
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
        Skills
      </v-flex>
    </v-layout>
    <v-layout row wrap mt-3>
      <v-flex xs12>
        <v-chip v-for="skill in skills" :key="skill.name">
          {{ skill.name }}
        </v-chip>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { differenceInCalendarMonths } from 'date-fns'

export default {
  props: {
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
</style>
