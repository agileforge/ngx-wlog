import {Logger} from './logger';

/**
 * Represents a logger that is linked to an ID. This permit to replace the real logger
 * while reconfiguring logging keeping instances in application usages.
 */
export class LinkedLogger implements Logger {

    static loggers = new Map<string, Logger>();

    private readonly internalLoggerId: string;

    constructor(loggerId: string, logger: Logger) {
        this.internalLoggerId = loggerId;
        LinkedLogger.loggers.set(loggerId, logger);
    }

    /**
     * Gets or sets the stored logger.
     */
    get logger(): Logger {
        const logger = LinkedLogger.loggers.get(this.internalLoggerId);
        if (logger === undefined) {
            throw new Error(`Logger with id '${this.internalLoggerId}' doesn't exists`);
        }
        return logger;
    }

    set logger(logger: Logger) {
        LinkedLogger.loggers.set(this.internalLoggerId, logger);
    }

    /**
     * Gets the unique logger ID that is linked to an instantiated logger.
     */
    get loggerId(): string {
        return this.internalLoggerId;
    }

    debug(message: string, ...optionalParams: any[]): void {
        this.logger.debug(message, ...optionalParams);
    }

    error(message: string, ...optionalParams: any[]): void {
        this.logger.error(message, ...optionalParams);
    }

    fatal(message: string, ...optionalParams: any[]): void {
        this.logger.fatal(message, ...optionalParams);
    }

    info(message: string, ...optionalParams: any[]): void {
        this.logger.info(message, ...optionalParams);
    }

    trace(message: string, ...optionalParams: any[]): void {
        this.logger.trace(message, ...optionalParams);
    }

    warn(message: string, ...optionalParams: any[]): void {
        this.logger.warn(message, ...optionalParams);
    }

}
