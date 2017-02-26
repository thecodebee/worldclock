import { Component, OnInit } from '@angular/core';
import * as moment from 'moment-timezone';
import { Timezone } from '../../models/timezone';

@Component({
  selector: 'timer-list',
  templateUrl: './timer-list.component.html',
  styleUrls: ['./timer-list.component.scss']
})
export class TimerListComponent implements OnInit {
  timezones: Timezone[];

  constructor() { 
    this.timezones = [
      new Timezone(moment.tz.guess(), "us"),
      new Timezone("Asia/Kolkata", "in"),
      new Timezone("Australia/Melbourne","au")
    ];
   }

  ngOnInit() {
  }

}
