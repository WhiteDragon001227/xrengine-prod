// Patch XHR for FileLoader in threejs
import { XMLHttpRequest } from 'xmlhttprequest'
import Worker from 'web-worker'
import path from 'path'
import { initializeEngine } from '@xrengine/engine/src/initializeEngine'
import { NetworkSchema } from '@xrengine/engine/src/networking/interfaces/NetworkSchema'
import config from '@xrengine/server-core/src/appconfig'
import { SocketWebRTCServerTransport } from './SocketWebRTCServerTransport'
import { EngineSystemPresets, InitializeOptions } from '@xrengine/engine/src/initializationOptions'
;(globalThis as any).XMLHttpRequest = XMLHttpRequest
;(globalThis as any).self = globalThis

const currentPath = (process.platform === 'win32' ? 'file:///' : '') + path.dirname(__filename)

export class WebRTCGameServer {
  static instance: WebRTCGameServer = new WebRTCGameServer()

  static options: InitializeOptions = {
    type: EngineSystemPresets.SERVER,
    networking: {
      schema: {
        transport: SocketWebRTCServerTransport
      } as NetworkSchema
    },
    publicPath: config.client.url,
    physics: {
      physxWorker: () => new Worker(currentPath + '/physx/loadPhysXNode.ts')
    },
    systems: []
  }

  initialize(app: any) {
    ;(WebRTCGameServer.options.networking as any).app = app
    return initializeEngine(WebRTCGameServer.options)
  }
}
