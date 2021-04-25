import {Logger} from './logger';
import {WlogConfigService} from '../config/wlog-config.service';
import {LogLevel} from '../config/log-level.enum';

export class ConsoleLogger implements Logger {

    constructor(private name: string) {
        this.contextName = name;
    }

    readonly contextName: string;

    debug(message: string, obj?: any): void {
        if (WlogConfigService.config.minLevel <= LogLevel.Debug) {
            console.log(`%c ${new Date().toISOString()} ${this.name} [DEBUG]`, 'color:white;background:green', message, obj);
        }
    }

    error(message: string, obj?: any): void {
        if (WlogConfigService.config.minLevel <= LogLevel.Error) {
            console.log(`%c ${new Date().toISOString()} ${this.name} [ERROR]`, 'color:white;background:red', message, obj);
        }
    }

    fatal(message: string, obj?: any): void {
        if (WlogConfigService.config.minLevel <= LogLevel.Fatal) {
            console.log(`%c ${new Date().toISOString()} ${this.name} [FATAL]`, 'color:red;background:yellow', message, obj);
        }
    }

    info(message: string, obj?: any): void {
        if (WlogConfigService.config.minLevel <= LogLevel.Info) {
            console.log(`%c ${new Date().toISOString()} ${this.name} [INFO ]`, 'color:white;background:blue', message, obj);
        }
    }

    trace(message: string, obj?: any): void {
        if (WlogConfigService.config.minLevel <= LogLevel.Trace) {
            console.log(`%c  ${new Date().toISOString()} ${this.name} [TRACE]`, 'color:white;background:purple', message, obj);
        }
    }

    warn(message: string, obj?: any): void {
        if (WlogConfigService.config.minLevel <= LogLevel.Warning) {
            console.log(`%c  ${new Date().toISOString()} ${this.name} [WARN ]`, 'color:white;background:orange', message, obj);
        }
    }

}
