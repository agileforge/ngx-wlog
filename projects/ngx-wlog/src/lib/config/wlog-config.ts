import {LoggerRuleConfig} from './logger-rule-config';
import {TargetConfig} from './target-config';
import {ConsoleAppender} from '../appenders/console-appender';
import {LogLevel} from './log-level.enum';

export const DEFAULT_WLOG_CONFIG = {
    targets: [
        {
            appender: ConsoleAppender,
            name: 'console'
        }
    ],
    rules: [
        {
            name: '.*',
            minLevel: LogLevel.Info,
            writeTo: 'console'
        }
    ]
} as WlogConfig;

/**
 * Represents the configuration of loggers.
 */
export interface WlogConfig {

    /**
     * The configured targets of logging.
     */
    targets: TargetConfig[];

    /**
     * The rules for logging.
     */
    rules: LoggerRuleConfig[];
}
