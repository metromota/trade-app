import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiFootbalService } from '@core/services/api-football.service';
import { Observable, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {

  team = {
    "id": 33,
    "name": "Manchester United",
    "code": "MUN",
    "country": "England",
    "founded": 1878,
    "national": false,
    "logo": "https://media.api-sports.io/football/teams/33.png"
  }

  venue = {
    "id": 556,
    "name": "Old Trafford",
    "address": "Sir Matt Busby Way",
    "city": "Manchester",
    "capacity": 76212,
    "surface": "grass",
    "image": "https://media.api-sports.io/football/venues/556.png"
  }

  constructor(
    private activeRoute: ActivatedRoute,
    private api: ApiFootbalService
  ) { }

  ngOnInit() {
    const findTeam = ({ id }) => this.api.getTeam(id)
    const observableTeam = this.activeRoute.params.pipe(switchMap(findTeam));
    const addTeam = ({ response }) => {
      const validTeam = !!response.length;
      if (validTeam) {
        this.team = response[0].team;
        this.venue = response[0].venue;
      }
    }
    observableTeam.pipe(take(1)).subscribe(addTeam)
  }


}
