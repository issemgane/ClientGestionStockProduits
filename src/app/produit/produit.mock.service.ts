import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Produit } from './../model/produit';

@Injectable()
export class ProduitMockService{

    private PRODUITS : Produit[] = [];
    //readonly 
    constructor(){
        let p1 : Produit = new Produit('Ax2',5,2500);
        let p2 : Produit = new Produit('Ax3',6,3400);
        let p3 : Produit = new Produit('Ax4',2,1200);
        this.PRODUITS.push(p1);
        this.PRODUITS.push(p2);
        this.PRODUITS.push(p3);
    }

    public getProduits():Produit[]{
        return  this.PRODUITS;
    }
}