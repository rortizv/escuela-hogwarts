import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatTableModule,
    MatSelectModule,
    MatSnackBarModule,
    FlexLayoutModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BrowserModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatSelectModule,
    MatSnackBarModule,
    MatFormFieldModule,
    FlexLayoutModule,
    HttpClientModule
  ]
})
export class SharedModule { }
