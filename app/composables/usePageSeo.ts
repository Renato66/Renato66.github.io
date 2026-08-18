interface PageSeoOptions {
  titleKey: string
  descriptionKey: string
  keywordsKey?: string
}

const ogImage = 'https://www.gravatar.com/avatar/44d075eb0dc6e9d7f3528ac2de5c24c3?s=512'

export function usePageSeo(options: PageSeoOptions) {
  const { t, localeProperties } = useI18n()
  const requestURL = useRequestURL()
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl

  const title = computed(() => t(options.titleKey))
  const description = computed(() => t(options.descriptionKey))
  const siteName = computed(() => t('seo.siteName'))
  const canonical = computed(() => `${siteUrl}${requestURL.pathname}`)
  const ogLocale = computed(() => localeProperties.value.language?.replace('-', '_') ?? 'en_US')
  const keywordsKey = options.keywordsKey
  const keywords = keywordsKey
    ? computed(() => t(keywordsKey))
    : undefined

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogType: 'website',
    ogUrl: canonical,
    ogImage,
    ogImageAlt: title,
    ogImageWidth: 512,
    ogImageHeight: 512,
    ogSiteName: siteName,
    ogLocale,
    twitterCard: 'summary',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: ogImage,
    keywords,
  })

  useHead({
    link: [
      { rel: 'canonical', href: canonical },
    ],
  })
}
