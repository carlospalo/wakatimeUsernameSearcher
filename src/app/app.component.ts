import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Pipe, PipeTransform } from '@angular/core';
import {Injectable} from '@angular/core'
import 'rxjs/Rx';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
@Injectable()
// export class ServerService{


// };

export class AppComponent {
servers: string[] = new Array();
items = new Array();

// constructor(http: Http){

// 	http.get("https://wakatime.com/api/v1/leaders?page=2")
// 	.subscribe(
// 		(res: Response)=> 
// 		{
	// 			const city = res.json().data;
	// 			console.log(city);
	// 		this.username=city.rank;
	// 		})

	// };
	constructor(private http: Http){}
	getServers(id: number){
		return this.http.get("https://wakatime.com/api/v1/leaders?page="+id)
		.map(
			(response:Response)=>{
				const data=response.json().data;
				return data;
			})
	}

	onGet(){
		  for(var i = 0; i <= 30; i++){
  	
this.getServers(i)
		.subscribe(
			(servers: string[])=>{this.servers =servers;
				// console.log(this.servers );
				 console.log(servers);
				 const helperArray = [];
        for (let key in servers) {
          this.items.push(servers[key]);
        };
			// this.items.push(helperArray);
			},
			(error)=>console.log(error)
			)
    ;
     
  }
		//console.log(this.items);


	}
}