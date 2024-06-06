export default class ServiceName {
    /**
     * @param {string} value
     */
    constructor(value) {
        if (typeof value !== 'string') {
            throw new Error('Name must be a string.');
        }

        this.value = value;
    }
}