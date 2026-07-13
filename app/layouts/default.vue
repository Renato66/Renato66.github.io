<template>
  <div class="relative min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
    <div class="absolute left-0 z-10 px-4 py-5 md:px-11 md:py-8 pointer-events-none">
      <div class="pointer-events-auto">
        <MenuNav />
      </div>
    </div>

    <div class="absolute right-0 z-10 px-4 py-5 md:px-11 md:py-8 pointer-events-none">
      <div class="pointer-events-auto">
        <LanguageSwitcher />
      </div>
    </div>

    <main class="relative h-screen box-border px-5 pb-8 md:pb-8 md:px-8 pt-20">
      <slot />
    </main>
  </div>
</template>
