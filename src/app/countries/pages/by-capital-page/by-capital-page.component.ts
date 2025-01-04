import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { count } from 'rxjs';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',

})
export class ByCapitalPageComponent implements OnInit{

  public capitals: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = ''

  constructor( private countriesService: CountriesService){}

 ngOnInit(): void {

    this.capitals = this.countriesService.cacheStore.byCapital.countries
    this.initialValue = this.countriesService.cacheStore.byCapital.term
  }


  SearchByCapital(term: string): void{

    this.isLoading = true

    this.countriesService.searchCapital( term )
    .subscribe( country =>{
      this.capitals = country;
      this.isLoading = false
    })
  }

}
