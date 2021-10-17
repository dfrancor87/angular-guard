import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../posts/models/post';
import { Usuario } from '../usuarios/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {
  public baseURLUsers = environment.apiURL + '/users/';
  public baseURLPosts = environment.apiURL + '/posts/';


  constructor(
    private http: HttpClient
  ) { }

  public obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseURLUsers);
  }

  public obtenerPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseURLPosts);
  }

  public obtenerPostPorUsuario(id: string): Observable<Post[]> {
    const url = `${this.baseURLPosts}?userId=${id}`;
    return this.http.get<Post[]>(url);
  }

}
