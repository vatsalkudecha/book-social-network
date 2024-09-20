import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-waiting-list',
  templateUrl: './waiting-list.component.html',
  styleUrls: ['./waiting-list.component.scss']
})
export class WaitingListComponent implements OnInit {
  isLoading: boolean = true;
  isComplete: boolean = false;
  ngOnInit(): void {
    // Simulate loading for 5 seconds
    setTimeout(() => {
      this.isLoading = false;
      this.isComplete = true;
    }, 5000); // Adjust time as needed
  }
}