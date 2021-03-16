/*** UNDER NO CIRCUMSTANCES DO NOT EDIT THIS FILE. THIS FILE IS COPIED                                    ***/
/*** FROM OSS UI. ANY CHANGES TO BE MADE IN KUBEVIOUS OSS UI.                                             ***/
/*** SOURCE: ../ui.git/src/src/services/WebSocketService.ts                                               ***/

import _ from 'the-lodash'
import { IWebSocketService } from '@kubevious/ui-middleware';
import { WebSocketClient, WebSocketTarget, WebSocketSubscription, WebSocketScope } from '@kubevious/websocket-client';

export class WebSocketService implements IWebSocketService
{
    private _socket: WebSocketClient;

    constructor()
    {
        this._socket = new WebSocketClient({
            path: '/socket'
        });
        this._socket.run();
    }

    close()
    {
        this._socket.close();
    }

    subscribe(target: WebSocketTarget, cb: (value: any) => any) : WebSocketSubscription
    {
        return this._socket.subscribe(target, value => {
            cb(value);
        });
    }

    scope(cb: (value: any, target: WebSocketTarget) => any) : WebSocketScope
    {
        return this._socket.scope({}, cb);
    }

    updateContext(updatedContext: WebSocketTarget): void
    {
        
    }
}