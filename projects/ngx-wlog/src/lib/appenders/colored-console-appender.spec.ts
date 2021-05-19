import {ColoredConsoleAppender} from './colored-console-appender';
import {LogLevel} from '../config/log-level.enum';
import {ConsoleWrapper} from './console-wrapper';

describe('ColoredConsoleAppender', () => {

    let consoleWrapper: ConsoleWrapper;
    let target: ColoredConsoleAppender;

    let trace: any[];
    let debug: any[];
    let log: any[];
    let warn: any[];
    let error: any[];

    beforeEach(() => {
        trace = [];
        debug = [];
        log = [];
        warn = [];
        error = [];

        consoleWrapper = {} as ConsoleWrapper;
        consoleWrapper.trace = (...data: any[]) => trace.push(data);
        consoleWrapper.debug = (...data: any[]) => debug.push(data);
        consoleWrapper.log = (...data: any[]) => log.push(data);
        consoleWrapper.warn = (...data: any[]) => warn.push(data);
        consoleWrapper.error = (...data: any[]) => error.push(data);

        target = new ColoredConsoleAppender({}, consoleWrapper);
    });

    describe('append', () => {

        it('should only use console.log', () => {
            // Arrange
            const data = {
                contextName: 'SomeContextName',
                message: 'Some log message'
            };

            // Act
            target.append(LogLevel.Trace, data);
            target.append(LogLevel.Debug, data);
            target.append(LogLevel.Info, data);
            target.append(LogLevel.Warning, data);
            target.append(LogLevel.Error, data);
            target.append(LogLevel.Fatal, data);

            // Assert
            expect(trace.length).toBe(0);
            expect(debug.length).toBe(0);
            expect(log.length).toBe(6);
            expect(warn.length).toBe(0);
            expect(error.length).toBe(0);
        });
    });

});
