import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {initFlowbite} from 'flowbite';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  isLoginDrawerOpen = false;
  isSignUpDrawerOpen = true;

  formLogin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  formSignUp: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    passwordConfirmation: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
    initFlowbite();
  }

  openLoginDrawer() {
    this.closeSignUpDrawer()
    this.isLoginDrawerOpen = true;
  }

  closeLoginDrawer() {
    this.isLoginDrawerOpen = false;
  }

  onSubmitLogin() {
    console.log('Email:', this.formLogin.value.email, '\nPassword:', this.formLogin.value.password);
    this.closeLoginDrawer();
  }

  openSignUpDrawer() {
    this.closeLoginDrawer();
    this.isSignUpDrawerOpen = true;
  }

  closeSignUpDrawer() {
    this.isSignUpDrawerOpen = false;
  }

  onSubmitSignUp() {
    console.log('Email:', this.formSignUp.value.email, '\nPassword:', this.formSignUp.value.password);
    this.closeSignUpDrawer();
  }

  anyDrawerOpen() {
    return this.isLoginDrawerOpen || this.isSignUpDrawerOpen;
  }

}
