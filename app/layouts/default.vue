<template>
  <main class="relative min-h-screen overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
    <div
      class="absolute -inset-12 scale-125 opacity-40 bg-linear-to-tr from-cyan-400/15 via-transparent to-blue-500/15"
      aria-hidden="true"
    />
    <div
      class="absolute inset-0 bg-linear-to-b from-slate-950/45 to-slate-950/75"
      aria-hidden="true"
    />

    <header class="absolute left-0 right-0 z-10 flex items-center justify-between px-4 py-5 md:px-11 md:py-8">
      <MenuNav />

      <LanguageSwitcher />
    </header>

    <section class="relative z-10 min-h-screen px-5 pb-16 pt-24 md:px-8 md:pt-28">
      <slot />
    </section>
  </main>
</template>
