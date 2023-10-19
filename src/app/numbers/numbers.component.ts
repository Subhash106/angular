import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

type CustomNumber = { math: number; eng: string; date: string };

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css'],
})
export class NumbersComponent implements OnInit {
  title = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Numbers');
    }, 5000);
  });

  numbers: Array<CustomNumber> = [
    {
      math: 1,
      eng: 'One',
      date: moment('12/10/2020', 'DD/MM/YYYY').toISOString(),
    },
    {
      math: 2,
      eng: 'Two',
      date: moment('12/10/2020', 'DD/MM/YYYY').toISOString(),
    },
    {
      math: 3,
      eng: 'Three',
      date: moment('12/10/2021', 'DD/MM/YYYY').toISOString(),
    },
    {
      math: 4,
      eng: 'Four',
      date: moment('12/11/2020', 'DD/MM/YYYY').toISOString(),
    },
    {
      math: 5,
      eng: 'Five',
      date: moment('12/1/2020', 'DD/MM/YYYY').toISOString(),
    },
    {
      math: 6,
      eng: 'Six',
      date: moment('1/10/2020', 'DD/MM/YYYY').toISOString(),
    },
    {
      math: 7,
      eng: 'Seven',
      date: moment('2/10/2010', 'DD/MM/YYYY').toISOString(),
    },
    {
      math: 8,
      eng: 'Eight',
      date: moment('1/1/2020', 'DD/MM/YYYY').toISOString(),
    },
  ];

  filteredNumbers: Array<CustomNumber> = [];

  constructor() {}

  ngOnInit(): void {
    this.filteredNumbers = this.numbers;
  }

  oddOnly() {
    this.filteredNumbers = this.numbers.filter(
      (number) => number.math % 2 !== 0
    );
  }

  evenOnly() {
    this.filteredNumbers = this.numbers.filter(
      (number) => number.math % 2 === 0
    );
  }
}
