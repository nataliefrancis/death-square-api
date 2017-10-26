import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ActivatedRoute, Routes } from '@angular/router';

@Component({
  selector: 'app-info-window',
  templateUrl: './info-window.component.html',
  styleUrls: ['./info-window.component.css']
})
export class InfoWindowComponent implements OnInit {

	dataBanks;
	turretNumber;

	findTurret(turretNumber) {
		console.log("Finding " + turretNumber);
		this.http.get('http://localhost:3000/api/turret/' +turretNumber)
		.toPromise()
		.then(response => this.dataBanks = response.json());
	}

  constructor(
  	private http: Http,
  	private route : ActivatedRoute
  	) { }

  ngOnInit() {
  	this.route.paramMap
        .subscribe( params => {
        	this.findTurret(params.get('id'));
  		});
  	}

}
