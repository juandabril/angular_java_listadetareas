// data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    // Implementa las funciones para administrar tus datos aquí.
    private baseUrl = 'http://localhost:8080'; // Reemplaza con la URL de tu servidor Spring Boot

    constructor(private http: HttpClient) { }

    getData(): Observable<string> {
        return this.http.get<string>(`${this.baseUrl}/api/data`);
    }
}