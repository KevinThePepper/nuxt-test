<template>
  <div class="shadow-nuxt">
    <div class="container mx-auto px-4 pt-16 pb-12">
      <div class="flex flex-wrap justify-between mb-4">
        <div class="lg:w-6/12 lg:text-left text-center p-4 sm:p-0">
          <i18n
            path="support.title"
            tag="h1"
            class="text-3xl xl:text-4xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium leading-normal mb-6 lg:pt-4"
          >
            {{ $t('support.title') }}
            <template v-slot:nuxt>
              <AppTitle />
            </template>
          </i18n>
          <i18n
            path="support.description"
            tag="h3"
            class="xl:text-lg text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary font-medium leading-relaxed mb-6"
          >
            <template v-slot:break>
              <br />
            </template>
            <template v-slot:team>
              <NuxtLink to="/team" class="text-engins-kewlblue underline">
                NuxtJS team
              </NuxtLink>
            </template>
          </i18n>
        </div>
        <SupportIllustration
          class="w-2/3 mx-auto lg:mx-0 lg:w-5/12 lg:-mt-8 text-light-elevatedSurface dark:text-dark-elevatedSurface"
        />
      </div>
      <div class="flex -mx-2 md:-mx-4 mb-4">
        <section class="w-full p-2 md:p-4">
          <div
            class="bg-light-surface dark:bg-dark-surface p-8 rounded w-full relative"
          >
            <TechnicalSupportIllustration class="float-right mb-4" />
            <h2 class="text-2xl font-medium mb-2">
              {{ $t('support.technical.title') }}
            </h2>
            <h3 class="text-engins-bubblyblue font-medium text-2xl mb-4">
              $250 <span class="text-sm">/hr</span>
            </h3>
            <p class="mb-6">
              {{ $t('support.technical.description') }}
            </p>
            <AppButton
              href="https://otechie.com/nuxt"
              rel="noopener"
              target="_blank"
              class="sm:mr-4 py-3 px-6 text-base"
            >
              <CommentsIcon slot="icon" class="h-5 -mb-1 mr-1" />
              {{ $t('support.technical.start') }}
            </AppButton>
          </div>
        </section>
      </div>
      <section
        class="text-center italic flex justify-center items-center flex-wrap mb-16"
      >
        <span class="flex">{{ $t('support.technical.partner.pre') }}</span>
        <a
          href="https://otechie.com"
          rel="noopener"
          target="_blank"
          class="flex"
        >
          <img
            src="/img/partners/otechie.svg"
            alt="Otechie Logo"
            class="inline-block h-4 px-2"
          />
        </a>
        <span class="flex">{{ $t('support.technical.partner.post') }}</span>
      </section>
      <h2
        class="text-3xl xl:text-4xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium leading-normal mb-6 transition-colors duration-300 ease-linear"
      >
        <AppTitle /> {{ $t('support.entreprise.title') }}
      </h2>
      <h3
        class="xl:text-lg text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary font-medium leading-relaxed mb-6 flex flex-wrap items-center transition-colors duration-300 ease-linear"
      >
        <span class="flex">{{ $t('support.entreprise.partner.pre') }}</span>
        <a
          href="https://tidelift.com"
          rel="noopener"
          target="_blank"
          class="flex"
        >
          <img
            src="/img/partners/tidelift.svg"
            alt="Tidelift Logo"
            class="inline-block px-2 h-5"
          />
        </a>
        <span class="flex">{{ $t('support.entreprise.partner.post') }}</span>
      </h3>
      <i18n
        path="support.entreprise.description"
        tag="p"
        class="text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary mb-8 transition-colors duration-300 ease-linear"
      >
        <template v-slot:break>
          <br />
        </template>
      </i18n>
      <AppButton
        href="https://tidelift.com/subscription/pkg/npm-nuxt?utm_source=nuxt&utm_medium=referral&utm_campaign=enterprise"
        rel="noopener"
        target="_blank"
        class="sm:mr-4 py-3 px-6 text-base"
      >
        <AngleDoubleRightIcon slot="icon" class="h-5 -mb-1 mr-1" />
        {{ $t('support.entreprise.learn_more') }}
      </AppButton>
      <AppButton
        href="https://tidelift.com/subscription/request-a-demo?utm_source=nuxt&utm_medium=referral&utm_campaign=enterprise"
        rel="noopener"
        target="_blank"
        class="sm:mr-4 py-3 px-6 text-base"
      >
        <InboxInIcon slot="icon" class="h-5 -mb-1 mr-1" />
        {{ $t('support.entreprise.request_a_demo') }}
      </AppButton>
    </div>
  </div>
</template>

<script>
import AngleDoubleRightIcon from '~/assets/icons/angle-double-right.svg?inline'
import InboxInIcon from '~/assets/icons/inbox-in.svg?inline'
import CommentsIcon from '~/assets/icons/comments.svg?inline'
import TechnicalSupportIllustration from '~/assets/illustrations/technical-support.svg?inline'
import SupportIllustration from '~/assets/illustrations/support.svg?inline'

export default {
  components: {
    SupportIllustration,
    AngleDoubleRightIcon,
    CommentsIcon,
    InboxInIcon,
    TechnicalSupportIllustration
  },
  head() {
    const title = this.$t('support.meta.title')
    const description = this.$t('support.meta.description')

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description
        }
      ]
    }
  }
}
</script>

<style scoped>
.btn {
  @apply inline-block border rounded border-engins-bubblyblue text-engins-bubblyblue py-2 px-4;

  &:hover {
    @apply text-white bg-engins-bubblyblue;
  }

  &.btn-gray {
    @apply border-engins-newnavy text-engins-newnavy;

    &:hover {
      @apply bg-engins-newnavy text-white;
    }
  }
}
</style>
