import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'mos-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  public name: string;
  public id: string;
  public documentType: string;
  public pass: string;
  public documentNumber: number;
  public loginForm = new FormGroup({
    name: new FormControl('', Validators.required),
    id: new FormControl('', Validators.required),
    documentType: new FormControl('', Validators.required),
    pass: new FormControl('', Validators.required),
    documentNumber: new FormControl('', Validators.required)
  });

  constructor() {
    this.loginForm.setValue({
      name: '',
      id: '',
      documentType: '',
      pass: '',
      documentNumber: ''
    });
  }

  ngOnInit(): void {
  }

  public newUser(form: any): void {
    console.log(form);
  }
}
