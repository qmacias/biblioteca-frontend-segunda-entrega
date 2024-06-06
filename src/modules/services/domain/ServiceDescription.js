export default class ServiceDescription {
    /**
     * @param {string} value
     */
    constructor(value) {
        if (typeof value !== 'string') {
            throw new Error('Description must be a string.');
        }

        this.value = value;
    }
}