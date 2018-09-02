
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";


@Injectable()
export class ProduitService {
 
  constructor(private httpClient: HttpClient) { }
  /*
  getContacts(kw:string,page:number,size:number) {
     return this.httpClient.get('http://localhost:8090/contactsApp/api/searchContacts?key='+kw+'&page='+page+'&size='+size);
  }

saveContact(contact:Contact,) {
    return this.httpClient.post<Contact>('http://localhost:8090/contactsApp/api/contacts',contact);
 }

getContactById(id:number) {
  return this.httpClient.get<Contact>('http://localhost:8090/contactsApp/api/contacts/'+id);
}

updateContact(contact:Contact) {
  return this.httpClient.put<Contact>('http://localhost:8090/contactsApp/api/contacts/'+contact.id,contact);
}

deleteContactById(id:number) :Observable<void> {
  return this.httpClient.delete<void>('http://localhost:8090/contactsApp/api/contacts/'+id);
}
*/

}
