<template>
  <div class="page-layout">
    <PageNavbar v-if="withNavbar" />
    <slot />
    <PageFooter v-if="withFooter" />
  </div>
</template>

<script>
import PageNavbar from "@/components/PageNavbar.vue";
import PageFooter from "@/components/PageFooter.vue";

export default {
  components: { PageFooter, PageNavbar },
  props: {
    withNavbar: {
      type: Boolean,
      default: true,
    },
    withFooter: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
