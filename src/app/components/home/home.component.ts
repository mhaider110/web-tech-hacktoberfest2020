import { Component } from '@angular/core';
import { AppService } from 'src/app/services/app-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  frontendData = []
  backendData = []

  constructor(appService: AppService) { 
    appService.getFrontendData().subscribe((res) => {
      this.frontendData = res
    });
    appService.getBackendData().subscribe((res) => {
      this.backendData = res
    })
  }

}
