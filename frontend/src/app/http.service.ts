// http.service.ts
/*
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) { }

  // Implementa aquí las funciones para realizar solicitudes HTTP.
}
*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
    selector: 'app-data',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
@Injectable()
export class HttpService{// implements OnInit {
    responseData: string = '';;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getData().subscribe(data => {
            this.responseData = data;
        });
    }
}
