import {Logger} from './logger';
import {MultiLogger} from './multi-logger';
import {LoggerRuleConfig} from '../config/logger-rule-config';
import {TargetConfig} from '../config/target-config';
import {DEFAULT_WLOG_CONFIG, WlogConfig} from '../config/wlog-config';
import {ContextualLogger} from './contextual-logger';
import {StructuredLogger} from './structured-logger';
import {FilteredStructuredLogger} from './filtered-structured-logger';
import {StructuredLoggerWriter} from './structured-logger-writer';
import {LogLevel} from '../config/log-level.enum';

/**
 * Factory that allow to create loggers according the configuration.
 * The loggers behavior can be modifier in run time by reloading configuration.
 */
// @dynamic
export class LoggerFactory {

    private static ruleSplitterRegExp = new RegExp('[;,|]');
    private static loggers = new MultiLogger();

    static config: WlogConfig = DEFAULT_WLOG_CONFIG;

    /**
     * Creates a logger with a specific context name.
     * @param contextName The context name of logger. If no name provided, try to get the declaring class name or the calling function.
     */
    public static createLogger(contextName: string): Logger {
        return new ContextualLogger(contextName, LoggerFactory.loggers);
    }

    /**
     * Reload configuration and rebuild all loggers.
     * @param config The new logger configuration.
     */
    public static reload(config: WlogConfig): void {
        LoggerFactory.loggers.replace(...LoggerFactory.buildLoggers(config));
        LoggerFactory.config = config;
    }

    private static buildLoggers(config: WlogConfig): StructuredLogger[] {
        return config.rules
            .filter(rule => rule.active ?? true)
            .map(rule => LoggerFactory.buildRuleLoggers(rule, config))
            .reduce((res, cur) => res.concat(...cur), []);
    }

    private static buildRuleLoggers(rule: LoggerRuleConfig, config: WlogConfig): StructuredLogger[] {
        return rule.writeTo
            // Split target to array
            .split(this.ruleSplitterRegExp)
            // Remove empty targets
            .filter(targetName => targetName && targetName.length > 0)
            // Gets corresponding target configs
            .map(targetName => {
                const targetConfig = config.targets.find(target => target.name === targetName);
                if (targetConfig) {
                    return LoggerFactory.buildTargetLogger(rule, targetConfig);
                }
                return undefined;
            })
            // Remove empty undefined loggers
            .filter(logger => logger !== undefined).map(logger => logger as StructuredLogger);
    }

    private static buildTargetLogger(rule: LoggerRuleConfig, targetConfig: TargetConfig): StructuredLogger {
        const writer = new StructuredLoggerWriter(targetConfig.appender, targetConfig.options);
        const nameRegExp = new RegExp(rule.name);
        return new FilteredStructuredLogger(
            writer,
            nameRegExp,
            rule.minLevel ?? LogLevel.Trace,
            rule.maxLevel ?? LogLevel.Fatal);
    }

}

