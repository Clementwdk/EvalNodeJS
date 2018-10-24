import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProjectService} from '../../service/project.service';
import { ActivatedRoute } from "@angular/router";
 
 @Component({ 
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {

project;
projectId;



  constructor(private projectService:ProjectService, private route:ActivatedRoute,private route:Router) { 

    this.route.params.subscribe((params) => {
          this.projectId=params['id'];
          console.log(params['id']);
      })
      
this.proiectsService.getProject(this.projectId).subscribe(project=>{


	this.project=project
	console.log(this.project);
});
}
  ngOnInit() {
  }


  deleteProject(){
      this.projectService.delete(this.projectId).subscribe(project=>{
          console.log(this.project);
          // on retourne sur la page users
           this.router.navigate['projects'];
      });

  }
}
