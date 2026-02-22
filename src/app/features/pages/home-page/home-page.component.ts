import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { PromoSectionComponent } from '../../components/promo-section/promo-section.component';

@Component({
  selector: 'app-home-page',
  imports: [HeaderComponent, PromoSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
