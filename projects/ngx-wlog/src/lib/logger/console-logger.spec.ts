import {ConsoleLogger} from './console-logger';
import {WlogConfigService} from '../config/wlog-config.service';
import {WlogConfig} from '../config/wlog-config';
import {LogLevel} from '../config/log-level.enum';

describe('ConsoleLogger', () => {

    const oldLogFunc = console.log;
    let consoleOutputs: string[] = [];
    let target: ConsoleLogger;

    beforeEach(() => {
        WlogConfigService.config = {minLevel: LogLevel.Trace} as WlogConfig;
        console.log = (...params: any[]): void => {
            consoleOutputs.push(params.reduce((result, current) => result + current || ''), '');
        };
        target = new ConsoleLogger('SomeName');
    });

    afterEach(() => {
        console.log = oldLogFunc;
        consoleOutputs = [];
    });

    it('should create an instance', () => {
        expect(new ConsoleLogger('SomeContextName')).toBeTruthy();
    });

    it('should create an instance with context name', () => {
        expect(new ConsoleLogger('SomeContextName').contextName).toBe('SomeContextName');
    });

    describe('trace', () => {

        it('should log to console', () => {
            // Act
            target.trace('SomeMessage');

            // Assert
            expect(consoleOutputs[0]).toContain('SomeMessage');
        });

        it('should not log to console if config minLevel is higher to Trace', () => {
            // Arrange
            WlogConfigService.config.minLevel = LogLevel.Debug;

            // Act
            target.trace('SomeMessage');

            // Assert
            expect(consoleOutputs.length).toBe(0);
        });

    });

    describe('debug', () => {

        it('should log to console', () => {
            // Act
            target.debug('SomeMessage');

            // Assert
            expect(consoleOutputs[0]).toContain('SomeMessage');
        });

        it('should not log to console if config minLevel is higher to Debug', () => {
            // Arrange
            WlogConfigService.config.minLevel = LogLevel.Info;

            // Act
            target.debug('SomeMessage');

            // Assert
            expect(consoleOutputs.length).toBe(0);
        });

    });

    describe('info', () => {

        it('should log to console', () => {
            // Act
            target.info('SomeMessage');

            // Assert
            expect(consoleOutputs[0]).toContain('SomeMessage');
        });

        it('should not log to console if config minLevel is higher to Info', () => {
            // Arrange
            WlogConfigService.config.minLevel = LogLevel.Warning;

            // Act
            target.info('SomeMessage');

            // Assert
            expect(consoleOutputs.length).toBe(0);
        });

    });

    describe('warn', () => {

        it('should log to console', () => {
            // Act
            target.warn('SomeMessage');

            // Assert
            expect(consoleOutputs[0]).toContain('SomeMessage');
        });

        it('should not log to console if config minLevel is higher to Warn', () => {
            // Arrange
            WlogConfigService.config.minLevel = LogLevel.Error;

            // Act
            target.warn('SomeMessage');

            // Assert
            expect(consoleOutputs.length).toBe(0);
        });

    });

    describe('error', () => {

        it('should log to console', () => {
            // Act
            target.error('SomeMessage');

            // Assert
            expect(consoleOutputs[0]).toContain('SomeMessage');
        });

        it('should not log to console if config minLevel is higher to Error', () => {
            // Arrange
            WlogConfigService.config.minLevel = LogLevel.Fatal;

            // Act
            target.error('SomeMessage');

            // Assert
            expect(consoleOutputs.length).toBe(0);
        });

    });

    describe('fatal', () => {

        it('should log to console', () => {
            // Act
            target.fatal('SomeMessage');

            // Assert
            expect(consoleOutputs[0]).toContain('SomeMessage');
        });

        it('should not log to console if config minLevel is higher to Fatal', () => {
            // Arrange
            WlogConfigService.config.minLevel = LogLevel.Off;

            // Act
            target.fatal('SomeMessage');

            // Assert
            expect(consoleOutputs.length).toBe(0);
        });

    });

});
