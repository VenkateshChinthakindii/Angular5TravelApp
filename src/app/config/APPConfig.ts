import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class AppSetup {
    headers: any;
    options: any;
    fileHeaders: any;
    fileOptions: any;
    FileExtensions: any[] = [];
    ImageExtensions: any[] = [];
    pageSize: number;

    snackbarVerticalPosition:string;
    snackbarDuration:number;
    siteDisplayName:string='';
    //public static isloggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    constructor() {

        this.headers = new Headers();
        this.headers.append("Accept", 'application/json');
        this.headers.append('Content-Type', 'application/json');      
        this.options = new RequestOptions({ headers: this.headers }); 

        // this.fileHeaders =  new Headers();
        // this.fileOptions=new RequestOptions({ headers: this.fileHeaders });  

        this.ImageExtensions = [".jpeg", ".png", ".jpg"];
        this.FileExtensions = [".pdf", ".xls", ".xlsx", ".csv", ".doc", ".docx", ".txt"];
        this.pageSize = 10;
        this.snackbarVerticalPosition='top';
        this.snackbarDuration=3000;
        this.siteDisplayName='Bhageerathi Travels';
    }

    //LocalStorage Read and write the Authentication token
    write(key: string, value: any) {
        if (value) {
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value);
    }

    read<T>(key: string): T {
        let value: string = localStorage.getItem(key);

        if (value && value != "undefined" && value != "null") {
            return <T>JSON.parse(value);
        }

        return null;
    }

}