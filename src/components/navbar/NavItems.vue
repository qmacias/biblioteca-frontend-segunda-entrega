<template>
  <header class="bg1 border bd3">
    <nav>
      <ul class="flex col row">
        <NavItem
            v-if="navbar"
            v-for="navItem in navbar" :key="navItem.idValue()"

            :id="navItem.idValue()"
            :path="navItem.pathValue()"
            :label="navItem.labelValue()" />
      </ul>
    </nav>
  </header>
</template>

<script>
import { useNavItemRepository } from "@/useRepository";
import NavItem from "@/components/navbar/NavItem.vue";

export default {
  name: "NavItems",
  components: { NavItem },
  setup() {
    const navbar = useNavItemRepository();

    return { navbar };
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