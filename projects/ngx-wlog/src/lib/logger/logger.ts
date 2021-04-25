export interface Logger {

  /**
   * Gets the context name of logger.
   */
  readonly contextName: string;

  /**
   * Log in the trace level.
   * @param message The log message.
   * @param obj Data related to log.
   */
  trace(message: string, obj?: any): void;

  /**
   * Log in the debug level.
   * @param message The log message.
   * @param obj Data related to log.
   */
  debug(message: string, obj?: any): void;

  /**
   * Log in the info level.
   * @param message The log message.
   * @param obj Data related to log.
   */
  info(message: string, obj?: any): void;

  /**
   * Log in the warn level.
   * @param message The log message.
   * @param obj Data related to log.
   */
  warn(message: string, obj?: any): void;

  /**
   * Log in the error level.
   * @param message The log message.
   * @param obj Data related to log.
   */
  error(message: string, obj?: any): void;

  /**
   * Log in the fatal level.
   * @param message The log message.
   * @param obj Data related to log.
   */
  fatal(message: string, obj?: any): void;

}

