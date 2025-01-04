import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',

})
export class ByCountryPageComponent implements OnInit{

  public country: Country[] = []
  public isloading: boolean = false
  public initialValue: string = '';


  constructor(private countriesService: CountriesService){}



  ngOnInit(): void {

  this.country = this.countriesService.cacheStore.byCountry.countries
  this.initialValue = this.countriesService.cacheStore.byCountry.term
  }


  SearchByCountry(term: string){

    this.isloading = true

    this.countriesService.searchCountry(term)
    .subscribe(country =>{

      this.country = country

      this.isloading = false
    })
  }
}
