import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'trade-card-leagues',
  templateUrl: './card-leagues.component.html',
  styleUrls: ['./card-leagues.component.scss']
})
export class CardLeaguesComponent {

  @Input() leagueItem
  @Output() selectLeagues = new EventEmitter<any>();
  @Output() selectSeason = new EventEmitter<any>();
  
  selectSeasonOfLeague(event) {
    const league = this.leagueItem.league
    const selectedSeasonAndLeague = {league, season:event}
    this.selectSeason.emit(selectedSeasonAndLeague)
  }

}
