import Service from "@/modules/services/domain/Service";


const url = `${process.env.VUE_APP_API_URL}/services.json`;

export default class ApiServiceRepository {
    /**
     * @return {Promise<Service[]>}
     */
    async getAll() {
        const services = await fetch(url)
            .then((response) => response.json());

        return services.map((service) => Service.create(service));
    }
}