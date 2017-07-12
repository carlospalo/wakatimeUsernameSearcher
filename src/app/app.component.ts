import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Pipe, PipeTransform } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	username="";
constructor(http: Http){
	
	http.get("https://wakatime.com/api/v1/leaders?page=2")
	.subscribe(
		(res: Response)=> 
		{
			const city = res.json().data;
			console.log(city);
		this.username=city.rank;
		})

}

}