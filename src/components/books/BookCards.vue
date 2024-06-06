<template>
  <ul class="flex col row">
    <BookCard
        v-if="books"
        v-for="book in books" :key="book.id"

        :id="book.id"
        :img="book.img"
        :title="book.title"
        :author="book.author" />
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