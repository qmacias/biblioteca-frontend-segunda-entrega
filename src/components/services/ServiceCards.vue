<template>
  <ul class="flex col row">
    <ServiceCard
        v-if="services"

        v-for="({
          id,
          name,
          icon,
          description,
        }) in services" :key="id"
        :id="id"
        :name="name"
        :icon="icon"
        :description="description" />
  </ul>
</template>

<script>
import ServiceCard from "@/components/services/ServiceCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "ServiceCards",
  components: { ServiceCard },
  computed: {
    ...mapGetters(
        'serviceStore', ['getServices'],
    ),
    services() { return this.getServices; },
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