import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'trade-card-teams',
  templateUrl: './card-teams.component.html',
  styleUrls: ['./card-teams.component.scss']
})
export class CardTeamsComponent {

  @Input() teamItem: any;
  @Output() selectTeam: EventEmitter<any> = new EventEmitter();

  teamClicked() {
    this.selectTeam.emit(this.teamItem);
  }

}
