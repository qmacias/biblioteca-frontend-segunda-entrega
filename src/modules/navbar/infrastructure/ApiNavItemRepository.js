import NavItem from "@/modules/navbar/domain/NavItem";

const url = `${process.env.VUE_APP_API_URL}/navbar.json`;

export default class ApiNavItemRepository {
    /**
     * @return {Promise<NavItem[]>}
     */
    async getAll() {
        const navbar = await fetch(url)
            .then((response) => response.json());

        return navbar.map((navItem) => NavItem.create(navItem));
    }
}