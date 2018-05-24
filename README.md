# Validation-on-Mat-Table
basic example of applying validation on tabular data
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive,Input  } from '@angular/core';

@Directive({
  selector: '[dateValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ValidDateDirective,
    multi: true
  }]

})

export class ValidDateDirective implements Validator {
  //tslint:disable-next-line:no-input-rename
  @Input('dateValidator') defaultValue1: string;
  @Input('dateValidator') defaultValue2: string;
  validate(control: AbstractControl): { [key: string]: any } | null {
   // debugger;
    console.log(this.defaultValue1 + '\n'+this.defaultValue2);
    return control.value === '-1' ? { 'defaultSelected': true } : null;
  }
}


<input id="name" name="name" class="form-control"
               required minlength="4"
               [(ngModel)]="user.email" #name="ngModel" dateValidator="hellog,maaa,dfsdfsd">


        <div *ngIf="name.invalid && (name.dirty || name.touched)" class="alert1 alert-danger1">

          <mat-error *ngIf="name.errors.required">Name is required.</mat-error>
          <mat-error *ngIf="name.errors.defaultSelected">not allowed.</mat-error>
        </div>
