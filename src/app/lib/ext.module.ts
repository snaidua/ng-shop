import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { QnToolbarComponent } from './ui/qn-toolbar/qn-toolbar.component';
import { QnSpacerDirective } from './ui/qn-spacer.directive';


@NgModule({
  declarations: [
    QnToolbarComponent,
    QnSpacerDirective
  ],
  imports: [
    CommonModule,
    MatToolbarModule, MatSidenavModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatListModule 
  ],
  exports: [
    MatToolbarModule, MatSidenavModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatListModule,
    
    QnToolbarComponent, QnSpacerDirective
  ]
})
export class ExtModule { }
