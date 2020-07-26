<template>
  <ParentLayout>
    <Disqus slot="page-bottom" v-if="this.$frontmatter.disqus" class="content" />
  </ParentLayout>
</template>

<script>
import ParentLayout from "@parent-theme/layouts/Layout";
import Disqus from "../components/Disqus";

export default {
  components: {
    ParentLayout,
    Disqus,
  },
  // watch: {
  //   $route(to, from) {
  //     if (to.path !== from.path) {
  //       if (typeof window !== "undefined" && window.DISQUS) {
  //         window.DISQUS.reset({ reload: true });
  //       }
  //     }
  //   },
  // },
};
</script>

<style lang="css" scoped>
#disqus_thread {
  max-width: 740px;
  margin: 0 auto;
  padding: 2rem 2.5rem;
}
</style>
