import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './allComps/home/home.component';
import { ProductsComponent } from './allComps/products/products.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyOffPipe } from './pipes/my-off.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule} from '@angular/forms';
import { firstInterceptor } from './interceptors/first.interceptor';
import { ParentComponent } from './allComps/parent/parent.component';
import { ChildComponent } from './allComps/child/child.component';
import { FeatursModule } from './featurs/featurs.module';
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    MyOffPipe,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FeatursModule,
    NgxPaginationModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:firstInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
