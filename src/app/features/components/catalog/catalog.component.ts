import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Pizza } from '../../interfaces/data.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-catalog',
  imports: [CardComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogComponent implements OnInit {
  private readonly databaseService = inject(DatabaseService);
  private readonly destroy = inject(DestroyRef);
  readonly pizzas = signal<Pizza[]>([]);

  ngOnInit(): void {
    this.databaseService
      .getPizzas()
      .pipe(takeUntilDestroyed(this.destroy))
      .subscribe({
        next: (data) => {
          if (!data) {
            return;
          }
          this.pizzas.set(data as Pizza[]);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
