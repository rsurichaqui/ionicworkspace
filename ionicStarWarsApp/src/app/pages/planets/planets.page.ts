import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {

  ionicForm: FormGroup;
  planets: Observable<any>;
  planetid: number;
  isSubmitted = false;
  fecha_actual = Date.now();
  isdni: boolean;
  tipodoc: string;

  constructor(private router: Router, private api: ApiService, public formBuilder: FormBuilder) { }

  ngOnInit() {
    //this.planets = this.api.getPlanets();
    this.ionicForm = this.formBuilder.group({
      name: [''],
      rotation_period: [''],
      orbital_period: [''],
      diameter: [''],
      climate: [''],
      gravity: ['']
    })
  }
  getPlanetData(id) {
    this.api.getPlanet(id).subscribe(res => {
      if (res['name'] != null) {
        this.ionicForm.setValue({
          name: res['name'],
          rotation_period: res['rotation_period'],
          orbital_period: res['orbital_period'],
          diameter: res['diameter'],
          climate: res['climate'],
          gravity: res['gravity']
        })
      }else{
        this.ionicForm.setValue({
          name: '',
          rotation_period: '',
          orbital_period: '',
          diameter: '',
          climate: '',
          gravity: ''
        })
      }
    })
  }
  updateestadodni(){
    console.log('Nuevo valor ' + this.isdni)
  }
  updatetopodoc(){
    console.log('Nuevo valor ' + this.tipodoc)
  }
  //openDetails(planet) { 
  //  let split = planet.url.split('/'); 
  //  let planetId = split[split.length-2]; 
  //  //console.log(split);
  //  //console.log(planetId);
  //  this.router.navigateByUrl(`/planets/${planetId}`); 
  //} 
  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      alert('Please provide all the required values!')
      console.log('Please provide all the required values!')
      return false; 
    } else {
      console.log(this.ionicForm.value)
    }
  }
}
