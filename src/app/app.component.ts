import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  isDarkMode: boolean = false;

  constructor(private translate: TranslateService) {
    // Set the default language to English
    translate.setDefaultLang('en');
    // Use the user's browser language
    translate.use(navigator.language.split('-')[0]);
  }
}
