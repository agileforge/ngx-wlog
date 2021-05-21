import {LogLevel} from '../config/log-level.enum';
import {Appender} from './appender';
import {ConsoleWrapper} from './console-wrapper';

export class ConsoleAppender implements Appender {

    constructor(private options: any, private readonly consoleWrapper: ConsoleWrapper = new ConsoleWrapper()) {
        this.consoleWrapper = options?.consoleWrapper ?? this.consoleWrapper;
    }

    append(level: LogLevel, data: any): void {
        switch (level) {
            case LogLevel.Warning:
                this.consoleWrapper.warn(data.message, ...data.optionalParams ?? []);
                break;
            case LogLevel.Error:
            case LogLevel.Fatal:
                this.consoleWrapper.error(data.message, ...data.optionalParams ?? []);
                break;
            default:
                this.consoleWrapper.log(data.message, ...data.optionalParams ?? []);
                break;
        }
    }

}
