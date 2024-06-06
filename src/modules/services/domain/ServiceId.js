export default class ServiceId {
    /**
     * @param {number} value
     */
    constructor(value) {
        if (typeof value !== 'number') {
            throw new Error('Id must be a number.');
        }

        this.value = value;
    }
}