import {StructuredLogger} from './structured-logger';
import {LogLevel} from '../config/log-level.enum';

/**
 * Represents a logger that log on several other loggers.
 */
export class MultiLogger implements StructuredLogger {

    private loggers: StructuredLogger[] = [];

    /**
     * Adds one or several loggers to the list of loggers.
     * @param loggers The loggers to add to the list.
     */
    add(...loggers: StructuredLogger[]): void {
        this.loggers.push(...loggers);
    }

    /**
     * Replace all loggers canonically.
     * @param loggers The loggers to use.
     */
    replace(...loggers: StructuredLogger[]): void {
        this.loggers = loggers;
    }

    /**
     * Remove all items in the logger list.
     */
    clear(): void {
        this.loggers = [];
    }

    log(level: LogLevel, data: object): void {
        this.loggers.forEach(logger => logger.log(level, data));
    }

}
