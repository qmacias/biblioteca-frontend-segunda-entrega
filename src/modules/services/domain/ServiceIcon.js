export default class ServiceIcon {
    /**
     * @param {string} value
     */
    constructor(value) {
        if (typeof value !== 'string') {
            throw new Error('Icon must be a string.');
        }

        this.value = value;
    }
}