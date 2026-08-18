<script setup lang="ts">
const { t, localeProperties } = useI18n()

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Renato Vicente Frison dos Santos',
  alternateName: ['Renato Vicente', 'Renato66', 'FrisonVicente'],
  url: 'https://renato66.github.io',
  image: 'https://www.gravatar.com/avatar/44d075eb0dc6e9d7f3528ac2de5c24c3?s=1000',
  jobTitle: 'Senior Front-end Engineer',
  sameAs: [
    'https://github.com/Renato66',
    'https://www.linkedin.com/in/frisonvicente/',
    'https://www.instagram.com/irenato66/',
  ],
}

useHead({
  htmlAttrs: {
    lang: () => localeProperties.value.language ?? 'en',
  },
  titleTemplate: (title) => {
    const siteName = t('seo.siteName')
    if (!title || title === siteName) {
      return siteName
    }
    return `${title} · ${siteName}`
  },
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(personJsonLd),
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
