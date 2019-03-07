import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empoloyees',
  templateUrl: './empoloyees.component.html',
  styleUrls: ['./empoloyees.component.css']
})
export class EmpoloyeesComponent implements OnInit {

  employees: any;
  offices: any;
  finalArr = [];

  constructor() {
    this.employees = [
      { fname: "John", lname: "James", state: "New York" },
      { fname: "John", lname: "Booth", state: "Nebraska" },
      { fname: "Steve", lname: "Smith", state: "Nebraska" },
      { fname: "Stephanie", lname: "Smith", state: "New Hampshire" },
      { fname: "Bill", lname: "Kydd", state: "New Mexico" },
      { fname: "Bill", lname: "Cody", state: "Wyoming" }
    ]

    this.offices = [
      { state: "New York", city: "Albany" },
      { state: "Nebraska", city: "Omaha" },
      { state: "New Mexico", city: "Albuquerque" },
      { state: "New Hampshire", city: "Manchester" },
      { state: "California", city: "Redding" }
    ]

    let self = this;
    for (let g = 0; g < self.employees.length; g++) {
      for (let h = 0; h < self.offices.length; h++) {
        if (self.employees[g].state === self.offices[h].state) {
          this.finalArr.push(self.employees[g]);
          this.finalArr[this.finalArr.length - 1].city = self.offices[h].city;
          console.log(this.finalArr);
          break;
        }
      }
    }
  }
  ngOnInit() {
  }

}
