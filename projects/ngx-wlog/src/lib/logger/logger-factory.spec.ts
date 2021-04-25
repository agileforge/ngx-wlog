import { LoggerFactory } from './logger-factory';

describe('LoggerFactory', () => {

    describe('createLogger', () => {

        it('should create logger with specified context name', () => {
            // Act
            const logger = LoggerFactory.createLogger('SomeContextName');

            // Assert
            expect(logger.contextName).toBe('SomeContextName');
        });

    });

});
