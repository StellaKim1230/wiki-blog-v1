<template>
  <ParentLayout>
    <template v-if="!this.$frontmatter.disableDisqus" #page-bottom>
      <Disqus slot="page-bottom" class="content" />
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout'
import Disqus from '../components/Disqus'

export default {
  components: {
    ParentLayout,
    Disqus,
  },
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        if (typeof window !== 'undefined' && window.DISQUS) {
          window.DISQUS.reset({ reload: true })
        }
      }
    },
  },
}
</script>

<style lang="css" scoped>
#disqus_thread {
  max-width: 740px;
  margin: 0 auto;
  padding: 2rem 2.5rem;
}
</style>
