import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { Dialog, DialogModule } from 'primeng/dialog';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-order-form',
  imports: [ReactiveFormsModule, Dialog, DialogModule, NgxMaskDirective, NgClass],
  providers: [provideNgxMask()],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderFormComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly destroy = inject(DestroyRef);
  isSubmitted = false;

  orderForm = this.fb.group({
    name: ['', [Validators.required]],
    address: ['', [Validators.required]],
    phone: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.orderForm.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged(), takeUntilDestroyed(this.destroy))
      .subscribe((data) => {
        console.log(data);
      });
  }

  onSubmit(): void {
    if (this.orderForm.valid) {
      this.isSubmitted = true;
    } else {
      this.orderForm.markAllAsTouched();
    }
  }

  getControlClasses(control: AbstractControl): { [key: string]: boolean } {
    const isInvalid = control.invalid && control.touched;

    return {
      'border-red-500': isInvalid,
      'focus:border-red-500': isInvalid,
      'border-pizza-brown': !isInvalid,
      'focus:border-green-500': control.valid,
    };
  }
}
