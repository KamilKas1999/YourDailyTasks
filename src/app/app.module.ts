import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 import { AuthComponent } from './auth/auth.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
 import { ControlPanelComponent } from './control-panel/control-panel.component';
  import { NavbarComponent } from './navbar/navbar.component';
 import { MainPanelComponent } from './main-panel/main-panel.component';
import { ItemComponent } from './main-panel/item/item.component';
import { PaperDirective } from './main-panel/paper.directive';
import { AddNewTaskComponent } from './main-panel/add-new-task/add-new-task.component';
import { DatePipePipe } from './shared/date-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ControlPanelComponent,
    NavbarComponent,
    MainPanelComponent,
    ItemComponent,
    PaperDirective,
    AddNewTaskComponent,
    DatePipePipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
