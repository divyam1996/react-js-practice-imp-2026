class EventEmitter {

    constructor() {
        this.listener = {};
    }
    on(eventName, callback) {
        if (!this.listener[eventName]) {
            this.listener[eventName] = new Set();
        }

        this.listener[eventName].add(callback);


        // implementation
    }

    once(eventName, callback) {
        // implementation
        const wrapper = (payload) => {
            callback(payload);
            this.off(eventName, wrapper)
        }

        this.on(eventName, wrapper)
    }

    off(eventName, callback) {
        // implementation
        this.listener[eventName]?.delete(callback);
    }

    emit(eventName, ...args) {
        // implementation

        this.listener[eventName]?.forEach((cb) => cb(...args))


    }
}

module.exports = EventEmitter