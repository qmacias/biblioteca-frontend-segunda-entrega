<template>
  <main class="flex col">
    <section class="flex col">
      <MobileHeader
          v-if="isMobileView"
          title="Nuestros Servicios"
          mainText="Recomendaciones a tu medida y acceso a recursos digitales exclusivos."
          additionalText="Ofrecemos una amplia gama de servicios para garantizar tu satisfacción."
      />

      <DesktopHeader
          v-else
          title="Nuestros Servicios"
          mainText="Recomendaciones a tu medida y acceso a recursos digitales exclusivos."
          additionalText="Ofrecemos una amplia gama de servicios para garantizar tu satisfacción."
      />

      <ServiceCards />
    </section>
  </main>
</template>

<script>
import useWindowResize from "@/useWindowsResize";

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

    return {
      isMobileView,
    };
  },
};
</script>