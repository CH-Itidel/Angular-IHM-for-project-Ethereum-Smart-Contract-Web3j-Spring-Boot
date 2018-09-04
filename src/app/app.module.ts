import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContractsComponent } from './contracts/contracts.component';
import {RouterModule, Routes} from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { AboutComponent } from './about/about.component';
import {HttpClientModule} from '@angular/common/http';
import { ViewOrderComponent } from './view-order/view-order.component';
import { ViewInvoiceComponent } from './view-invoice/view-invoice.component';
import { ConfirmDeliverationComponent } from './confirm-deliveration/confirm-deliveration.component';
import { SendPriceComponent } from './send-price/send-price.component';
import { SendInvoiceComponent } from './send-invoice/send-invoice.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const appRoutes : Routes = [

  { path: 'about', component: AboutComponent},
  { path: 'viewOrder/:id', component: ViewOrderComponent},
  { path: 'viewInvoice/:id', component: ViewInvoiceComponent},
  { path: 'sendPrice/:id', component: SendPriceComponent},
  { path: 'sendInvoice/:id', component: SendInvoiceComponent},
  { path: 'ConfirmDeliveration/:id', component: ConfirmDeliverationComponent},
  { path: 'contracts', component: ContractsComponent},
  { path: 'orders', component: OrdersComponent},
  { path: 'invoices', component: InvoicesComponent},
  { path: 'confirmDelivery/:id', component: ConfirmDeliverationComponent},
  { path: '', redirectTo: '/about', pathMatch: 'full'}

];
@NgModule({
  declarations: [
    AppComponent,
    ContractsComponent,
    OrdersComponent,
    InvoicesComponent,
    AboutComponent,
    ViewOrderComponent,
    ViewInvoiceComponent,
    ConfirmDeliverationComponent,
    SendPriceComponent,
    SendInvoiceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
