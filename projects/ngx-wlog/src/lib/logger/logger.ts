import {LogLevel} from '../config/log-level.enum';

export interface Logger {

    /**
     * Log in the specified level.
     * @param level The level of log.
     * @param message The log message.
     * @param optionalParams Data related to log.
     */
    log(level: LogLevel, message: string, ...optionalParams: any[]): void;

    /**
     * Log in the trace level.
     * @param message The log message.
     * @param optionalParams Data related to log.
     */
    trace(message: string, ...optionalParams: any[]): void;

    /**
     * Log in the debug level.
     * @param message The log message.
     * @param optionalParams Data related to log.
     */
    debug(message: string, ...optionalParams: any[]): void;

    /**
     * Log in the info level.
     * @param message The log message.
     * @param optionalParams Data related to log.
     */
    info(message: string, ...optionalParams: any[]): void;

    /**
     * Log in the warn level.
     * @param message The log message.
     * @param optionalParams Data related to log.
     */
    warn(message: string, ...optionalParams: any[]): void;

    /**
     * Log in the error level.
     * @param message The log message.
     * @param optionalParams Data related to log.
     */
    error(message: string, ...optionalParams: any[]): void;

    /**
     * Log in the fatal level.
     * @param message The log message.
     * @param optionalParams Data related to log.
     */
    fatal(message: string, ...optionalParams: any[]): void;

}

