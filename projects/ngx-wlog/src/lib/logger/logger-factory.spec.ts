import { LoggerFactory } from './logger-factory';
import {ContextualLogger} from './contextual-logger';

describe('LoggerFactory', () => {

    describe('createLogger', () => {

        it('should create logger with specified context name', () => {
            // Act
            const logger = LoggerFactory.createLogger('SomeContextName');

            // Assert
            expect(logger).toBeInstanceOf(ContextualLogger);
            expect((logger as ContextualLogger).contextName).toBe('SomeContextName');
        });

    });

});
