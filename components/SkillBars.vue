<template>
  <v-container grid-list-xl>
    <v-layout>
      <v-flex class="primary--text">
        <h2 class="primary--text display-3 font-weight-thin">
          {{ $t('skills.title') }}
        </h2>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex v-for="(skill, index) in skills" :key="index" xs12 sm6>
        <v-layout align-end>
          <v-flex shrink pr-0>
            <v-avatar size="40" tile>
              <img
                :src="`https://images.weserv.nl/?url=${baseUrl + skill.img}.webp&output=png&h=40&w=40`"
                :srcset="`https://images.weserv.nl/?url=${baseUrl + skill.img}.webp&output=webp&h=40&w=40`"
                :lazy-src="`https://images.weserv.nl/?url=${baseUrl + skill.img}.webp&q=20&h=40&w=40`"
                :alt="skill.name"
              >
            </v-avatar>
          </v-flex>
          <v-flex>
            <h5 class="headline">
              {{ skill.name }}
            </h5>
            <div class="knowledge-bar">
              <div class="knowledge-progress" :class="[`knowledge-progress--${color(skill.knowlegde)}`]" :style="{'width': `${skill.knowlegde}%`}" />
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    skills: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      baseUrl: process.env.VUE_APP_BASE_URL
    }
  },
  methods: {
    color (value) {
      if (value > 50) {
        return value > 75 ? 'aqua' : 'blue'
      } else {
        return value > 25 ? 'yellow' : 'red'
      }
    }
  }
}
</script>

<style>
.knowledge-bar {
  background-color: white;
  padding: 5px;
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 5px;
  width: 100%;
}
.knowledge-bar .knowledge-progress {
  margin: 0;
  height: 20px;
  border-radius: 4px;
}
.knowledge-bar .knowledge-progress--aqua {
  background: linear-gradient(to bottom right, #52ca23, #3effa6);
}
.knowledge-bar .knowledge-progress--blue {
  background: linear-gradient(to bottom right, #40d692, #43f3e3);
}
.knowledge-bar .knowledge-progress--yellow {
  background: linear-gradient(to bottom right, #d9d648, #ecf741);
}
.knowledge-bar .knowledge-progress--red {
  background: linear-gradient(to bottom right, #df4646, #eb8244);
}
</style>
