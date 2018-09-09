import { AppService } from './../services/app.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  showHideSideBar: boolean = false; 

  constructor(private appService:AppService,
              private router:Router){

  }
  onShowSideBarChange(showHideSideBar){
    this.showHideSideBar=showHideSideBar;
  }

  ngOnInit() {

    if(!this.appService.authenticated){
      this.router.navigateByUrl("/login");
    }else{
      this.router.navigateByUrl("/home");
    }

    }


}
