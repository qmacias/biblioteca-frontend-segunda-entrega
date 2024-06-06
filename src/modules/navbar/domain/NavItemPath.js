export default class NavItemPath {
    /**
     * @param {string} value
     */
    constructor(value) {
        if (typeof value !== 'string') {
            throw new Error('Path must be a string.');
        }

        this.value = value;
    }
}