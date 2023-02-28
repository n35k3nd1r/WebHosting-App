import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly LIGHT_THEME = 'light';
  private readonly DARK_THEME = 'dark';

  private currentTheme: string;
  private isDarkModeSubject: BehaviorSubject<boolean>;

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.currentTheme = savedTheme;
    } else {
      this.currentTheme = this.LIGHT_THEME;
    }
    this.isDarkModeSubject = new BehaviorSubject<boolean>(this.currentTheme === this.DARK_THEME);
  }

  getCurrentTheme(): string {
    return this.currentTheme;
  }

  setTheme(theme: string) {
    if (theme !== this.currentTheme) {
      this.currentTheme = theme;
      localStorage.setItem('theme', theme);

      const body = document.querySelector('body');
      body.classList.remove(this.LIGHT_THEME, this.DARK_THEME);
      body.classList.add(theme);

      // Emit a new value for the isDarkMode observable
      this.isDarkModeSubject.next(theme === this.DARK_THEME);
    }
  }

  toggleTheme() {
    if (this.currentTheme === this.LIGHT_THEME) {
      this.setTheme(this.DARK_THEME);
    } else {
      this.setTheme(this.LIGHT_THEME);
    }
  }

  // Getter for the isDarkMode observable
  get isDarkMode(): Observable<boolean> {
    return this.isDarkModeSubject.asObservable();
  }
}
