import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Country } from 'app/share/models/country';

@Component({
  selector: 'trade-card-country',
  templateUrl: './card-country.component.html',
  styleUrls: ['./card-country.component.scss']
})
export class CardCountryComponent {

  @Input('country') country: any
  @Output() countryChange = new EventEmitter<Country>();

  changeCountry(){
    this.countryChange.emit(this.country);
  }
}
