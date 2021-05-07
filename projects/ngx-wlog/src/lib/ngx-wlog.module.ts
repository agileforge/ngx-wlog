import {NgModule, ModuleWithProviders} from '@angular/core';
import {WlogConfigService} from './config/wlog-config.service';
import {WlogConfig} from './config/wlog-config';

@NgModule({
    declarations: [],
    imports: [],
    exports: []
})
export class NgxWlogModule {
    public static forRoot(config: WlogConfig): ModuleWithProviders<NgxWlogModule> {
        const wlogConfigService = new WlogConfigService();
        WlogConfigService.config = config;
        return {
            ngModule: NgxWlogModule,
            providers: [
                {provide: WlogConfigService, useValue: wlogConfigService}
                // LoggerService => To implements to allow to inject
            ]
        };
    }
}
