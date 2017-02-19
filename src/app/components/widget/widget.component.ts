import { Component, OnInit } from '@angular/core';

import * as moment from 'moment-timezone';

const TZ_FORMAT = 'MMMM Do YYYY, h:mm:ss a';

@Component({
  selector: 'widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

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

  constructor() { 
    this.timezoneStringLocal = moment.tz.guess();
    this.timezoneStringChennai = "Asia/Kolkata";
    this.timezoneStringMelbourne = "Australia/Melbourne";
    this.showTime();
  }

  ngOnInit(){
    this.showTime();
    setInterval( () => {
      this.showTime();
    }, 1000);
  }

  showTime(){
    this.timestamp = moment();
    this.localMoment       = moment.tz(this.timestamp,this.timezoneStringLocal);
    this.chennaiMoment     = this.localMoment.clone().tz(this.timezoneStringChennai);
    this.MelbourneMoment   = this.localMoment.clone().tz(this.timezoneStringMelbourne);

    this.formattedTimeLocal = this.localMoment.format(TZ_FORMAT);
    this.formattedTimeChennai = this.chennaiMoment.format(TZ_FORMAT);   
    this.formattedTimeMelbourne = this.MelbourneMoment.format(TZ_FORMAT);    
  }

}
