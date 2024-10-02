import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'home',
        loadChildren: () =>
            import('history-feature-presentation').then(
                (module) => module.historyFeaturePresentationRoutes
            )
    }
];
