import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'trade-login-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  formLogin: FormGroup;
  apikey: FormControl;

  @Output() login = new EventEmitter<string>();

  constructor(
    private formbuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.createControls();
    this.createForm();
  }

  createControls() {
    const apikeyValidators = [
      Validators.required,
      Validators.minLength(3)
    ]
    this.apikey = new FormControl('', Validators.compose(apikeyValidators))
  }

  createForm() {
    this.formLogin = this.formbuilder.group({
      apikey: this.apikey
    })
  }

  submitLogin() {
    const login = this.formLogin.value
    this.login.emit(login)
  }

}
