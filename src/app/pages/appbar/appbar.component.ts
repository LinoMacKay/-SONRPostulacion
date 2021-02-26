import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss'],
  host: {
    "(window:resize)":"onWindowResize($event)",
    "(window:scroll)":"onWindowScroll($event)"
  }
})
export class AppbarComponent implements OnInit {

  opacitylevel = 1;
  positiontype = 'relative';
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


  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 100) {
      this.opacitylevel = 0.7;
      this.positiontype = 'fixed'
    }
    else{
      this.opacitylevel =1
      this.positiontype = 'relative'

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
