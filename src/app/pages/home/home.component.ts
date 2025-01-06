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

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  ngOnInit() {
    initFlowbite();
  }

  openDrawer() {
    this.isLoginDrawerOpen = true;
  }

  closeDrawer() {
    this.isLoginDrawerOpen = false;
  }

  onSubmit() {
    console.log('Email:', this.form.value.email, '\nPassword:', this.form.value.password);
    this.closeDrawer();
  }

  

}
