<template>
  <main class="flex col">
    <section class="flex col">
      <MobileHeader
          v-if="isMobileView"
          v-bind="getHeader" />

      <DesktopHeader
          v-else
          v-bind="getHeader" />

      <ServiceCards />
    </section>
  </main>
</template>

<script>
import useWindowResize from "@/useWindowsResize";
import { mapGetters } from "vuex";

import ServiceCards from "@/components/services/ServiceCards.vue";
import MobileHeader from "@/components/MobileHeader.vue";
import DesktopHeader from "@/components/DesktopHeader.vue";

export default {
  name: "SearchServicesView",
  components: {
    ServiceCards,
    MobileHeader,
    DesktopHeader,
  },
  setup() {
    const {
      isMobileView,
    } = useWindowResize(1600);

    return { isMobileView };
  },
  computed: {
    ...mapGetters('serviceHeaderStore', ['getHeader']),
  },
};
</script>