import { Component, Input } from '@angular/core';

@Component({
  selector: 'trade-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

  @Input() align: string

  getAlignment() {
    const alignment = this.align || 'left'
    return {
      textAlign: alignment
    }
  }

}
