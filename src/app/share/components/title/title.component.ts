import { Component, Input } from '@angular/core';

@Component({
    selector: 'trade-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss'],
})
export class TitleComponent {
    @Input() alignment: string;

    getAlignment() {
        const alignment = this.alignment || 'left';
        return {
            textAlign: alignment,
        };
    }
}
