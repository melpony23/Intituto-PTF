import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  images = [180, 2, 4].map((n) => `https://picsum.photos/id/${n}/600/200`);
  


  constructor(private_config:NgbCarouselConfig) { }

  ngOnInit(): void {
  }

}
