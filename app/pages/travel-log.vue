<template>
  <div class="mx-auto flex w-full max-w-4xl flex-col gap-3 md:gap-4">
    <p class="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
      Travel Journal
    </p>

    <h1 class="text-4xl font-light leading-tight text-white md:text-6xl">
      Travel Log
    </h1>

    <p class="max-w-2xl text-base text-slate-300/80 md:text-lg">
      Notes, routes, and snapshots from places I have explored.
    </p>

    <div style="overflow:hidden; margin-top: 20px;">
      <img
        :src="mapSvg"
        alt="World map"
        style="transform: scale(1.2);"
      >
    </div>
  </div>
</template>

<script setup>
import mapSvg from '@/assets/svg/map.svg'
</script> 