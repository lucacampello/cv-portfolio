import { Routes } from "@angular/router";

export const routes: Routes = [
    { 
        path: '',
        loadChildren: () => import('../mainpage/mainpage.module').then(m => m.MainpageModule)
    },
    { path: '**', redirectTo: '' }
];