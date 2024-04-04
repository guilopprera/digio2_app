import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { URL_API } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) {

  }

  public obterTodos(): Observable<any> {
    return this.http.get(URL_API + "obtertodos", {});
  }

  public async getListNgRx(): Promise<Observable<any>> {
    return await this.http.get("./assets/data.json");
  }
}
