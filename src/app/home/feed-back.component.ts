import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-back',
  templateUrl: './feed-back.component.html'
})
export class FeedBackComponent implements OnInit {


  public rating = '2'
  constructor() { }

  ngOnInit(): void {
  }

}
