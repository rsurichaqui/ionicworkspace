import { Component, OnInit } from '@angular/core';
//import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})

export class FilmsPage implements OnInit { 

  films: Observable<any>; 
  filterTerm: string;
  
  constructor(private router: Router, private api: ApiService) { } 

  ngOnInit() { 
    this.films = this.api.getFilms(); 
  } 
  
  openDetails(film) { 
    let split = film.url.split('/'); 
    //console.log(split);
    let filmId = split[split.length-2]; 
    //console.log(film.episode_id);
    //let filmId = film.episode_id; 
    //this.router.navigateByUrl(`/tabs/films/${filmId}`); 
    this.router.navigateByUrl(`/films/${filmId}`); 
  } 
}
