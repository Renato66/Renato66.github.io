<script setup lang="ts">
interface TrustedCompany {
  name: string
  country: string
  countryCode: string
  website: string
  logoPath: string
}

const trustedByCompanies: TrustedCompany[] = [
  {
    name: 'Nexton',
    country: 'AR',
    countryCode: 'ar',
    website: 'https://nexton.dev/',
    logoPath: '/logos/trusted-by/nexton.png',
  },
  {
    name: 'Plein Air',
    country: 'US',
    countryCode: 'us',
    website: 'https://www.itspleinair.com/',
    logoPath: '/logos/trusted-by/plein-air.png',
  },
  {
    name: 'Tenth Revolution Group',
    country: 'ES',
    countryCode: 'es',
    website: 'https://www.tenthrevolution.com/',
    logoPath: '/logos/trusted-by/tenth-revolution.png',
  },
  {
    name: 'Bayer',
    country: 'DE',
    countryCode: 'de',
    website: 'https://www.bayer.com/en/',
    logoPath: '/logos/trusted-by/bayer.png',
  },
  {
    name: 'CI&T',
    country: 'BR',
    countryCode: 'br',
    website: 'https://ciandt.com/us/en-us',
    logoPath: '/logos/trusted-by/ciandt.png',
  },
  {
    name: 'Costa Coffee',
    country: 'UK',
    countryCode: 'gb',
    website: 'https://www.costa.co.uk/',
    logoPath: '/logos/trusted-by/costa.png',
  },
  {
    name: 'Friday Finance GmbH',
    country: 'DE',
    countryCode: 'de',
    website: 'https://www.linkedin.com/company/friday-finance-gmbh/',
    logoPath: '/logos/trusted-by/friday-finance.png',
  },
  {
    name: 'Boxnet',
    country: 'BR',
    countryCode: 'br',
    website: 'https://boxnet.com.br/',
    logoPath: '/logos/trusted-by/boxnet.png',
  },
  {
    name: 'Ewave',
    country: 'BR',
    countryCode: 'br',
    website: 'https://ewave.com.br/',
    logoPath: '/logos/trusted-by/ewave.png',
  },
  {
    name: 'Superlogica',
    country: 'BR',
    countryCode: 'br',
    website: 'https://superlogica.com/',
    logoPath: '/logos/trusted-by/superlogica.png',
  },
  {
    name: 'Prefeitura de Sao Paulo',
    country: 'BR',
    countryCode: 'br',
    website: 'https://prefeitura.sp.gov.br/',
    logoPath: '/logos/trusted-by/prefeitura-sp.png',
  },
  {
    name: 'Fundacao Vanzolini',
    country: 'BR',
    countryCode: 'br',
    website: 'https://vanzolini.org.br/',
    logoPath: '/logos/trusted-by/vanzolini.png',
  },
]
</script>

<template>
  <section class="text-left">
    <p class="m-0 text-xs font-semibold uppercase tracking-[0.35em] text-slate-300/75 md:text-sm">
      Trusted by
    </p>

    <div class="relative overflow-hidden pt-[1.9rem] pb-2 mask-[linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]">
      <div class="trusted-by-track flex w-max">
        <ul
          v-for="loopIndex in 2"
          :key="`trusted-loop-${loopIndex}`"
          class="m-0 flex shrink-0 list-none items-center gap-3 pt-[0.35rem] pl-0"
        >
          <li
            v-for="company in trustedByCompanies"
            :key="`${loopIndex}-${company.name}`"
            class="shrink-0"
          >
            <a
              :href="company.website"
              target="_blank"
              rel="noreferrer noopener"
              class="group relative grid h-[5.1rem] w-[5.1rem] place-items-center overflow-visible rounded-2xl bg-slate-950/80 p-[0.2rem] text-slate-200 no-underline backdrop-blur-[6px] transition-all duration-200 ease-out hover:-translate-y-px hover:scale-[1.02] hover:bg-slate-900/90 hover:shadow-[0_6px_20px_rgba(15,23,42,0.4),inset_0_0_0_1px_rgba(45,212,191,0.3)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400/85 max-md:h-[4.8rem] max-md:w-[4.8rem]"
              :aria-label="company.name"
            >
              <img
                :src="company.logoPath"
                :alt="`${company.name} logo`"
                loading="lazy"
                decoding="async"
                class="h-[3.45rem] w-[3.45rem] rounded-xl object-contain max-md:h-[3.1rem] max-md:w-[3.1rem]"
              >
              <span class="pointer-events-none absolute left-1/2 bottom-[calc(100%+0.45rem)] w-max max-w-48 -translate-x-1/2 translate-y-2 rounded-[0.55rem] border border-slate-400/40 bg-slate-950/90 px-2 py-[0.3rem] text-center text-[0.7rem] leading-[1.3] font-semibold tracking-[0.01em] whitespace-normal opacity-0 transition-all duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 max-md:max-w-40">{{ company.name }}</span>
              <span class="absolute right-1 bottom-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-400/45 bg-slate-800/90 p-[0.08rem]">
                <img
                  :src="`https://flagcdn.com/w40/${company.countryCode}.png`"
                  :alt="`${company.country} flag`"
                  loading="lazy"
                  decoding="async"
                  class="h-full w-full rounded-full object-cover"
                >
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>

.trusted-by-track {
  animation: trusted-by-marquee 36s linear infinite;
}

@media (max-width: 767px) {
  .trusted-by-track {
    animation-duration: 28s;
  }
}

@keyframes trusted-by-marquee {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}
</style>
