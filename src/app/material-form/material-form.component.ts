import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-material-form',
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.scss']
})
export class MaterialFormComponent implements OnInit {

  form: FormGroup;
  constructor() {
    
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl[''],
      lastName: new FormControl[''],
      address: new FormControl[''],
      gender: new FormControl[''],
      country:new FormControl [''],
      subscribe: new FormControl['false']
    });

    
  }



  onSubmit() {
    // Handle form submission here
    console.log(this.form.value);
  }

}
