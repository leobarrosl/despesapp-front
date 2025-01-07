import { Component, LOCALE_ID } from '@angular/core';
import { HeaderMenuBarComponent } from '../../components/header-menu-bar/header-menu-bar.component';
import { HeaderButtonBarComponent } from '../../components/header-button-bar/header-button-bar.component';
import { User } from '../../services/models/Usuario.model';
import { MockService } from '../../services/mock.service';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import localePtExtra from '@angular/common/locales/extra/pt';

registerLocaleData(localePt, 'pt-BR', localePtExtra);

@Component({
  selector: 'app-dashboard',
  imports: [HeaderMenuBarComponent, HeaderButtonBarComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },  // Configura a localidade para pt-BR
  ],
})
export class DashboardComponent {

  user: User;

  constructor(private mockService: MockService) {

    this.user = mockService.getUser();
  }

}
