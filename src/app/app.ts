import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomePageComponent } from './features/pages/home-page/home-page.component';

@Component({
  selector: 'app-root',
  imports: [HomePageComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
