import { Component, Input } from '@angular/core';

@Component({
    selector: 'trade-card-player',
    templateUrl: './card-player.component.html',
    styleUrls: ['./card-player.component.scss'],
})
export class CardPlayerComponent {
    @Input() player;
}
