import {ConsoleLogger} from './console-logger';
import {Logger} from './logger';
export class LoggerFactory {

    /**
     * Creates a logger with a specific context name.
     * @param contextName The context name of logger. If no name provided, try to get the declaring class name or the calling function.
     */
    public static createLogger(contextName: string): Logger {
        return new ConsoleLogger(contextName);
    }

}


