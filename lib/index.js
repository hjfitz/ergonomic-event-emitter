
class EventEmitter {
	events = new Map()

	emit(event, data) {
		const callbacks = this.events.get(event) ?? []
		callbacks.forEach(cb => cb(data))
	}

	on(event, cb) {
		const callbacks = this.events.get(event) ?? []
		this.events.set(event, [...callbacks, cb])
	}
}

function normaliseEventName(word) {
	const withoutOn = word.replace(/^on/, '')
	return withoutOn[0].toLowerCase() + withoutOn.substring(1)
}

const proxyHandler = {
	get(target, prop) {
		if (prop.startsWith('on') && prop !== 'on') {
			const eventName = normaliseEventName(prop)
			return (cb) => target.on(eventName, cb)
		}
		return Reflect.get(...arguments)
	}
}

export function createErgoEmitter() {
	const emitter = new EventEmitter()
	return new Proxy(emitter, proxyHandler)
}

