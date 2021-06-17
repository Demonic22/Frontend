import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
    selector: 'register',
    templateUrl: './register.component.html'})
export class RegisterComponent implements OnInit {
    
    submitted: boolean = false;
    
    usr: any;
    constructor(
        private router : Router 
    ) { 
        
    }

    ngOnInit() {

        
    }
    
    onSubmit(){
        
    }

   
    backClick(){
        this.router.navigate(['./login']);
    }
    
    

}
