import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LoginService } from '../Services/login.service';

import Swal from 'sweetalert2';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
        
       usr: any;
    constructor(
            private router: Router ,
            private loginService:LoginService       
    ) {
            
        }

    ngOnInit() {
        
            
        }
            
    registerClick(){
                this.router.navigate(['./register']);
        }

    submitLoginForm(form: NgForm){
        console.log(form.value);
        this.loginService.loginUser(form.value)
        .subscribe((result)=> {
            this.usr=result;
            console.log(this.usr.status);
            if(this.usr.status == 200){
                Swal.fire("Succesfull");
                console.log("succes");
            }
            else
            {
                form.reset;
            }
        },
        (error)=>{
            Swal.fire("error in connection");
        },
        ()=>{
            form.resetForm();
        }
        );
    }
}
    
    
