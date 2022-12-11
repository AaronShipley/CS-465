import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication';
import { TripDataService } from "../services/trip-data.service";

@Component({
  selector: 'app-delete-trip',
  templateUrl: './delete-trip.component.html',
  styleUrls: ['./delete-trip.component.css']
})
export class DeleteTripComponent implements OnInit {

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
  }
  public isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  ngOnClick() {
    
  }
}
