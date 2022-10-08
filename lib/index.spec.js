import {jest, expect} from '@jest/globals'
import {createErgoEmitter} from './index'

describe('Ergonomic event emitter', () => {
	describe('event emitter functionality', () => {
		const TEST_EVENT_KEY = 'test event'
		let instance
		let callback
		beforeEach(() => {
			instance = createErgoEmitter()
			callback = jest.fn()
		})
		it('should let us add an event listener for some event', () => {
			instance.on(TEST_EVENT_KEY, callback)
			expect(instance.events.get(TEST_EVENT_KEY)).toStrictEqual([callback])
		})

		it('should emit some event', () => {
			instance.on(TEST_EVENT_KEY, callback)
			instance.on(TEST_EVENT_KEY, callback)
			instance.emit(TEST_EVENT_KEY)
			expect(callback).toHaveBeenCalledTimes(2)
		})
	})

	describe('ergo functions', () => {
		const TEST_EVENT_KEY = 'test'
		let instance
		let callback
		beforeEach(() => {
			instance = createErgoEmitter()
			callback = jest.fn()
		})
		it('should let us add an event listener ergonomically', () => {
			instance.onTest(callback)
			expect(instance.events.get('test')).toStrictEqual([callback])
		})

		it('should emit some event after adding ergonomically', () => {
			instance.onTest(callback)
			expect(instance.events.get(TEST_EVENT_KEY)).toStrictEqual([callback])
		})

		it('should emit multiple events', () => {
			instance.onTest(callback)
			instance.onTest(callback)
			instance.emit(TEST_EVENT_KEY)
			expect(callback).toHaveBeenCalledTimes(2)
		})
	})

})
