<template>
  <v-container>
    <v-layout>
      <v-flex class="primary--text">
        <h2 class="primary--text display-3 font-weight-thin">
          {{ $t('work.title') }}
        </h2>
      </v-flex>
    </v-layout>
    <v-layout align-center>
      <v-spacer />
      <v-flex shrink>
        <v-btn text icon :disabled="selected === 0" aria-label="Previous" @click="prev">
          <v-icon>{{ mdiChevronLeft }}</v-icon>
        </v-btn>
      </v-flex>
      <v-flex shrink class="headline text-center" style="min-width:150px;">
        {{ revertExperiences[selected].company }}
      </v-flex>
      <v-flex shrink>
        <v-btn text icon :disabled="revertExperiences.length === selected + 1" aria-label="Next" @click="next">
          <v-icon>{{ mdiChevronRight }}</v-icon>
        </v-btn>
      </v-flex>
      <v-spacer />
    </v-layout>
    <v-layout>
      <v-flex xs12>
        <v-window v-model="selected" style="min-height: 300px;">
          <v-window-item
            v-for="work in revertExperiences"
            :key="work.id"
          >
            <v-container>
              <v-layout class="text-center mt-6  mb-4" row wrap>
                <v-flex xs12 class="primary--text title">
                  {{ $t(`work.${work.id}`).position }}
                </v-flex>
              </v-layout>
              <v-layout class="text-center subtitle-1">
                <v-spacer />
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
                <v-spacer />
              </v-layout>
            </v-container>
          </v-window-item>
        </v-window>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { differenceInCalendarMonths } from 'date-fns'
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
export default {
  props: {
    experiences: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      selected: 0,
      mdiChevronLeft,
      mdiChevronRight
    }
  },
  computed: {
    revertExperiences () {
      return [...this.experiences].reverse()
    }
  },
  mounted () {
    this.selected = this.experiences.length - 1
  },
  methods: {
    next () {
      this.selected = this.selected + 1 === this.revertExperiences.lenght
        ? 0
        : this.selected + 1
    },
    prev () {
      this.selected = this.selected - 1 < 0
        ? this.revertExperiences.lenght - 1
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
