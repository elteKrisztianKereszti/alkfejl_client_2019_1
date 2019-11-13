import { Component, OnInit } from '@angular/core';
import { Issue } from "../issue";
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {
  public filteredIssues: Issue[];
  public selectedStatus: string;
  public selectedIssue: Issue;

  private issues: Issue[] = [];

  constructor(
    private issueService: IssueService
  ) { 
    this.issues = issueService.getIssues();
  }

  ngOnInit(): void {
    this.selectedStatus = '';
    this.filter();
  }

  onFilterChange(status: string): void {
    this.selectedStatus = status;
    this.filter();
  }

  onSelectIssue(issue: Issue): void {
    this.selectedIssue = issue;
  }

  onFormSubmit(issue: Issue): void {
    if (issue.id > 0) {
      this.selectedIssue.location = issue.location;
      this.selectedIssue.description = issue.description;
    } else {
      this.selectedIssue.id = Math.floor(Math.random()*1000000);
      this.selectedIssue.location = issue.location;
      this.selectedIssue.description = issue.description;
      this.selectedIssue.status = 'NEW';
      this.issues.push(this.selectedIssue);
    }
    this.selectedIssue = null;
  }
  
  onNewClick(): void {
    this.selectedIssue = new Issue();
  }

  private filter(): void {
    this.filteredIssues = this.selectedStatus === ''
    ? this.issues
    : this.issues.filter(issue => issue.status === this.selectedStatus);
  }
}
