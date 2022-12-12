import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";



@Component({
  selector: 'app-delete-trip',
  templateUrl: './delete-trip.component.html',
  styleUrls: ['./delete-trip.component.css']
})
export class DeleteTripComponent implements OnInit {
  editForm: FormGroup;
  submitted = false;

  constructor(
    editForm: FormGroup,
    private router: Router,
    private tripService: TripDataService
  ) { }

  ngOnInit() {
    // retrieve stashed tripId
    let tripCode = localStorage.getItem("tripCode");
    if (!tripCode) {
      alert("Something wrong, couldn't find where I stashed tripCode!");
      this.router.navigate(["list-trips"]);
      return;
    }
    console.log("EditTripComponent#onInit found tripCode " + tripCode);
    
    
    console.log(
      "DeleteTripComponent#onInit calling TripDataService#getTrip('" +
        tripCode +
        "')"
    );
      this.tripService.deleteTrip(tripCode);
    
    
  }
  
  // get the form short name to access the form fields
  get f() {
    return this.editForm.controls;
  }
}
