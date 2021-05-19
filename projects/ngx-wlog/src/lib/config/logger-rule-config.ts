import {LogLevel} from './log-level.enum';

export interface LoggerRuleConfig {
    name: string;
    minLevel: LogLevel;
    writeTo: string;
}
