import { ProduitsService } from './../../services/produit.service';
import { Produit } from './../model/produit';
import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl ,FormBuilder ,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
 
  private produits:Produit[];
  produitForm : FormGroup;
  selectedProduit : Produit;
  operation : string= "add";

  constructor(private produitsService:ProduitsService,
              private formBuilder:FormBuilder,
              private activatedRoute:ActivatedRoute
  ) { 
   
  }

  ngOnInit() {

    this.createForm();
    this.initProduit();
   // this.loadProduits();
   this.produits = this.activatedRoute.snapshot.data.produits;
  }

  loadProduits(){
    this.produitsService.getProduits().subscribe(

      (data:any)=>{this.produits=data},

      (error) => {
        console.log('Something went wrong with API Call !!!! '+error);
       },
       () => {
        console.log('Loading produits done !');
       }
  
    );
  }


  addProduit(){
    const produit = this.produitForm.value;
    this.produitsService.addProduit(produit).subscribe(
            (res)=>{
              this.initProduit();
              this.loadProduits();
             },
            (error) => {
              console.log('Something went wrong with API Add Produit !!!! '+error);
             }
        
          );
  }

  createForm(){
    this.produitForm = this.formBuilder.group({
      ref: ['',Validators.required],
      quantite: '',
      prixUnitaire: ''
    });
  }
  updateProduit(){
    this.produitsService.updateProduit(this.selectedProduit).subscribe(
            (res)=>{
              this.initProduit();
              this.loadProduits();
             },
            (error) => {
              console.log('Something went wrong with API Update Produit !!!! '+error);
             }
        
          );
  }

  initProduit(){
    this.selectedProduit = new Produit();
    this.createForm();
  }

  deleteProduit(){
    this.produitsService.deleteProduit(this.selectedProduit.id).subscribe(
      (res)=>{
        this.selectedProduit = new Produit();
        this.loadProduits();
       },
      (error) => {
        console.log('Something went wrong with API Delete Produit !!!! '+error);
       },
       ()=>{
        console.log("delete done ! ");
       }
  
    ); 
  }

}
