import { API_URLS } from './../app/config/api.url.config';
import { Produit } from './../app/model/produit';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

 
@Injectable()
export class ProduitsService {


  constructor(private httpClient: HttpClient) { }
  
  getProduits():Observable<any> {
    // return this.httpClient.get('http://localhost:8090/contactsApp/api/searchContacts?key='+kw+'&page='+page+'&size='+size);
    return this.httpClient.get(API_URLS.PRODUIT_URL);

  }

  addProduit(produit : Produit):Observable<any> {
      return this.httpClient.post(API_URLS.PRODUIT_URL,produit);
  }

  updateProduit(produit : Produit):Observable<any> {
    return this.httpClient.put(API_URLS.PRODUIT_URL,produit);
  }
  deleteProduit(ref : string):Observable<any> {
    return this.httpClient.delete(API_URLS.PRODUIT_URL+'/'+ref);
  }



}
