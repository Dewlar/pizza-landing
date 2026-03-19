import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-promo-section',
  imports: [NgOptimizedImage],
  templateUrl: './promo-section.component.html',
  styleUrl: './promo-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromoSectionComponent {}
