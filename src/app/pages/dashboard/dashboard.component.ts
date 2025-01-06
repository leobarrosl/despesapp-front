import { Component } from '@angular/core';
import { HeaderMenuBarComponent } from '../../components/header-menu-bar/header-menu-bar.component';
import { HeaderButtonBarComponent } from '../../components/header-button-bar/header-button-bar.component';

@Component({
  selector: 'app-dashboard',
  imports: [HeaderMenuBarComponent, HeaderButtonBarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
