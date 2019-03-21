import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modeldb',
  templateUrl: './modeldb.component.html',
  styleUrls: ['./modeldb.component.css']
})
export class ModeldbComponent implements OnInit {

  experiments: any;
  displayedColumns = ['model_name', 'InputTensors', 'OutputTensor', 'Optimizer', 'AccuracyValue'];
  dataSource = new ExperimentDataSource(this.api);

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getExperiments()
      .subscribe(res => {
        console.log(res);
        this.experiments = res;
      }, err => {
        console.log(err);
      });
  }

}

export class ExperimentDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super();
  }

  connect() {
    return this.api.getExperiments();
  }

  disconnect() {

  }
}
