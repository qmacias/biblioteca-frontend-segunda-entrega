import { createStore } from 'vuex';

import bookStore from "@/store/books/bookStore";
import heroStore from "@/store/hero/heroStore";
import navbarStore from "@/store/navbar/navbarStore";
import serviceStore from "@/store/services/serviceStore";

export default createStore({
  modules: { bookStore, heroStore, navbarStore, serviceStore },
});
