import { ProduitResolver } from './produit/produits.resolver';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProduitComponent } from './produit/produit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  { path: '', redirectTo :'/dashboard',pathMatch:'full' },
  //{ path: 'home', component: HomeComponent },
  { 
    path: 'produits', 
    component: ProduitComponent ,
    resolve :{
      produits:ProduitResolver
    }
},
  { path: 'dashboard', component: DashboardComponent }
 ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [ProduitResolver]
})
export class AppRoutingModule { }

