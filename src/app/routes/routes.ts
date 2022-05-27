import { Routes } from "@angular/router";

export const routes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { 
        path: 'main',
        loadChildren: () => import('../mainpage/mainpage.module').then(m => m.MainpageModule)
    },
    { path: '**', redirectTo: 'main' }
];