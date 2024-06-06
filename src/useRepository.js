import { ref, onMounted, inject } from 'vue';

function useRepository(repositorySpecification) {

    const items = ref([]);
    const repository = inject(repositorySpecification);

    onMounted(async () => {
        items.value = await repository.getAll();
    });

    return items;
}
/*
export function useSomeEntityRepository() {
    return useRepository('someEntityRepository');
}*/