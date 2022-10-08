import {createErgoEmitter} from './index.js'

const emitter = createErgoEmitter()

console.log(emitter)

emitter.onThing(() => console.log('oi'))

emitter.emit('thing')
