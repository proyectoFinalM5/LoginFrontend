import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router) {
    
    const token = localStorage.getItem('ACCESS_TOKEN');
    const rol = localStorage.getItem('rol');
    //consultar con la api si el token es válido
    if(!token){
      this.router.navigateByUrl('/auth/login');
    }
   }

  ngOnInit(): void {

    
  }

}
