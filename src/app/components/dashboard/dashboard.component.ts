import { Component } from '@angular/core';

import * as moment from 'moment-timezone';

const TZ_FORMAT = "YYYY-MM-DD HH:mm:ss";
const TZ_FORMAT_SHORT = "ddd h:mm a";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  timestamp: any;
  localMoment: any;
  chennaiMoment: any;
  MelbourneMoment: any;

  timezoneStringLocal: string;
  timezoneStringChennai: string;
  timezoneStringMelbourne: string;

  formattedTimeLocal: string ;
  formattedTimeChennai: string;
  formattedTimeMelbourne: string;

  sliderValueLocal: number = 0;
  sliderValueChennai: number = 0;
  sliderValueMelbourne: number = 0;

  sliderFormattedTimeLocal: string;
  sliderFormattedTimeChennai: string;
  sliderFormattedTimeMelbourne: string;
 
  slider_max : number = 24*60; // minutes 

  timezoneNames: string[];

  constructor() {
    this.timezoneNames = moment.tz.names();
    this.timezoneStringLocal = moment.tz.guess();
    this.timezoneStringChennai = "Asia/Kolkata";
    this.timezoneStringMelbourne = "Australia/Melbourne";
    this.showTime();
  }

  showTime(){
    this.timestamp = moment();
    this.localMoment       = moment.tz(this.timestamp,this.timezoneStringLocal);
    this.chennaiMoment     = this.localMoment.clone().tz(this.timezoneStringChennai);
    this.MelbourneMoment   = this.localMoment.clone().tz(this.timezoneStringMelbourne);

    this.formattedTimeLocal = this.localMoment.format(TZ_FORMAT);
    this.formattedTimeChennai = this.chennaiMoment.format(TZ_FORMAT);   
    this.formattedTimeMelbourne = this.MelbourneMoment.format(TZ_FORMAT);    

    this.sliderValueLocal     = this.localMoment.hour()*60+this.localMoment.minute();
    this.sliderValueChennai   = this.chennaiMoment.hour()*60+this.chennaiMoment.minute();
    this.sliderValueMelbourne = this.MelbourneMoment.hour()*60+this.MelbourneMoment.minute();
    
    this.sliderFormattedTimeLocal     = this.localMoment.format(TZ_FORMAT_SHORT);
    this.sliderFormattedTimeChennai   = this.chennaiMoment.format(TZ_FORMAT_SHORT);
    this.sliderFormattedTimeMelbourne = this.MelbourneMoment.format(TZ_FORMAT_SHORT);
  }

  handleSliderChange(e, timezone:string) {
    var slider_val : any;
    var moment_from_slider : any;

    slider_val = e.value;
    console.log("slider value ==> ", slider_val);
    moment_from_slider = moment({hour: slider_val/60, minute: slider_val % 60});
    
    switch (timezone) {
      case "local": 
        this.localMoment       = moment.tz(moment_from_slider,this.timezoneStringLocal);
        this.chennaiMoment     = this.localMoment.clone().tz(this.timezoneStringChennai);
        this.MelbourneMoment   = this.localMoment.clone().tz(this.timezoneStringMelbourne);
        break;
      case "chennai": 
        this.chennaiMoment     = moment.tz(moment_from_slider,this.timezoneStringChennai);
        this.localMoment       = this.chennaiMoment.clone().tz(this.timezoneStringLocal);
        this.MelbourneMoment   = this.chennaiMoment.clone().tz(this.timezoneStringMelbourne);
        break;
      case "melbourne":
        this.MelbourneMoment   = moment.tz(moment_from_slider,this.timezoneStringMelbourne);
        this.localMoment       = this.MelbourneMoment.clone().tz(this.timezoneStringLocal);
        this.chennaiMoment     = this.MelbourneMoment.clone().tz(this.timezoneStringChennai);
        break;
      default:
        confirm("Sorry, that option is not in the system yet!");
    }

    this.sliderFormattedTimeLocal = this.localMoment.format(TZ_FORMAT_SHORT);
    this.sliderFormattedTimeChennai = this.chennaiMoment.format(TZ_FORMAT_SHORT);
    this.sliderFormattedTimeMelbourne = this.MelbourneMoment.format(TZ_FORMAT_SHORT);

    this.sliderValueLocal = this.localMoment.hour()*60+this.localMoment.minute();
    this.sliderValueChennai = this.chennaiMoment.hour()*60+this.chennaiMoment.minute();
    this.sliderValueMelbourne = this.MelbourneMoment.hour()*60+this.MelbourneMoment.minute();
  }

}
