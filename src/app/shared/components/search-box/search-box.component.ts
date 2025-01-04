import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, debounceTime, pipe } from 'rxjs';

@Component({
  selector: 'app-shared-search-box',
  templateUrl: './search-box.component.html',

})
export class SearchBoxComponent implements OnInit, OnDestroy{


  public Debounce: Subject<string> = new Subject<string>()

  @Output()
  public OnValue: EventEmitter<string> = new EventEmitter();

  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';

  ngOnInit(): void {

  this.Debounce.
  pipe(
    debounceTime(1000)
  )
  .subscribe(value =>{

    this.OnValue.emit( value )
  })

  }

 ngOnDestroy(): void {
    this.Debounce.unsubscribe();
  }

  EmitValue(value: string){

    this.Debounce.next( value )


}



}
