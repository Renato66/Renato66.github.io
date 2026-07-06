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
  <main class="relative min-h-screen overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
    <div
      class="absolute -inset-12 scale-125 opacity-40 bg-linear-to-tr from-cyan-400/15 via-transparent to-blue-500/15"
    />
    <div class="absolute inset-0 bg-linear-to-b from-slate-950/45 to-slate-950/75" />

    <header class="absolute left-0 right-0 z-10 flex items-center justify-between px-4 py-5 md:px-11 md:py-8">
      <BaseButton
        type="button"
        class="h-11 w-11 justify-center rounded-full border border-white/30 bg-slate-950/70 backdrop-blur-sm transition-colors hover:bg-slate-900/90"
        aria-label="Open menu"
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
      </BaseButton>

      <LanguageSwitcher />
    </header>

    <section class="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 pb-16 pt-8 text-center md:pt-4">
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
        class="mt-10 rounded-full border-0 bg-gradient-to-r from-teal-400 to-teal-500 px-8 py-3 text-sm font-bold uppercase tracking-wide text-teal-50 shadow-xl shadow-teal-500/30 hover:from-teal-300 hover:to-teal-500"
      >
        {{ $t('menu.contact') }}
      </BaseButton>
    </section>
  </main>
</template>
