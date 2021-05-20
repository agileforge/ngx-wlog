// noinspection DuplicatedCode

import {LoggerFactory} from './logger/logger-factory';
import {WlogConfig} from './config/wlog-config';
import {LogLevel} from './config/log-level.enum';
import {Appender} from 'ngx-wlog';

describe('NgxWlog', () => {

    let appendedData: { [appender: string ]: { level: LogLevel, data: any }[] } = {};

    class FakeAppender implements Appender {

        name: string;

        constructor(options: any) {
            this.name = options.name;
            appendedData[this.name] = [];
        }

        append(level: LogLevel, data: any): void {
            appendedData[this.name].push({level, data});
        }
    }

    const config = {
        targets: [
            {
                appender: FakeAppender,
                name: 'fake',
                options: {
                    name: 'fake-1'
                }
            }
        ],
        rules: [
            {
                name: '*',
                minLevel: LogLevel.Info,
                writeTo: 'fake'
            }
        ]
    } as WlogConfig;

    LoggerFactory.reload(config);

    beforeEach(() => {
        appendedData = {};
    });

    // describe('rules', () => {
    //
    //     it('should not log if rule is not active', () => {
    //         // Arrange
    //         config.rules[0].active = false;
    //         LoggerFactory.reload(config);
    //         const target = LoggerFactory.createLogger('SomeLog');
    //
    //         // Act
    //         target.info('SomeMessage');
    //
    //         // Assert
    //         expect(log.length).toBe(0);
    //     });
    //
    //     it('should not log if rule name filter not match', () => {
    //         // Arrange
    //         config.rules[0].name = 'unmatch regex';
    //         LoggerFactory.reload(config);
    //         const target = LoggerFactory.createLogger('SomeLog');
    //
    //         // Act
    //         target.info('SomeMessage');
    //
    //         // Assert
    //         expect(log.length).toBe(0);
    //     });
    //
    //     it('should not log if maxLevel is lower than log', () => {
    //         // Arrange
    //         config.rules[0].maxLevel = LogLevel.Debug;
    //         LoggerFactory.reload(config);
    //         const target = LoggerFactory.createLogger('SomeLog');
    //
    //         // Act
    //         target.info('SomeMessage');
    //
    //         // Assert
    //         expect(log.length).toBe(0);
    //     });
    //
    //     it('should not log if minLevel is greater than log', () => {
    //         // Arrange
    //         config.rules[0].minLevel = LogLevel.Warning;
    //         LoggerFactory.reload(config);
    //         const target = LoggerFactory.createLogger('SomeLog');
    //
    //         // Act
    //         target.info('SomeMessage');
    //
    //         // Assert
    //         expect(log.length).toBe(0);
    //     });
    //
    //     it('should not log if no writeTo is empty', () => {
    //         // Arrange
    //         config.rules[0].writeTo = '';
    //         LoggerFactory.reload(config);
    //         const target = LoggerFactory.createLogger('SomeLog');
    //
    //         // Act
    //         target.info('SomeMessage');
    //
    //         // Assert
    //         expect(log.length).toBe(0);
    //     });
    //
    // });

    describe('targets', () => {

        it('should use ', () => {
            // Arrange
            const target = LoggerFactory.createLogger('SomeLog');

            // Act
            target.info('Test target');

            // Assert
            expect(appendedData['fake-1'][0].level).toEqual(LogLevel.Info);
        });
    });
});
