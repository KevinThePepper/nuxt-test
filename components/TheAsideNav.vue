<template>
  <aside
    class="opacity-transition block bg-gray-100 mt-8 -mx-4 lg:bg-transparent lg:mt-0 lg:mx-0 lg:inset-0 z-90 lg:mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-1/4 lg:block"
  >
    <div
      class="h-full overflow-y-auto scrolling-touch text-center lg:text-left lg:h-auto lg:block lg:relative lg:sticky lg:top-24"
    >
      <nav
        class="pt-8 lg:overflow-y-auto lg:block lg:pl-0 lg:pr-8 sticky?lg:max-h-(screen-24)"
        :class="{ hidden: !showNav }"
      >
        <p class="uppercase font-bold mb-6">
          <NuxtLink
            to="/guide/release-notes"
            class="text-sm"
            active-class=""
            exact-active-class=""
          >
            {{ $t('common.version') }}
            <span class="text-engins-bubblyblue">{{
              $config.nuxtVersion
            }}</span>
          </NuxtLink>
        </p>
        <div v-for="(sublinks, group) in sortedLinks" :key="`links-${group}`">
          <h3
            :key="`title-${group}`"
            class="uppercase font-medium text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary pb-2 transition-colors duration-300 ease-linear"
          >
            {{ $t(`content.${section}.${group}`) }}
          </h3>
          <ul class="pb-8">
            <li
              v-for="(link, index) in sublinks"
              :key="index"
              class="text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary"
            >
              <NuxtLink
                class="p-2 pl-4 flex rounded hover:text-engins-bubblyblue dark:hover:text-engins-bubblyblue transition-colors duration-300 ease-linear"
                exact-active-class="text-engins-bubblyblue bg-blue-100 dark:bg-blue-800 dark:text-white"
                active-class="text-engins-bubblyblue dark:text-white"
                :to="toLink(link)"
              >
                <template v-if="link.menu">
                  {{ link.menu }}
                </template>
                <template v-else>
                  {{ link.title }}
                </template>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </aside>
</template>

<script>
import sortBy from 'lodash.sortby'

export default {
  props: {
    links: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      current: 0,
      setInter: null,
      showNav: false,
      section: this.$route.params.section
    }
  },
  computed: {
    visible() {
      return this.$store.state.visibleAffix
    },
    path() {
      return this.$route.path.slice(-1) === '/'
        ? this.$route.path.slice(0, -1)
        : this.$route.path
    },
    menu() {
      return '/' + this.$route.params.section
    },
    sortedLinks() {
      const links = {}
      sortBy(Object.keys(this.links), link => {
        return Object.keys(this.$i18n.t(`content.${this.section}`)).indexOf(
          link
        )
      }).forEach(key => {
        links[key] = this.links[key]
      })
      return links
    }
  },
  methods: {
    toLink(link) {
      const slug = link.slug === 'index' ? undefined : link.slug
      return this.localePath({
        name: 'section-slug',
        params: { section: this.section, slug }
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
