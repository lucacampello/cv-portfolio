import { animate, animation, style } from "@angular/animations";

export const enter = animation([
    animate('1200ms ease-in', style({transform: 'translateX(0%)'}))
]);

export const leave = animation([
    animate('2400ms ease-out', style({transform: 'translateX(-100%)'}))
]);