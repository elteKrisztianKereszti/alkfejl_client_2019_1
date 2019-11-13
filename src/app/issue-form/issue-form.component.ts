import { Component, OnInit, OnChanges, Input, Output, EventEmitter  } from '@angular/core'; 
import { Issue } from '../Issue';

@Component({
  selector: 'issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css']
})
export class IssueFormComponent implements OnInit {

  @Input() issue: Issue

  constructor() { }

  ngOnInit() {
  }

  model: Issue
  @Output() onSubmit = new EventEmitter<Issue>();
  
  
  ngOnChanges() {
    this.model = Object.assign({}, this.issue);
  }

  
  submit(form) {
    if (!form.valid) {
      return;
    }
    this.onSubmit.emit(this.model);
  }

}
