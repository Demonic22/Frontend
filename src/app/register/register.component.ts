import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, AbstractControl } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { passwordValidator } from '../shared/password.validator';


@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    
registerForm : any;
msg: string ="";
    constructor(private formBuilder: FormBuilder,private router:Router) {}
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            userName: ['', [Validators.required,Validators.pattern('[^\' \']{4,}')]],
            firstName: ['',[Validators.required,Validators.pattern('[A-Za-z]*')]],
            lastName: ['',[Validators.required,Validators.pattern('[A-Za-z]*')]],
            password: ['',[Validators.required,Validators.pattern('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}')]],
            confirmPassword: ['',[Validators.required]]
          }, {Validator: passwordValidator}
          );
    }
    
    submitRegisterForm(form:FormGroup){
        console.log(form.value.userName);
        console.log(form.value.firstName);
        console.log(form.value.lastName);
        console.log(form.value.password);
    }

   
    backClick(){
        this.router.navigate(['./login']);
    }
    
    

}
