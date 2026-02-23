import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Pizza } from '../../../interfaces/data.interface';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-card',
  imports: [DrawerModule, ButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  readonly pizza = input<Pizza>();
  protected visible = false;
}
