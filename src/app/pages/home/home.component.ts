import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {initFlowbite} from 'flowbite';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  isDrawerOpen = false;
  email = '';
  password = '';

  ngOnInit() {
    initFlowbite();
  }

  openDrawer() {
    this.isDrawerOpen = true;
  }

  closeDrawer() {
    this.isDrawerOpen = false;
  }

  onSubmit() {
    console.log('Email:', this.email, 'Password:', this.password);
    this.closeDrawer();
  }

  

}
