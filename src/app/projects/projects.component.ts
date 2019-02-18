import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  code = `#include <iostream>;
using namespace std;

int main() {
  cout << "Hello, World!" << endl;
  return 0;
}`

  constructor() { }

  ngOnInit() {
  }

}
