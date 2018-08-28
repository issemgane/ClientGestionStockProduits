import { Produit } from './../model/produit';
import { ProduitMockService } from './produit.mock.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  private produits:Produit[];
  constructor(public produitMockService:ProduitMockService) { }

  ngOnInit() {
    this.produits=this.produitMockService.getProduits();
  }

}
