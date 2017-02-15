import { Component} from '@angular/core';

import * as moment from 'moment-timezone';

const TZ_FORMAT = "YYYY-MM-DD HH:mm:ss";
const TZ_FORMAT_SHORT = "ddd HH:mm";

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
  slider_max : number = 0;
  val: number = 0;
  zone1: number = 0;
  zone2: number = 0;
  local_unix: any;
  zone1_unix: any;
  zone2_unix: any;
  zone1_offset : number = 750;
  zone2_offset : number = 420;

  constructor(){
    var timestamp: any;
    timestamp = moment();

    var local       = moment.tz(timestamp,moment.tz.guess());
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

    this.val = timestamp.hour()*60+timestamp.minute();
    this.zone1 = chennai.hour()*60+chennai.minute();
    this.zone2 = melbourne.hour()*60+melbourne.minute();
    this.slider_max = 24*60; // minutes 

    // console.log("local => ", this.val); 
    // console.log("zone1 => ", this.zone1);
    // console.log("zone2 => ", this.zone2);
    
    this.local_unix = local.format(TZ_FORMAT_SHORT);
    this.zone1_unix = chennai.format(TZ_FORMAT_SHORT);
    this.zone2_unix = melbourne.format(TZ_FORMAT_SHORT);
    // console.log("local moment => ", this.local_unix); 
    // console.log("zone1 moment => ", this.zone1_unix);
    // console.log("zone2 moment => ", this.zone2_unix);
  }

  updateTime(localTime: string){

    //console.log("updated local timezone in == updateTime() ", moment(localTime));

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

  handleChange(e:any, trigger:string) {

    console.log("Evemt object ==> ", e);

    var slider_val = e.value;
    var moment_from_minutes = moment({hour: slider_val/60, minute: slider_val % 60});
    var local;
    var chennai;
    var melbourne;

    //console.log("2nd argument => ", trigger); 
    //console.log("time from minutes ==> ", moment_from_minutes);

    switch (trigger) {
      case "local": 
        local       = moment.tz(moment(moment_from_minutes),moment.tz.guess());
        chennai     = local.clone().tz("Asia/Kolkata");
        melbourne   = local.clone().tz("Australia/Melbourne");
        break;
      case "chennai": 
        chennai     = moment.tz(moment(moment_from_minutes),"Asia/Kolkata");
        local       = chennai.clone().tz(moment.tz.guess());
        melbourne   = chennai.clone().tz("Australia/Melbourne");
        break;
      case "melbourne": 
        melbourne   = moment.tz(moment(moment_from_minutes),"Australia/Melbourne");
        local       = melbourne.clone().tz(moment.tz.guess());
        chennai     = melbourne.clone().tz("Asia/Kolkata");
        break;        
      default:
        confirm("Sorry, that option is not in the system yet!");
    }

    this.local_unix = local.format(TZ_FORMAT_SHORT);
    this.zone1_unix = chennai.format(TZ_FORMAT_SHORT);
    this.zone2_unix = melbourne.format(TZ_FORMAT_SHORT);

    this.val = local.hour()*60+local.minute();
    this.zone1 = chennai.hour()*60+chennai.minute();
    this.zone2 = melbourne.hour()*60+melbourne.minute();
  }
}
