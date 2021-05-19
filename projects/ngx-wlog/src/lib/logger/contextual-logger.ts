import {Logger} from './logger';
import {StructuredLogger} from './structured-logger';
import {LogLevel} from '../config/log-level.enum';

/**
 * Represents a logger that is for a named context.
 */
export class ContextualLogger implements Logger {

    /**
     * Gets the context name of logger.
     */
    readonly contextName: string;

    /**
     * Creates new ContextualLogger instance.
     * @param contextName The context name of logger.
     * @param logger The logger where log will be written.
     */
    constructor(contextName: string, private logger: StructuredLogger) {
        this.contextName = contextName;
    }

    private logWithContextName(level: LogLevel, message: string, optionalParams: any[]): void {
        this.logger.log(
            level,
            {
                contextName: this.contextName,
                message,
                optionalParams
            });
    }

    debug(message: string, ...optionalParams: any[]): void {
        this.logWithContextName(LogLevel.Debug, message, optionalParams);
    }

    error(message: string, ...optionalParams: any[]): void {
        this.logWithContextName(LogLevel.Error, message, optionalParams);
    }

    fatal(message: string, ...optionalParams: any[]): void {
        this.logWithContextName(LogLevel.Fatal, message, optionalParams);
    }

    info(message: string, ...optionalParams: any[]): void {
        this.logWithContextName(LogLevel.Info, message, optionalParams);
    }

    trace(message: string, ...optionalParams: any[]): void {
        this.logWithContextName(LogLevel.Trace, message, optionalParams);
    }

    warn(message: string, ...optionalParams: any[]): void {
        this.logWithContextName(LogLevel.Warning, message, optionalParams);
    }

}
