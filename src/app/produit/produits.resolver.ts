import { ProduitsService } from './../../services/produit.service';

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';



@Injectable()
export class ProduitResolver implements Resolve<any>{

    constructor(private produitService : ProduitsService){
        
    }

    resolve() {
       return this.produitService.getProduits();
    }

}