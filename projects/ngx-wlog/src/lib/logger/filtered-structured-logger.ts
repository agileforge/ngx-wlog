import {StructuredLogger} from './structured-logger';
import {LogLevel} from '../config/log-level.enum';

/**
 * Represents a structured logger that can be filtered by the context name.
 */
export class FilteredStructuredLogger implements StructuredLogger {

    private readonly regExpContextFilter: RegExp;

    constructor(
        private logger: StructuredLogger,
        contextFilter: string | RegExp,
        private minLevel: LogLevel,
        private maxLevel: LogLevel) {
        if (contextFilter === '*') {
            // Make * (all) RegExp compliant...
            contextFilter = '.*';
        }
        this.regExpContextFilter = contextFilter as RegExp ?? new RegExp(contextFilter);
    }

    private loggerMatchFilter(level: LogLevel, contextName: string): boolean {
        return this.minLevel >= level && this.maxLevel <= level && !!contextName.match(this.regExpContextFilter);
    }

    log(level: LogLevel, data: object): void {
        const namedData = data as { contextName: string } ?? {contextName: 'UnknownContextName'};
        if (this.loggerMatchFilter(level, namedData.contextName)) {
            this.logger.log(level, data);
        }
    }

}
