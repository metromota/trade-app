import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'trade-card-season',
  templateUrl: './card-season.component.html',
  styleUrls: ['./card-season.component.scss']
})
export class CardSeasonComponent {

  @Input() season
  @Output() seasonClicked = new EventEmitter<any>();

  changeSeason(){
    this.seasonClicked.emit(this.season);
  }

}
