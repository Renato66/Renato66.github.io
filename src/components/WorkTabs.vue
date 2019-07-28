<template>
  <v-container>
    <v-layout align-center>
      <v-spacer></v-spacer>
      <v-flex shrink>
        <v-btn flat icon @click="next" :disabled="experiences.length === selected + 1">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-flex>
      <v-flex shrink class="headline text-xs-center" style="min-width:150px;">
        {{ experiences[selected].company }}
      </v-flex>
      <v-flex shrink>
        <v-btn flat icon @click="prev" :disabled="selected === 0">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-flex>
      <v-spacer></v-spacer>
    </v-layout>
    <v-layout>
      <v-flex xs12>
        <v-window v-model="selected" style="min-height: 200px;">
          <v-window-item
            v-for="work in experiences"
            :key="work.id"
            style="min-height: 200px;"
          >
        
              <v-layout class="text-xs-center mt-4  mb-3" row wrap>
                <v-flex xs12 class="primary--text title">
                  {{ $t(`work.${work.id}`).position }}
                </v-flex>
              </v-layout>
              <v-layout class="text-xs-center subtitle-1">
                <v-spacer></v-spacer>
                <v-flex xs10 sm8>
                  {{ $t(`work.${work.id}`).description }}<br>
                  <span v-if="work.endDate === null">
                    {{ $t('actual') }}
                  </span>
                  <span v-else>
                    {{ $tc('year', howLong(work).years) }}
                    {{ $tc('month', howLong(work).months) }}
                  </span>
                </v-flex>
                <v-spacer></v-spacer>
              </v-layout>
          </v-window-item>
        </v-window>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { differenceInCalendarMonths } from 'date-fns'
export default {
  props: {
    experiences: {
      type: Array
    }
  },
  data () {
    return {
      selected: 0
    }
  },
  methods: {
    next () {
      this.selected = this.selected + 1 === this.experiences
        ? 0
        : this.selected + 1
    },
    prev () {
      this.selected = this.selected - 1 < 0
        ? this.experiences - 1
        : this.selected - 1
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

</style>
