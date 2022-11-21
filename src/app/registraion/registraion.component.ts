import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registraion',
  templateUrl: './registraion.component.html',
  styleUrls: ['./registraion.component.css']
})
export class RegistraionComponent implements OnInit {
  withdrawForm = this.fb.group({
    userdf: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    userdl: ['', [Validators.required, Validators.pattern('[a-zA-Z@#$0-9]+')]],
    userda: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    userdp: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    
    
    
  })

  constructor(private router:Router,private fb: FormBuilder,) { }

  ngOnInit(): void {
  }
  register(){
    if(this.withdrawForm.valid)
    this.router.navigateByUrl('/home')
    else{
      alert("Please Enter the Details")
    }
    

}
}
