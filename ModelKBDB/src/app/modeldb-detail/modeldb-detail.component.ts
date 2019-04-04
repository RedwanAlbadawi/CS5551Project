import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-modeldb-detail',
  templateUrl: './modeldb-detail.component.html',
  styleUrls: ['./modeldb-detail.component.css']
})
export class ModeldbDetailComponent implements OnInit {

  experiment = {};
  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getExperimentDetails(this.route.snapshot.params['id']);
  }

  getExperimentDetails(id) {
    this.api.getExperiment(id)
      .subscribe(data => {
        console.log(data);
        this.experiment = data;
      });
  }

}
