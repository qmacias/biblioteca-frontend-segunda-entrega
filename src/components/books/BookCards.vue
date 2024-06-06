<template>
  <ul class="flex col row">
    <BookCard
        v-for="({
              id,
              img,
              title,
              author,
            }) in books"
        :key="id"
        :img="img"
        :title="title"
        :author="author" />
  </ul>
</template>

<script>
import BookCard from "@/components/books/BookCard.vue";

export default {
  name: "BookCards",
  components: {
    BookCard,
  },
  data() {
    const books = [];

    return {
      books: books,
    };
  },
  mounted() {
    this.getBooks();
  },
  methods: {
    getBooks() {
      fetch(`${process.env.VUE_APP_API_URL}/books.json`)
          .then((res) => res.json()).then((data) => this.books = data)
          .catch((error) => console.error('Error al pedir los libros:', error));
    },
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