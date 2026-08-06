<script setup lang="ts">
defineOptions({
  name: 'BaseModal',
})

withDefaults(defineProps<{
  ariaLabel?: string
  closeLabel?: string
}>(), {
  ariaLabel: 'Modal',
  closeLabel: 'Close',
})

const emit = defineEmits<{
  open: []
  close: []
}>()

defineSlots<{
  default(props: { close: () => void }): unknown
}>()

const dialog = useTemplateRef<HTMLDialogElement>('dialog')
const isOpen = shallowRef(false)

function open() {
  if (!dialog.value || dialog.value.open) {
    return
  }

  dialog.value.showModal()
  isOpen.value = true
  emit('open')
}

function close() {
  if (!dialog.value?.open) {
    return
  }

  dialog.value.close()
}

function handleClose() {
  isOpen.value = false
  emit('close')
}

function handleBackdropClick(event: MouseEvent) {
  if (event.target === dialog.value) {
    close()
  }
}

defineExpose({
  open,
  close,
})
</script>

<template>
  <Teleport to="body">
    <dialog
      ref="dialog"
      class="base-modal fixed inset-0 m-auto w-[min(calc(100vw-2rem),32rem)] max-w-none border-0 bg-transparent p-0 text-white outline-none"
      :aria-label="ariaLabel"
      :data-state="isOpen ? 'open' : 'closed'"
      @click="handleBackdropClick"
      @close="handleClose"
    >
      <div class="base-modal__panel relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/95 p-6 shadow-2xl shadow-black/60 backdrop-blur-xl">
        <button
          type="button"
          class="absolute right-4 top-4 rounded-full p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-300"
          :aria-label="closeLabel"
          @click="close"
        >
          <svg
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <slot :close="close" />
      </div>
    </dialog>
  </Teleport>
</template>

<style scoped>
.base-modal::backdrop {
  background: rgb(2 6 23 / 0.72);
  backdrop-filter: blur(8px);
}

.base-modal[open] {
  animation: base-modal-fade-in 180ms ease-out;
}

.base-modal[open]::backdrop {
  animation: base-modal-backdrop-in 180ms ease-out;
}

.base-modal[open] .base-modal__panel {
  animation: base-modal-panel-in 220ms ease-out;
}

@keyframes base-modal-fade-in {
  from {
    opacity: 0;
  }
}

@keyframes base-modal-backdrop-in {
  from {
    opacity: 0;
  }
}

@keyframes base-modal-panel-in {
  from {
    opacity: 0;
    transform: translateY(0.75rem) scale(0.98);
  }
}
</style>
