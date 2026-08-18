<script setup lang="ts">
import {
  Baby,
  Bike,
  BookOpen,
  Briefcase,
  Building2,
  Car,
  CircleDollarSign,
  Code,
  Dog,
  ArrowUpRight,
  Footprints,
  Globe,
  GraduationCap,
  Heart,
  House,
  IdCard,
  Languages,
  Map,
  Mic,
  Plane,
  Snowflake,
  Trophy,
  Umbrella,
} from '@lucide/vue'
import type { Component } from 'vue'

type AchievementTag = 'work' | 'life' | 'travel'

interface Achievement {
  id: string
  title: string
  description: string
  completed: string | null
  link: string | null
  tags: readonly AchievementTag[]
  icon: Component
}

interface AchievementSource {
  id: string
  completed: string | null
  link: string | null
  tags: readonly AchievementTag[]
  icon: Component
}

const { t } = useI18n()

usePageSeo({
  titleKey: 'achievements.page.title',
  descriptionKey: 'achievements.page.description',
})

const tagOptions: AchievementTag[] = ['work', 'life', 'travel']
const activeTags = shallowRef<AchievementTag[]>([...tagOptions])

const achievements = [
  { id: 'bilingual-boss', completed: '03/2025', link: null, tags: ['travel'], icon: Languages },
  { id: 'yeti-alert', completed: '05/2025', link: 'https://www.instagram.com/p/DHGDwBTtlfs/', tags: ['travel'], icon: Snowflake },
  { id: 'culture-shock', completed: '02/2024', link: null, tags: ['travel'], icon: House },
  { id: 'finding-nemo', completed: '06/2023', link: null, tags: ['travel'], icon: Plane },
  { id: 'dust-devil', completed: '07/2023', link: null, tags: ['travel'], icon: Bike },
  { id: 'world-wanderer', completed: '09/2023', link: null, tags: ['travel'], icon: Globe },
  { id: 'two-of-five', completed: '01/2023', link: null, tags: ['travel'], icon: Map },
  { id: 'rank-up-major', completed: '10/2022', link: null, tags: ['work'], icon: Trophy },
  { id: 'three-of-five', completed: '04/2023', link: null, tags: ['travel'], icon: Map },
  { id: 'the-voice', completed: '05/2022', link: null, tags: ['work'], icon: Mic },
  { id: 'side-hustle', completed: '12/2019', link: 'https://github.com/Renato66/auto-label', tags: ['work'], icon: Code },
  { id: 'rank-up-sergeant', completed: '09/2019', link: null, tags: ['work'], icon: Trophy },
  { id: 'passport-stamped', completed: '05/2019', link: null, tags: ['travel'], icon: BookOpen },
  { id: 'rank-up-corporal', completed: '05/2017', link: null, tags: ['work'], icon: Trophy },
  { id: 'into-the-battle-field', completed: '12/2016', link: null, tags: ['work'], icon: Briefcase },
  { id: 'degree-earned', completed: '12/2016', link: null, tags: ['work'], icon: GraduationCap },
  { id: 'a-plus', completed: '07/2014', link: null, tags: ['work'], icon: BookOpen },
  { id: 'fast-and-furious', completed: '11/2012', link: null, tags: ['life'], icon: IdCard },
  { id: 'global-communicator', completed: '05/2012', link: null, tags: ['travel'], icon: Languages },
  { id: 'going-fast', completed: null, link: null, tags: ['life'], icon: Car },
  { id: 'first-stretch', completed: null, link: null, tags: ['life'], icon: Footprints },
  { id: 'first-brick', completed: null, link: null, tags: ['life'], icon: House },
  { id: 'own-boss', completed: null, link: null, tags: ['work'], icon: Building2 },
  { id: 'permanent-vacation', completed: null, link: null, tags: ['life'], icon: Umbrella },
  { id: 'double-digits', completed: null, link: null, tags: ['life'], icon: Footprints },
  { id: 'forever-yes', completed: null, link: null, tags: ['life'], icon: Heart },
  { id: 'new-chapter', completed: null, link: null, tags: ['life'], icon: Baby },
  { id: 'pet-parent', completed: null, link: null, tags: ['life'], icon: Dog },
  { id: 'seven-figures', completed: null, link: null, tags: ['life'], icon: CircleDollarSign },
  { id: 'four-of-five', completed: null, link: null, tags: ['travel'], icon: Map },
  { id: 'five-of-five', completed: null, link: null, tags: ['travel'], icon: Map },
  { id: 'off-the-grid', completed: null, link: null, tags: ['travel'], icon: Car },
] as const satisfies readonly AchievementSource[]

const localizedAchievements = computed<Achievement[]>(() =>
  achievements.map(achievement => ({
    ...achievement,
    title: t(`achievements.${achievement.id}.title`),
    description: t(`achievements.${achievement.id}.description`),
  })),
)

const visibleAchievements = computed(() =>
  localizedAchievements.value.filter(achievement =>
    achievement.tags.some(tag => activeTags.value.includes(tag)),
  ),
)

function toggleTag(tag: AchievementTag) {
  activeTags.value = activeTags.value.includes(tag)
    ? activeTags.value.filter(activeTag => activeTag !== tag)
    : [...activeTags.value, tag]
}
</script>

<template>
  <section class="mx-auto flex w-full max-w-6xl flex-col gap-8">
    <header class="flex flex-col gap-4">
      <p class="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
        {{ t('achievements.page.kicker') }}
      </p>

      <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div class="max-w-3xl">
          <h1 class="text-3xl font-light leading-tight text-white md:text-6xl">
            {{ t('achievements.page.title') }}
          </h1>

          <p class="mt-3 text-sm text-slate-300/80 md:text-lg">
            {{ t('achievements.page.description') }}
          </p>
        </div>
      </div>
    </header>

    <div
      class="flex flex-wrap gap-2"
      role="group"
      :aria-label="t('achievements.page.filtersLabel')"
    >
      <button
        v-for="tag in tagOptions"
        :key="tag"
        type="button"
        class="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold capitalize transition hover:-translate-y-0.5"
        :class="activeTags.includes(tag)
          ? 'border-cyan-200/55 bg-cyan-300/15 text-cyan-50 shadow-lg shadow-cyan-500/10'
          : 'border-white/10 bg-white/5 text-slate-400 hover:border-white/25 hover:text-slate-100'"
        :aria-pressed="activeTags.includes(tag)"
        @click="toggleTag(tag)"
      >
        <span
          class="h-2 w-2 rounded-full"
          :class="activeTags.includes(tag) ? 'bg-cyan-300' : 'bg-slate-600'"
          aria-hidden="true"
        />
        {{ t(`achievements.tags.${tag}`) }}
      </button>
    </div>

    <p
      v-if="visibleAchievements.length === 0"
      class="rounded-2xl border border-white/10 bg-white/5 px-5 py-8 text-center text-slate-300"
    >
      {{ t('achievements.page.empty') }}
    </p>

    <ul
      v-else
      class="flex flex-col gap-2"
      role="list"
    >
      <li
        v-for="achievement in visibleAchievements"
        :key="achievement.id"
      >
        <component
          :is="achievement.link ? 'a' : 'div'"
          :href="achievement.link || undefined"
          :target="achievement.link ? '_blank' : undefined"
          :rel="achievement.link ? 'noopener noreferrer' : undefined"
          class="achievement-row group relative grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-2xl border bg-white/4 px-3 py-2.5 shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:bg-white/8 md:px-4 md:pr-24"
          :class="[
            achievement.completed
              ? 'border-cyan-200/20 opacity-100'
              : 'border-white/10 opacity-45 hover:opacity-85',
            achievement.link ? 'cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70' : '',
          ]"
        >
          <span
            class="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border"
            :class="achievement.completed
              ? 'border-cyan-200/25 bg-cyan-300/10 text-cyan-100'
              : 'border-slate-200/10 bg-slate-200/10 text-slate-400'"
            aria-hidden="true"
          >
            <component
              :is="achievement.icon"
              class="h-5 w-5"
              :stroke-width="1.8"
            />

            <span
              v-if="achievement.link"
              class="achievement-link-indicator absolute -right-1.5 -top-1.5 bg-black inline-flex h-5 w-5 items-center justify-center rounded-full border border-cyan-200/40 text-slate-950 shadow-lg shadow-cyan-500/20 transition"
              aria-hidden="true"
            >
              <ArrowUpRight
                class="h-3 w-3 text-cyan-100"
                :stroke-width="2"
              />
            </span>
          </span>

          <div class="min-w-0">
            <h2 class="truncate text-sm font-semibold leading-tight text-white md:text-base">
              {{ achievement.title }}
            </h2>

            <p class="mt-1 truncate text-xs leading-tight text-slate-300/75 md:text-sm">
              {{ achievement.description }}
            </p>
          </div>

          <span
            v-if="achievement.completed"
            class="absolute right-3 top-2 font-mono text-[0.65rem] font-medium leading-none text-slate-500/80 md:right-4"
          >
            {{ achievement.completed }}
          </span>
        </component>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.achievement-link-indicator {
  opacity: 1;
  transform: translate(0, 0);
}

@media (hover: hover) and (pointer: fine) {
  .achievement-link-indicator {
    opacity: 0;
    transform: translate(0.125rem, -0.125rem) scale(0.9);
  }

  .achievement-row:hover .achievement-link-indicator,
  .achievement-row:focus-visible .achievement-link-indicator {
    opacity: 1;
    transform: translate(0, 0) scale(1);
  }
}
</style>
