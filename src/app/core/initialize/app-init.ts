import { AppConfigService } from '../config/app-config.service';

export function initializeApp(appConfigService: AppConfigService) {
    return () => appConfigService.loadAppConfig();
}
