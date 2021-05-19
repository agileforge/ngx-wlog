import {LogLevel} from '../config/log-level.enum';

export interface Appender {

    /**
     * Appends a log for the specified level.
     * @param level The log level.
     * @param data The data to log where each properties should be written in th log.
     */
    append(level: LogLevel, data: any): void;

}

