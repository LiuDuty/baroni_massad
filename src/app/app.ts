import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ServicesComponent } from './components/services/services.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    CoursesComponent,
    ServicesComponent,
    FaqComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
