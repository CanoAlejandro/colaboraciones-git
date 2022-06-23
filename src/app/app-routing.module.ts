import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './pages/news/news.component';
import { CardregisterComponent } from './pages/cardregister/cardregister.component';

const routes: Routes = [
  {path: "news", component: NewsComponent},
{path: "cards", component: CardregisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
