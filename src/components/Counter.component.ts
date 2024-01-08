import {Component} from "@angular/core";


@Component({
    selector: 'counter-component',
    standalone: true,
    template: `
        <h1>Angular + Astro</h1>
        <button (click)="counter = counter +1">{{counter}}</button>
    `
})
export class CounterComponent {
    counter = 0
}