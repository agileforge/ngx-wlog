/**
 * Represents dummy wrapper or console, to allow tests.
 */
export class ConsoleWrapper {

    log(...data: any[]): void {
        console.log(...data);
    }

    trace(...data: any[]): void {
        // tslint:disable-next-line:no-console
        console.trace(...data);
    }

    debug(...data: any[]): void {
        // tslint:disable-next-line:no-console
        console.debug(...data);
    }

    warn(...data: any[]): void {
        // tslint:disable-next-line:no-console
        console.warn(...data);
    }

    error(...data: any[]): void {
        // tslint:disable-next-line:no-console
        console.error(...data);
    }

}
