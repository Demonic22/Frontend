import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

//import Swal from 'sweetalert2';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
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
}
    
    
