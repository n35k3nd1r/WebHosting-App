import { Component } from '@angular/core';
import { TranslateModule , TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(private translate: TranslateService) { }
}
