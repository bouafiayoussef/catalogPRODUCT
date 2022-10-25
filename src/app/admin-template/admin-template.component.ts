import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../services/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-template',
  templateUrl: './admin-template.component.html',
  styleUrls: ['./admin-template.component.css']
})
export class AdminTemplateComponent implements OnInit {

  constructor(public authService : AuthentificationService, private router:Router) { }

  ngOnInit(): void {
  }

  handleLogOut() {
    this.authService.logOut().subscribe({
      next : (data)=>{
        this.router.navigateByUrl("/login");
      }
    })
  }
}
