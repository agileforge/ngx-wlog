import {Injectable} from '@angular/core';
import {WlogConfig} from './wlog-config';
import {LogLevel} from './log-level.enum';

@Injectable({
    providedIn: 'root'
})
export class WlogConfigService {

    static config: WlogConfig = { minLevel: LogLevel.Info } as WlogConfig;

    /**
     * Gets the configuration of wlog.
     */
    get config(): WlogConfig {
        return WlogConfigService.config;
    }

    constructor() {
    }

}
