import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss'],
  host: {
    "(window:resize)":"onWindowResize($event)",
  }
})
export class AppbarComponent implements OnInit {


  isMobile: boolean = false;
  isMidMobile:boolean=false;
  width:number = window.innerWidth;
 
  height:number = window.innerHeight;
  constructor() { }

  ngOnInit(): void {
    if(this.width < 600){
      this.isMobile=true;
    }
  }


  onWindowResize(event) {

    
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;

    if(this.width >= 765 && this.width < 990){
    this.isMidMobile = true;
    this.isMobile = false;

    }
  
    if(this.width < 600){
    this.isMidMobile = false;
     this.isMobile = true;
     
    }
    else if (this.width > 990){
      this.isMidMobile = false;

      this.isMobile = false;
    }
  }


}
