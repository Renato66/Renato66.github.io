<script setup lang="ts" generic="T extends {
  id: string
  image: string
  text: string
}"
>
defineOptions({
  name: 'BaseSelect',
})


const model = defineModel<T | undefined>()

const props = withDefaults(defineProps<{
  id?: string
  items: readonly T[]
  closeOnClick?: boolean
  label?: string
}>(), {
  id: Math.random().toString(36).substring(7),
  closeOnClick: true,
  label: 'Select an option'
})
</script>

<template>
  <BaseButton
    :commandFor="props.id"
    command="toggle-popover"
    :aria-label="props.label"
    :aria-expanded="false"
    aria-haspopup="listbox"
    :aria-controls="props.id"
    :style="{
      'anchor-name': `--${props.id}`,
    }"
  >
    <img
      v-if="model?.image"
      :src="model.image"
      :alt="model.text"
      class="w-5 h-4 object-cover rounded-sm"
    >
    <span>{{ model?.text ?? props.label }}</span>
    <svg
      class="w-3 h-3"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2.5"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </BaseButton>

  <ul
    :id="props.id"
    ref="popoverRef"
    role="listbox"
    :aria-label="props.label"
    popover
    :style="{
      'position-anchor': `--${props.id}`,
    }"
    class="menu-position w-44 rounded-lg bg-gray-800 shadow-xl ring-1 ring-white/10 overflow-hidden z-50 m-0 p-0 list-none"
  >
    <li
      v-for="item in items"
      :key="item.id"
      role="option"
      :aria-selected="item.id === model?.id"
      class="flex items-center"
    >
      <BaseButton
        :commandFor="props.closeOnClick && props.id"
        command="hide-popover"
        class="gap-3 w-full rounded-none"
        :class="{ 'bg-gray-700/60': item.id === model?.id }"
        @click="model = item"
      >
        <img
          :src="item.image"
          :alt="item.text"
          class="w-5 h-4 object-cover rounded-sm"
        >
        {{ item.text }}
      </BaseButton>
    </li>
  </ul>
</template>

<style>
button[command="toggle-popover"] svg {
  transition: transform 200ms;
}

button[command="toggle-popover"]:has(+ ul:popover-open) svg {
  transform: rotate(180deg);
}

.menu-position {
  margin-block-start: 2.5rem;
  inset: unset;
  top: anchor(top);
  right: anchor(right);
  position-try-fallbacks: '--left';
}

@position-try --left {
  inset: unset;
  top: anchor(top);
  left: anchor(left);
}

li:first-child button {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

li:last-child button {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
</style>
