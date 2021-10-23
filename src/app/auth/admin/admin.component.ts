import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) {
    
    const token = localStorage.getItem('ACCESS_TOKEN');
    const rol = localStorage.getItem('ROL');
    //consultar con la api si el token es válido
    if(!token || rol!="admin"){
      this.router.navigateByUrl('/auth/login');
    }
   }

  ngOnInit(): void {
  }

}
