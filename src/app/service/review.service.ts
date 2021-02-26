import { Injectable } from '@angular/core';
import {Reviews} from '../DUMMY_DATA';
import { Review } from '../model/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor() { }

  getAllReviews():Array<Review>{
    return Reviews;
  }
}
