<div class="">
  <mat-table [dataSource]="dataSource">
    <ng-container matColumnDef="name">
      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>
      <mat-cell *matCellDef="let user"> {{user.name}} </mat-cell>
    </ng-container>
    <ng-container matColumnDef="email">
      <mat-header-cell *matHeaderCellDef> E-Mail </mat-header-cell>
      <mat-cell *matCellDef="let user;let i = index;" >
        <div id="{{i}}-info">
          index: {{i}}
       
        </div>
        {{user.email}}

        <input id="name" name="name" class="form-control"
               required minlength="4"
               [(ngModel)]="user.email" #name="ngModel" dateValidator="hellog,maaa,dfsdfsd">


        <div *ngIf="name.invalid && (name.dirty || name.touched)" class="alert1 alert-danger1">

          <mat-error *ngIf="name.errors.required">Name is required.</mat-error>
          <mat-error *ngIf="name.errors.defaultSelected">not allowed.</mat-error>
        </div>

        <input type="submit" value="Pay" (click)="save(i)" />
        <p #pmessage>msg 0</p>
        row:{{row|json}}


      </mat-cell>
    </ng-container>

    <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
    <mat-row *matRowDef="let row; columns: displayedColumns;let rIndex = index;" ></mat-row>
  </mat-table>
</div>

