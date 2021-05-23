/*
 * Public API Surface of ngx-wlog
 */

export * from './lib/config/log-level.enum';
export * from './lib/config/target-config';
export * from './lib/config/logger-rule-config';
export * from './lib/config/wlog-config';

export * from './lib/appenders/appender';
export * from './lib/appenders/console-appender';
export * from './lib/appenders/colored-console-appender';

export * from './lib/logger/logger';
export * from './lib/logger/logger-factory';

export * from './lib/ngx-wlog.module';
