<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()

interface NavPage {
  id: string
  text: string
  path: string
}

const pages: NavPage[] = [
  {
    id: 'home',
    text: t('pages.home'),
    path: '/',
  },
  {
    id: 'travel-log',
    text: t('pages.travelLog'),
    path: '/travel-log',
  },
]

const currentPage = computed(() => {
  const route = useRoute()
  return pages.find(p => p.path === route.path) || pages[0]
})

const selectedPage = computed({
  get: () => currentPage.value,
  set: (page) => {
    if (page) {
      router.push(page.path)
    }
  },
})
</script>

<template>
  <div class="flex items-center gap-4">
    <BaseSelect
      id="page-select"
      v-model="selectedPage"
      :items="pages"
      close-on-click
    >
      <span class="sr-only">Open menu</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        class="h-4 w-4"
        fill="none"
      >
        <path
          d="M5 7h14M5 12h14M5 17h10"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
        />
      </svg>
    </BaseSelect>
  </div>
</template>
