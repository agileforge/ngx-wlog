import {StructuredLogger} from './structured-logger';
import {Appender} from '../appenders/appender';
import {Type} from '@angular/core';
import {LogLevel} from '../config/log-level.enum';

/**
 * Represents a structured logger that writes logs to an appender.
 */
export class StructuredLoggerWriter implements StructuredLogger {

    private appender: Appender;

    constructor(appenderType: Type<Appender>, options: { [p: string]: string } | undefined) {
        this.appender = new appenderType(options);
    }

    log(level: LogLevel, data: object): void {
        this.appender.append(level, data);
    }

}
