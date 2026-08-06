<script setup lang="ts">
defineOptions({
  name: 'ContactModal',
})

type ModalExpose = {
  open: () => void
  close: () => void
}

const contactModalQueryValue = 'contact'
const route = useRoute()
const router = useRouter()
const modal = useTemplateRef<ModalExpose>('modal')

const contactLinks = [
  {
    label: 'LinkedIn',
    handle: '/in/FrisonVicente',
    url: 'https://www.linkedin.com/in/frisonvicente/',
  },
  {
    label: 'GitHub',
    handle: '@Renato66',
    url: 'https://github.com/Renato66',
  },
  {
    label: 'Instagram',
    handle: '@Irenato66',
    url: 'https://www.instagram.com/irenato66/',
  },
] as const

const isContactModalRoute = computed(() => route.query.modal === contactModalQueryValue)

function removeModalQuery() {
  const query = { ...route.query }
  delete query.modal

  return router.replace({ query })
}

function syncModalWithRoute() {
  if (isContactModalRoute.value) {
    modal.value?.open()
    return
  }

  modal.value?.close()
}

function open() {
  if (isContactModalRoute.value) {
    modal.value?.open()
    return
  }

  void router.push({
    query: {
      ...route.query,
      modal: contactModalQueryValue,
    },
  })
}

function close() {
  if (isContactModalRoute.value) {
    void removeModalQuery()
    return
  }

  modal.value?.close()
}

function handleClose() {
  if (isContactModalRoute.value) {
    void removeModalQuery()
  }
}

onMounted(syncModalWithRoute)
watch(() => route.query.modal, syncModalWithRoute)

defineExpose({
  open,
  close,
})
</script>

<template>
  <BaseModal
    ref="modal"
    :aria-label="$t('contactModal.title')"
    :close-label="$t('contactModal.closeLabel')"
    @close="handleClose"
  >
    <div class="pr-10">
      <p class="text-sm font-bold uppercase tracking-[0.28em] text-teal-300">
        {{ $t('menu.contact') }}
      </p>

      <h2 class="mt-3 text-3xl font-light leading-tight text-white">
        {{ $t('contactModal.title') }}
      </h2>

      <p class="mt-3 text-sm leading-6 text-slate-300">
        {{ $t('contactModal.description') }}
      </p>
    </div>

    <ul class="mt-8 space-y-3">
      <li
        v-for="link in contactLinks"
        :key="link.url"
      >
        <a
          :href="link.url"
          target="_blank"
          rel="noreferrer"
          class="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/3 px-4 py-3 text-left transition hover:border-teal-300/60 hover:bg-teal-300/10 focus:outline-none focus:ring-2 focus:ring-teal-300"
        >
          <span>
            <span class="block text-sm font-bold text-white">
              {{ link.label }}
            </span>
            <span class="mt-1 block text-sm text-slate-400">
              {{ link.handle }}
            </span>
          </span>

          <span
            class="text-lg text-teal-300 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          >
            &rarr;
          </span>
        </a>
      </li>
    </ul>
  </BaseModal>
</template>
