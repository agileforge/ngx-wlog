import {LogLevel} from '../config/log-level.enum';
import {Appender} from './appender';
import {ConsoleWrapper} from './console-wrapper';

export class ColoredConsoleAppender implements Appender {

    constructor(private options: any, private consoleWrapper: ConsoleWrapper = new ConsoleWrapper()) {
    }

    append(level: LogLevel, data: any): void {
        const date = new Date().toISOString();
        const contextName = data.contextName ?? 'UnknownContextName';
        delete data.contextName;

        switch (level) {
            case LogLevel.Trace:
                this.consoleWrapper.log(`%c ${date} ${contextName} [TRACE]`, 'color:white;background:purple', ...Object.values(data));
                break;
            case LogLevel.Debug:
                this.consoleWrapper.log(`%c ${date} ${contextName} [DEBUG]`, 'color:white;background:green', ...Object.values(data));
                break;
            case LogLevel.Info:
                this.consoleWrapper.log(`%c ${date} ${contextName} [INFO]`, 'color:white;background:blue', ...Object.values(data));
                break;
            case LogLevel.Warning:
                this.consoleWrapper.log(`%c ${date} ${contextName} [WARN]`, 'color:white;background:orange', ...Object.values(data));
                break;
            case LogLevel.Error:
                this.consoleWrapper.log(`%c ${date} ${contextName} [ERROR]`, 'color:white;background:red', ...Object.values(data));
                break;
            case LogLevel.Fatal:
                this.consoleWrapper.log(`%c ${date} ${contextName} [FATAL]`, 'color:red;background:yellow', ...Object.values(data));
                break;
        }
    }

}
