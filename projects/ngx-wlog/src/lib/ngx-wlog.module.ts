import {NgModule, ModuleWithProviders} from '@angular/core';
import {DEFAULT_WLOG_CONFIG, WlogConfig} from './config/wlog-config';
import {LoggerFactory} from './logger/logger-factory';

@NgModule({
    declarations: [],
    imports: [],
    exports: []
})
export class NgxWlogModule {
    public static forRoot(config: WlogConfig | undefined): ModuleWithProviders<NgxWlogModule> {
        LoggerFactory.reload(config ?? DEFAULT_WLOG_CONFIG);
        return {
            ngModule: NgxWlogModule,
            providers: []
        };
    }
}
