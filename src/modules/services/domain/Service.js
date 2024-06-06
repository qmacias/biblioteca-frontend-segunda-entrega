import ServiceId from "@/modules/services/domain/ServiceId";
import ServiceName from "@/modules/services/domain/ServiceName";
import ServiceIcon from "@/modules/services/domain/ServiceIcon";
import ServiceDescription from "@/modules/services/domain/ServiceDescription";

export default class Service {
    /**
     * @param {ServiceId} id
     * @param {ServiceName} name
     * @param {ServiceIcon} icon
     * @param {ServiceDescription} description
     */
    constructor(
        id,
        name,
        icon,
        description,
    ) {
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.description = description;
    }

    /**
     * @param {number} id
     * @param {string} name
     * @param {string} icon
     * @param {string} description
     */
    static create({
        id,
        name,
        icon,
        description,
    }) {
        return new Service(
            new ServiceId(id),
            new ServiceName(name),
            new ServiceIcon(icon),
            new ServiceDescription(description),
        );
    }

    idValue() {
        return this.id.value;
    }

    nameValue() {
        return this.name.value;
    }

    iconValue() {
        return this.icon.value;
    }

    descriptionValue() {
        return this.description.value;
    }
}