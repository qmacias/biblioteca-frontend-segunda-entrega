<template>
  <ul class="flex col row">
    <ServiceCard
        v-if="services"
        v-for="service in services" :key="service.idValue()"

        :id="service.idValue()"
        :name="service.nameValue()"
        :icon="service.iconValue()"
        :description="service.descriptionValue()" />
  </ul>
</template>

<script>
import { useServiceRepository } from "@/useRepository";
import ServiceCard from "@/components/services/ServiceCard.vue";

export default {
  name: "ServiceCards",
  components: { ServiceCard },
  setup() {
    const services = useServiceRepository();

    return { services };
  },
};
</script>

<style scoped>
/**
 * Responsive
*/

@media (min-width: 1600px) {
  ul {
    order: 1;
    height: 77.1vh;
  }
}
</style>