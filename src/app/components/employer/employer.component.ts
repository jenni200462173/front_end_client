import { Component, OnInit } from '@angular/core';
// service to inteact w/server api
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html'
 
})
export class EmployerComponent implements OnInit {
  employers:any
  name: string | undefined
  location:string | undefined
  description:string| undefined
  website: string | undefined
  constructor(private service: EmployerService) { }

  getEmployers(): void {
    this.service.getEmployers().subscribe(response => {
      this.employers = response
    })
  }
  ngOnInit(): void {
    this.getEmployers()
  }

}
