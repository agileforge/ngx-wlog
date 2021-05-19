import {LogLevel} from '../config/log-level.enum';
import {Appender} from './appender';
import {ConsoleWrapper} from './console-wrapper';

export class ConsoleAppender implements Appender {

    constructor(private options: any, private consoleWrapper: ConsoleWrapper = new ConsoleWrapper()) {
    }

    append(level: LogLevel, data: any): void {
        switch (level) {
            case LogLevel.Warning:
                this.consoleWrapper.warn(...Object.values(data));
                break;
            case LogLevel.Error:
            case LogLevel.Fatal:
                this.consoleWrapper.error(...Object.values(data));
                break;
            default:
                this.consoleWrapper.log(...Object.values(data));
                break;
        }
    }

}
