import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

//import Swal from 'sweetalert2';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
        
       
    constructor(
            private router: Router        
    ) {
            
        }

    ngOnInit() {
        
            
        }
            
    registerClick(){
                this.router.navigate(['./register']);
        }

    submitLoginForm(form: NgForm){
        console.log(form.value.userName);
    }
}
    
    
