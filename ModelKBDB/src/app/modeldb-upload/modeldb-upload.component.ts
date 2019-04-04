import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-modeldb-upload',
  templateUrl: './modeldb-upload.component.html',
  styleUrls: ['./modeldb-upload.component.css']
})
export class ModeldbUploadComponent implements OnInit {

  experimentForm: FormGroup;
  model_name: string = '';
  framework: string = '';
  size: string = '';
  epochs: string = '';
  layersCount: string = '';
  InputTensors: string = '';
  OutputTensor: string = '';
  Optimizer: string = '';
  LossFunction: string = '';
  AccuracyValue: string = '';
  LossValue: string = '';

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.experimentForm = this.formBuilder.group({
      'model_name' : [null, Validators.required],
      'framework' : [null, Validators.required],
      'size' : [null, Validators.required],
      'epochs' : [null, Validators.required],
      'layersCount' : [null, Validators.required],
      'InputTensors' : [null, Validators.required],
      'OutputTensor' : [null, Validators.required],
      'Optimizer' : [null, Validators.required],
      'LossFunction' : [null, Validators.required],
      'AccuracyValue' : [null, Validators.required],
      'LossValue' : [null, Validators.required]
    });
  }

  onFormSubmit(form:NgForm) {
    this.api.postExperiment(form)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/modeldb/details', id]);
      }, (err) => {
        console.log(err);
      });
  }

  onFileSelected() {
    console.log('placeholder');
  }
}
