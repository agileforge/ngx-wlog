import {LogLevel} from './log-level.enum';

export interface LoggerRuleConfig {
    name: string;
    writeTo: string;
    active?: boolean;
    minLevel?: LogLevel;
    maxLevel?: LogLevel;
}
