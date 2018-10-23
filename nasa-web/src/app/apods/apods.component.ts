import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-apods',
  templateUrl: './apods.component.html',
  styleUrls: ['./apods.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ApodsComponent implements OnInit { 
  /** Attributes */
  restItems: any;
  restItemsUrl: any;
  // restItemsUrl = "https://api.nasa.gov/planetary/apod?api_key=8El6HcqcvmV7fJxDHkydav2YGlakSSq64U43N3Gp";
  show_description = false;
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    var start_date_string = this.date_to_string(this.get_start_date(10)); 
    this.set_rest_items_url(start_date_string); // Set the restItemsUrl by using the start_date_string
    
    this.getRestItems();  // Get the rest items based on the url
  }

  /** Use to set show_description.
   *  If 'show_description' is True, show the image description. Else, don't show (Logic in html file) */
  show_image_description(){
    this.show_description = !this.show_description;
  }

  /** Set the restItemsUrl by the start date */
  set_rest_items_url(start_date_str){
    this.restItemsUrl = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=" + start_date_str;
  }

  /** Gets today's date as a string. */
  get_today_date(){
    var today = new Date();
    return today;
  }
  /** Get the start date from today by minusing the num_days as a Date type object */
  get_start_date(num_days){
    var today_date = this.get_today_date();
    var start_date = new Date();
    start_date.setDate(today_date.getDate() - num_days);
    return start_date;
  }

  /** Convert a date to a formatted string */
  date_to_string(date){
    var day_str = "";
    var month_str = "";

    if (date.getDate() < 10){
      day_str = "0" + date.getDate().toString();
    } else{
      day_str = date.getDate().toString();
    }

    if (date.getMonth()+1 < 10){
      month_str = "0" + (date.getMonth()+1).toString();
    } else{
      month_str = (date.getMonth()+1).toString();
    }

    return date.getFullYear().toString() + '-' + month_str + '-' + day_str;
  }




  /** Functions for REST Service */
  // Read all REST Items
  getRestItems(): void {
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          console.log(this.restItems);
        }
      )
  }

  // Rest Items Service: Read all REST Items
  restItemsServiceGetRestItems() {
    return this.http
      .get<any[]>(this.restItemsUrl)
      .pipe(map(data => data));
  }
}
