import { Injectable } from '@angular/core';

@Injectable()
export class DataServiceService {

  constructor() { }

  fetchData() {
    return [
      {"Article": "10254", "Category": "Tools", "Classification": "Fixture", "Cost": 20},
      {"Article": "10534", "Category": "Tools", "Classification": "Panel", "Cost": 30},
      {"Article": "12345", "Category": "Auto", "Classification": "Rod", "Cost": 3},
      {"Article": "54321", "Category": "Auto", "Classification": "Rod", "Cost": 10},
      {"Article": "24455", "Category": "Bakery", "Classification": "Plates", "Cost": 40},
      {"Article": "24455", "Category": "Tools", "Classification": "Plates", "Cost": 40},
      {"Article": "54321", "Category": "Auto", "Classification": "Rod", "Cost": 10}/*,
      {"Article": "", "Category": "", "Classification": "", "Cost": 0},
      {"Article": "", "Category": "", "Classification": "", "Cost": 0},
      {"Article": "", "Category": "", "Classification": "", "Cost": 0},
      {"Article": "", "Category": "", "Classification": "", "Cost": 0},
      {"Article": "", "Category": "", "Classification": "", "Cost": 0},
      {"Article": "", "Category": "", "Classification": "", "Cost": 0},
      {"Article": "", "Category": "", "Classification": "", "Cost": 0},
      {"Article": "", "Category": "", "Classification": "", "Cost": 0}*/
    ];
  }

}
