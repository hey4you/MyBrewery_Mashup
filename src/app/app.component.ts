import { Component } from '@angular/core';
import { BeerAPIService } from './beer-api.service';
import { Observable } from 'rxjs/'; //RX mab

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyBrewery';
  savedBeers: string[] = [];
  beers: any;
  
  constructor(private _BeerAPIService: BeerAPIService) {}

  ngOnInit() {
    this.getBeers1();
  }

  getBeers1() {
    this._BeerAPIService.getBeers1().subscribe(
    data => { this.beers = data},
    err => console.error(err),
    () => console.log('done loading beers')
    );

  }
  saveBeer() {
    this.savedBeers.push(this.beers.data.name);
    console.log(this.savedBeers);
  }
  
}
