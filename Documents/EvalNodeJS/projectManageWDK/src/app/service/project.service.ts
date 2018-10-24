import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class ProjectService {

  apiUrl="http://localhost:3000/project/";

datatopost;

httpOptions = {
 headers: new HttpHeaders({
   'Content-Type':  'application/json'
 })};

  constructor(private http:HttpClient,private router:Router) {}

getProjects(){
    return this.http.get(this.apiUrl);
}

getProject(id){
    return this.http.get(this.apiUrl+id);
}

createProject(nom,dateFin,dateDebut,client,total,statut){


    const payload =
        {
        "nom":nom,
		"dateDebut":dateDebut,
		"dateFin":dateFin,
		"client":client,
		"total":total,
		"statut":statut
        }
    this.datatopost=JSON.stringify(payload);

    return this.http.post(this.apiUrl,this.datatopost,this.httpOptions).subscribe(
        res =>{
            console.log(res);
        },
        err => {
            console.log(err.message);
        }
    );
}

updatedUser(nom,dateFin,dateDebut,client,total,statut){

    const payload =
        {
        "nom":nom,
		"dateDebut":dateDebut,
		"dateFin":dateFin,
		"client":client,
		"total":total,
		"statut":statut
        }

        this.datatopost=JSON.stringify(payload);

        return this.http.put(this.apiUrl+id,this.datatopost,this.httpOptions).subscribe(
            res =>{
                console.log(res);
            },
            err => {
                console.log(err.message);
            }
        );

}

delete(id){
    return this.http.delete(this.apiUrl+id);
}


}
