export default class NavItemLabel {
    /**
     * @param {string} value
     */
    constructor(value) {
        if (typeof value !== 'string') {
            throw new Error('Label must be a string.');
        }

        this.value = value;
    }
}