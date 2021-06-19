import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, AbstractControl } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    
registerForm : any;
    
    constructor(private formBuilder: FormBuilder,private router:Router) {}
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            userName: ['', [Validators.required]],
            firstName: ['',[Validators.required]],
            lastName: ['',[Validators.required]],
            password: ['',[Validators.required]]
          });
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
