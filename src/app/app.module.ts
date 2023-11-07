import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Home } from './home/home';
import { PanelModule } from 'primeng/panel';

import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { MenuModule } from 'primeng/menu';
import {ButtonModule} from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import {MenubarModule} from 'primeng/menubar';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { Graph } from './graph/graph';
import {ChartModule} from 'primeng/chart';
import {GraphReport} from './graphReport/graphReport';

@NgModule({
  declarations: [
    AppComponent,
    Home,
    Graph,
    GraphReport
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    PanelModule,
    MenuModule,
    ToolbarModule,
    ButtonModule,
    SidebarModule,
    PanelMenuModule,
    MenubarModule,
    SplitButtonModule,
    CascadeSelectModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }