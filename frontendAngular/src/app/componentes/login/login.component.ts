import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hayUsuario:any;
  
  usuario: string = "";
  contrasenia: string = "";

  datos = {
    usuario: "",
    contrasenia: ""
  }

  existeSesion: boolean = false;

  userAdmin = { "usuario" : "admin"}

  constructor(public router:Router ) { }

  ngOnInit(): void {
    this.inicializarAdmin();
  }

  inicializarAdmin(){
    this.datos.usuario = "admin";
    this.datos.contrasenia = "admin";
  }

  verficar(): boolean{ 
   if(this.usuario===this.datos.usuario && this.contrasenia===this.datos.contrasenia){
     return true;
   }
   return false;
  }

  validarLogeo(){
    if(!this.verficar()){
      return false
    }
    localStorage.setItem('usuario', JSON.stringify(this.userAdmin));
    this.router.navigate(['/principal']);
    return true;
  }
}
