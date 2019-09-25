import {Component, OnInit} from '@angular/core';

export interface CompanyList {
  id: number;
  name: string;
  date: string;
}

const companies: CompanyList[] = [
  {id: 1, name: 'Travel Booking Bangladesh ltd', date: '25 June 2019'},
  {id: 2, name: 'Cloudy Info Tech ltd', date: '02 July 2019'},
  {id: 3, name: 'Travel Booking Bangladesh ltd', date: '25 August 2019'},
  {id: 4, name: 'Travel Booking Bangladesh ltd', date: '5 September 2019'},
  {id: 5, name: 'Travel Booking Bangladesh ltd', date: '23 December 2019'},
  {id: 6, name: 'Travel Booking Bangladesh ltd', date: '20 January 2019'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'date'];
  dataSource = companies;

  constructor() {
  }

  ngOnInit() {

  }

}
