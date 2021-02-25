import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.scss']
})
export class ProductcardComponent implements OnInit {

  buttonsavalible:boolean = false;
  constructor() { }
  @Input() product:Product;
  ngOnInit(): void {
  }

}
