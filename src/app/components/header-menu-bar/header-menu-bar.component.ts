import { Component, Input, OnInit } from '@angular/core';
import { MockService } from '../../services/mock.service';
import { User } from '../../services/models/Usuario.model';

@Component({
  selector: 'app-header-menu-bar',
  imports: [],
  templateUrl: './header-menu-bar.component.html',
  styleUrl: './header-menu-bar.component.css'
})
export class HeaderMenuBarComponent implements OnInit {

  @Input() name: string = ''

  constructor(private mockService: MockService) {
  }

  ngOnInit(): void {
    
  }

}
