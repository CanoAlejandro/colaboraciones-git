import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { FormCardComponent } from './components/form-card/form-card.component';
import { NewsComponent } from './pages/news/news.component';
import { CardregisterComponent } from './pages/cardregister/cardregister.component';
import{HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormCardComponent,
    NewsComponent,
    CardregisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
