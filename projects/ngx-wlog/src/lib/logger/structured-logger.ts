import {LogLevel} from '../config/log-level.enum';

export interface StructuredLogger {

    /**
     * Log data in the specified level.
     * @param level The log level where log will be written.
     * @param data Object that contains all data to log.
     */
    log(level: LogLevel, data: object): void;

}
