import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-modeldb-detail',
  templateUrl: './modeldb-detail.component.html',
  styleUrls: ['./modeldb-detail.component.css']
})
export class ModeldbDetailComponent implements OnInit {

  searchCriteria: string;
  experiment = {};
  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.searchCriteria = '';
    this.getExperimentsearch(this.route.snapshot.params['id']);
    this.getExperimentDetails(this.route.snapshot.params['id']);
  }

  getExperimentDetails(id) {
    this.api.getExperiment(id)
      .subscribe(data => {
        console.log(data);
        this.experiment = data;
      });
  }
  getExperimentsearch(id) {
    this.api.getExperiment(this.searchCriteria)
      .subscribe(data => {
        console.log(data);
        this.experiment = data;
      });
  }

  clearSearch(){
    this.searchCriteria = '';
    this.api.getExperiment(this.searchCriteria)
  }

}
