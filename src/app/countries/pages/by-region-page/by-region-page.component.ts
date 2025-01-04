import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { region } from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',

})
export class ByRegionPageComponent implements OnInit{

  public countries: Country[] = [];
  public Region: region[] = ['Africa','America','Asia','Europe','Oceania']

  public selectedRegion?: region


 constructor( private countriesService: CountriesService){}


  ngOnInit(): void {

      this.countries = this.countriesService.cacheStore.byRegion.countries
      this.selectedRegion = this.countriesService.cacheStore.byRegion.region
  }

 SearchByRegion(term: region){

  this.selectedRegion = term;

    this.countriesService.searchRegion( term )
    .subscribe( region =>{
      this.countries = region;

    } )
 }
}
