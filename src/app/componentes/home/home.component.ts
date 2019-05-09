import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  breakpoint:number;
  colIntro:number;
  rowIntro:number;
  /** Based on the screen size, switch from standard to one column per row */
  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 950) ? 1 : 2; 
    if(this.breakpoint == 2)
    {
      this.colIntro = 2;
      this.rowIntro = 5;
    }
    if(this.breakpoint==1)
    {
      this.colIntro = 1;
      this.rowIntro = 7;
    }
  }
  onResize(event) {
    this.colIntro = 1;
    this.breakpoint = (event.target.innerWidth <= 950) ? 1 : 2;
    if(this.breakpoint == 2)
    {
      this.colIntro = 2;
      this.rowIntro = 5;
    }
    if(this.breakpoint==1)
    {
      this.colIntro = 1;
      this.rowIntro = 7;
    }
  }
}
