import { Component, OnInit } from '@angular/core';
import { MyClass } from "./my-class";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  emails: Array<MyClass>

  constructor ( ){ }
  ngOnInit(){
    this.emails = [
    {email:"ada@lovelace", importance:true, subject:"Programming", content: "Enchantress of Numbers"},
    {email:"gabe@newel.com", importance:false, subject:"HL3!", content: "Just Kiddding.."},
    {email:"john@carmac.com", importance:false, subject:"Updated Algo", content: "New algorithm for shadow volumes."},
    {email:"BILL@gates.com", importance:true, subject:"New Windows", content: "Windows XI will launch in year 2100"},
    ]
  }
}

