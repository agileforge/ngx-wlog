import {LogLevel} from '../config/log-level.enum';
import {Appender} from './appender';

export class ColoredConsoleAppender implements Appender {

    constructor(private options: any) {
    }

    append(level: LogLevel, data: any): void {
        const date = new Date().toISOString();
        const contextName = data.contextName ?? 'UnknownContextName';
        delete data.contextName;

        switch (level) {
            case LogLevel.Trace:
                console.log(`%c ${date} ${contextName} [TRACE]`, 'color:white;background:purple', ...Object.values(data));
                break;
            case LogLevel.Debug:
                console.log(`%c ${date} ${contextName} [DEBUG]`, 'color:white;background:green', ...Object.values(data));
                break;
            case LogLevel.Info:
                console.log(`%c ${date} ${contextName} [INFO]`, 'color:white;background:blue', ...Object.values(data));
                break;
            case LogLevel.Warning:
                console.log(`%c ${date} ${contextName} [WARN]`, 'color:white;background:orange', ...Object.values(data));
                break;
            case LogLevel.Error:
                console.log(`%c ${date} ${contextName} [ERROR]`, 'color:white;background:orange', ...Object.values(data));
                break;
            case LogLevel.Fatal:
                console.log(`%c ${date} ${contextName} [FATAL]`, 'color:red;background:yellow', ...Object.values(data));
                break;
        }
    }

}
