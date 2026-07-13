<script setup lang="ts">
const birthYear = 1993
const birthMonthIndex = 4
const birthDay = 9

const age = computed(() => {
  const now = new Date()
  let years = now.getUTCFullYear() - birthYear
  const hadBirthdayThisYear = now.getUTCMonth() > birthMonthIndex
    || (now.getUTCMonth() === birthMonthIndex && now.getUTCDate() >= birthDay)

  if (!hadBirthdayThisYear) {
    years -= 1
  }

  return years
})
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center pb-16 text-center md:pt-4">
    <NuxtImg
      src="https://www.gravatar.com/avatar/44d075eb0dc6e9d7f3528ac2de5c24c3?s=1000"
      preset="avatar"
      alt="Renato Vicente"
      class="mb-6 h-36 w-36 rounded-full object-cover shadow-2xl shadow-black/50 md:h-48 md:w-48 lg:h-56 lg:w-56"
    />

    <h1 class="m-0 text-5xl font-extralight leading-none tracking-normal md:text-7xl lg:text-8xl">
      Renato Vicente
    </h1>

    <p class="mt-4 text-2xl font-medium leading-tight text-slate-100/95 md:text-4xl lg:text-5xl">
      {{ $t('description') }}
    </p>

    <p class="mt-4 text-base text-slate-300/60 md:text-xl">
      {{ $t('homeIntro', { age }) }}
    </p>

    <BaseButton
      type="button"
      class="mt-10 rounded-full border-0 bg-linear-to-r from-teal-400 to-teal-500 px-8 py-3 text-sm font-bold uppercase tracking-wide text-teal-50 shadow-xl shadow-teal-500/30 hover:from-teal-300 hover:to-teal-500"
    >
      {{ $t('menu.contact') }}
    </BaseButton>

    <TrustedByMarquee class="mt-12 w-full max-w-6xl" />
  </div>
</template>
