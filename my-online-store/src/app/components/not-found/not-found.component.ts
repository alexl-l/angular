import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/global/rest.service';

@Component({
  selector: 'mos-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  public banner = {
    msg: '',
    img: ''
   };

  constructor(private rest: RestService) { }

  ngOnInit(): void {
    this.rest.getBanner().subscribe((data) => {
      this.banner = data;
      console.log(this.banner);
    }, (error) => {
      console.error(error);
    });
  }

}
