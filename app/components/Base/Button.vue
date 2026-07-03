<script setup lang="ts">
defineOptions({
  name: 'BaseSelect',
})

const props = withDefaults(defineProps<{
  type?: 'button' | 'submit' | 'reset'
}>(), {
  type: 'button',
})
const emit = defineEmits<{
  click: []
}>()
</script>

<template>
  <button
    :type="props.type"
    class="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors text-sm text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>

