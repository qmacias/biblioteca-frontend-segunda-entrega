<template>
  <ul class="flex col row">
    <BookCard
        v-if="books"

        v-for="({
          id,
          img,
          title,
          author,
        }) in books" :key="id"
        :id="id"
        :img="img"
        :title="title"
        :author="author" />
  </ul>
</template>

<script>
import BookCard from "@/components/books/BookCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "BookCards",
  components: { BookCard },
  computed: {
    ...mapGetters(
        'bookStore', ['getBooks'],
    ),
    books() { return this.getBooks; },
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
  }
}
</style>