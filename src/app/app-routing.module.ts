import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProduitResolver } from './produit/produits.resolver';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProduitComponent } from './produit/produit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  { 
    path: '', 
    redirectTo :'/home',
    pathMatch:'full'
  },
  {
     path: 'home', 
     component: HomeComponent ,
     children: [
      { 
        path: 'produits', 
        component: ProduitComponent ,
        resolve :{
          produits:ProduitResolver
        },
        outlet:'contentOutlet'
      },
      {
         path: 'dashboard', 
         component: DashboardComponent ,
         outlet:'contentOutlet'
      }
     ]
  },
  {
     path: 'login', 
     component: LoginComponent 
  }
 ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [ProduitResolver]
})
export class AppRoutingModule { }

