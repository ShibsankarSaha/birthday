import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myimage1:string="assets/images/pic1.png";
  myimage2:string="assets/images/pic2.png";

  users: Object
  constructor(private data:DataService) { }

  ngOnInit(): void {

    this.data.getusers().subscribe(data=>{
      this.users=data;
      console.log(this.users);
    
      

    }
    );
  }



}
