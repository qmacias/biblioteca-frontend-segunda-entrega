import NavItemId from "@/modules/navbar/domain/NavItemId";
import NavItemPath from "@/modules/navbar/domain/NavItemPath";
import NavItemLabel from "@/modules/navbar/domain/NavItemLabel";

export default class NavItem {
    /**
     * @param {NavItemId} id
     * @param {NavItemPath} path
     * @param {NavItemLabel} label
     */
    constructor(
        id,
        path,
        label,
    ) {
        this.id = id;
        this.path = path;
        this.label = label;
    }

    /**
     * @param {number} id
     * @param {string} path
     * @param {string} label
     */
    static create({ id, path, label}) {
        return new NavItem(new NavItemId(id), new NavItemPath(path), new NavItemLabel(label));
    }

    idValue() {
        return this.id.value;
    }

    pathValue() {
        return this.path.value;
    }

    labelValue() {
        return this.label.value;
    }
}