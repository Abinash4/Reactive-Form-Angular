import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-material-form',
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.scss']
})
export class MaterialFormComponent implements OnInit {

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: [''],
      lastName: [''],
      address: [''],
      gender: [''],
      country: [''],
      subscribe: [false],
    });
  }
  ngOnInit(): void {
  }

  form: FormGroup;


  onSubmit() {
    // Handle form submission here
    console.log(this.form.value);
  }

}
