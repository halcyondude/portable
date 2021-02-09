/*** UNDER NO CIRCUMSTANCES DO NOT EDIT THIS FILE. THIS FILE IS COPIED                                    ***/
/*** FROM OSS UI. ANY CHANGES TO BE MADE IN KUBEVIOUS OSS UI.                                             ***/
/*** SOURCE: ../backend.git/src/registry/registry.ts                                                      ***/

import _ from 'the-lodash';
import { Promise } from 'the-promise';
import { ILogger } from 'the-logger' ;

import { RegistryState } from '@kubevious/helpers/dist/registry-state';
import { RegistryBundleState } from '@kubevious/helpers/dist/registry-bundle-state';

import { Context } from '../context';

export class Registry
{
    private _context : Context;
    private _logger : ILogger;

    private _currentState : RegistryBundleState;

    constructor(context : Context)
    {
        this._context = context;
        this._logger = context.logger.sublogger("Registry");

        this._currentState = new RegistryState({ date: new Date(), items: []}).buildBundle();
    }

    get logger() {
        return this._logger;
    }

    getCurrentState() : RegistryBundleState
    {
        return this._currentState;
    }

    accept(bundle : RegistryBundleState)
    {
        this._currentState = bundle;
    }

}