import { Router } from '@angular/router';
import { AppService } from './../../services/app.service';
import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input()
  showSideBar:boolean;

  @Output()
  showSideBarChange: EventEmitter<boolean> = new EventEmitter<boolean>() ;


  constructor(private appService:AppService,
              private router:Router) { }

  ngOnInit() {
  }
  afficherSideBar(){
    this.showSideBar = !this.showSideBar;
    this.showSideBarChange.emit(this.showSideBar);
  }

  logout(){
    this.appService.logout(()=>{
        this.router.navigateByUrl("/login");
    });

  }

}
