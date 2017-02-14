import { Component} from '@angular/core';

import * as moment from 'moment-timezone';

const TZ_FORMAT = "YYYY-MM-DD HH:mm:ss";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  tz_local: string ;
  tz_newYork: string;
  tz_losAngeles: string;
  tz_london: string;
  tz_chennai: string;
  tz_melbourne: string;
  val: number = 0;

  constructor(){
    console.log("current timezone ==> ", moment.tz.guess());
    console.log("moment object ==> ", moment.now());

    this.val = 70000;

    var local       = moment.tz(moment(),moment.tz.guess());
    var newYork     = local.clone().tz("America/New_York");
    var losAngeles  = local.clone().tz("America/Los_Angeles");
    var london      = local.clone().tz("Europe/London");
    var chennai     = local.clone().tz("Asia/Kolkata");
    var melbourne   = local.clone().tz("Australia/Melbourne");

    this.tz_local = local.format(TZ_FORMAT);
    this.tz_newYork = newYork.format(TZ_FORMAT);    
    this.tz_losAngeles = losAngeles.format(TZ_FORMAT); 
    this.tz_london = london.format(TZ_FORMAT);  
    this.tz_chennai = chennai.format(TZ_FORMAT);   
    this.tz_melbourne = melbourne.format(TZ_FORMAT);      
  }

  updateTime(localTime: string){

    console.log("updated local timezone in == updateTime() ", moment(localTime));

    var local       = moment.tz(moment(localTime),moment.tz.guess());
    var newYork     = local.clone().tz("America/New_York");
    var losAngeles  = local.clone().tz("America/Los_Angeles");
    var london      = local.clone().tz("Europe/London");
    var chennai     = local.clone().tz("Asia/Kolkata");
    var melbourne   = local.clone().tz("Australia/Melbourne");

    this.tz_local = local.format(TZ_FORMAT);
    this.tz_newYork = newYork.format(TZ_FORMAT);    
    this.tz_losAngeles = losAngeles.format(TZ_FORMAT); 
    this.tz_london = london.format(TZ_FORMAT);  
    this.tz_chennai = chennai.format(TZ_FORMAT);   
    this.tz_melbourne = melbourne.format(TZ_FORMAT); 
  }

  handleChange(e) {
    console.log("new value ==> ", e.value);
    this.val = e.value;
  }
}
