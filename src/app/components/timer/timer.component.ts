import { Component, OnInit, Input} from '@angular/core';
import * as moment from 'moment-timezone';
import { Timezone } from '../../models/timezone';

const DATE_FORMAT = 'dddd MMMM Do YYYY';
const TIME_FORMAT = 'h:mm:ss';
const AM_PM = "a";

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  
  @Input() timezone: Timezone = new Timezone(moment.tz.guess(), "us");
  formattedTime: string;
  formattedDate: string;

  constructor() { 
    this.showTime();
  }

  ngOnInit(){
    this.showTime();
    setInterval( () => {
      this.showTime();
    }, 1000);
  }

  showTime(){
    this.timezone.setFormattedDate(moment.tz(moment(), this.timezone.name).format(DATE_FORMAT));
    this.timezone.setFormattedTime(moment.tz(moment(), this.timezone.name).format(TIME_FORMAT));
    this.timezone.setAMPM(moment.tz(moment(), this.timezone.name).format(AM_PM));
  }

}
