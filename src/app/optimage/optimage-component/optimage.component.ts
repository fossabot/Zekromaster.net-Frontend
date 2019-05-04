import { Component, OnInit, Input } from '@angular/core';
import { OptimageGetterService } from './optimage-getter.service';

@Component({
  selector: 'zek-optimage',
  templateUrl: './optimage.component.html',
  styleUrls: ['./optimage.component.scss']
})
export class OptimageComponent implements OnInit {
  @Input() imageID: string;
  image: string;

  constructor(
    private imageGetter: OptimageGetterService
  ) {
  }

  ngOnInit() {
    this.imageGetter.getImage(this.imageID).subscribe(
      (image) => this.image = image
    )
  }
}
