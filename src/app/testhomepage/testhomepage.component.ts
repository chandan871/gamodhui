import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-testhomepage',
  templateUrl: './testhomepage.component.html',
  styleUrls: ['./testhomepage.component.css']
})
export class TesthomepageComponent implements OnInit {
 
 
  constructor(private activateroute:ActivatedRoute) { }

  ngOnInit() {
  let paramdata =  this.activateroute.snapshot.paramMap.get('testtype');
    console.log(paramdata);
    
  }

}
