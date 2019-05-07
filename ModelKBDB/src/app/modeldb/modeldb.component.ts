import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-modeldb',
  templateUrl: './modeldb.component.html',
  styleUrls: ['./modeldb.component.css']
})
export class ModeldbComponent implements OnInit {

  experiments: [];
  displayedColumns = ['model_name', 'InputTensors', 'OutputTensor', 'Optimizer', 'AccuracyValue'];
  dataSource;


  constructor(private api: ApiService) { }

  ngOnInit() {

    this.api.getExperiments()
      .subscribe(res => {
        console.log(res);
        this.experiments = res;
        this.dataSource = new MatTableDataSource(this.experiments);
      }, err => {
        console.log(err);
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

// export class ExperimentDataSource extends DataSource<any> {
//   constructor(private api: ApiService) {
//     super();
//   }

//   connect() {
//     return this.api.getExperiments();
//   }

//   disconnect() {

//   }
// }
