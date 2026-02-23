import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { PromoSectionComponent } from '../../components/promo-section/promo-section.component';
import { CatalogComponent } from '../../components/catalog/catalog.component';
import { OrderFormComponent } from '../../components/order-form/order-form.component';

@Component({
  selector: 'app-home-page',
  imports: [HeaderComponent, PromoSectionComponent, CatalogComponent, OrderFormComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
