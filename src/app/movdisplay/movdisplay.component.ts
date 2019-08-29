import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { from } from 'rxjs';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-movdisplay',
  templateUrl: './movdisplay.component.html',
  styleUrls: ['./movdisplay.component.css']
})
export class MovdisplayComponent implements OnInit {
  getmname='';
  getactor='';
  getactress='';
  getdirector='';

  onSubmit(data:NgForm)
  {
  this.apiService.insertData(data.value).subscribe((response)=>
  {
    console.log(response);
    alert("Successfully inserted");
  })
   }

  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }

}
