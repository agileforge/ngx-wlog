import {Type} from '@angular/core';
import {Appender} from '../appenders/appender';

/**
 * Represents the configuration of an appender.
 */
export interface TargetConfig {
    /**
     * The name of appender.
     */
    name: string;

    /**
     * The type of appender.
     */
    appender: Type<Appender>;

    /**
     * Parameters for the appender.
     */
    options?: any;
}
