import {LogLevel} from '../config/log-level.enum';
import {Appender} from './appender';
import {ConsoleWrapper} from './console-wrapper';

export class ColoredConsoleAppender implements Appender {

    constructor(private options: any, private readonly consoleWrapper: ConsoleWrapper = new ConsoleWrapper()) {
        this.consoleWrapper = options?.consoleWrapper ?? this.consoleWrapper;
    }

    append(level: LogLevel, data: any): void {
        const date = new Date().toISOString();
        const contextName = data.contextName ?? 'UnknownContextName';

        switch (level) {
            case LogLevel.Trace:
                this.consoleWrapper.log(`%c ${date} ${contextName} [TRACE]`, 'color:white;background:purple',
                    data.message, ...data.optionalParams ?? []);
                break;
            case LogLevel.Debug:
                this.consoleWrapper.log(`%c ${date} ${contextName} [DEBUG]`, 'color:white;background:green',
                    data.message, ...data.optionalParams ?? []);
                break;
            case LogLevel.Info:
                this.consoleWrapper.log(`%c ${date} ${contextName} [INFO]`, 'color:white;background:blue',
                    data.message, ...data.optionalParams ?? []);
                break;
            case LogLevel.Warning:
                this.consoleWrapper.log(`%c ${date} ${contextName} [WARN]`, 'color:white;background:orange',
                    data.message, ...data.optionalParams ?? []);
                break;
            case LogLevel.Error:
                this.consoleWrapper.log(`%c ${date} ${contextName} [ERROR]`, 'color:white;background:red',
                    data.message, ...data.optionalParams ?? []);
                break;
            case LogLevel.Fatal:
                this.consoleWrapper.log(`%c ${date} ${contextName} [FATAL]`, 'color:red;background:yellow',
                    data.message, ...data.optionalParams ?? []);
                break;
        }
    }

}
