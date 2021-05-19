import {LogLevel} from '../config/log-level.enum';
import {Appender} from './appender';

export class ConsoleAppender implements Appender {

    constructor(private options: any) {
    }

    append(level: LogLevel, data: any): void {
        switch (level) {
            case LogLevel.Warning:
                console.warn(...Object.values(data));
                break;
            case LogLevel.Error:
            case LogLevel.Fatal:
                console.error(...Object.values(data));
                break;
            default:
                console.log(...Object.values(data));
                break;
        }
    }

}
