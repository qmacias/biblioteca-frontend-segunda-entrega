<template>
  <header class="bg1 border bd3">
    <nav>
      <ul class="flex col row">
        <NavbarItem
            v-if="navbar"
            v-for="navbarItem in navbar" :key="navbarItem.id"

            :id="navbarItem.id"
            :path="navbarItem.path"
            :label="navbarItem.label" />
      </ul>
    </nav>
  </header>
</template>

<script>
import NavbarItem from "@/components/navbar/NavbarItem.vue";
import { mapGetters } from "vuex";

export default {
  name: "NavbarItems",
  components: { NavbarItem },
  computed: {
    ...mapGetters(
        'navbarStore', ['getNavbar'],
    ),
    navbar() {
      return this.getNavbar;
    },
  },
};
</script>

<style scoped>
header {
  margin: 9px 7px 6px 7px;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 2px 15px -3px rgba(0, 0, 0, 0.1), 2px 0 15px -3px rgba(0, 0, 0, 0.2);
}
</style>