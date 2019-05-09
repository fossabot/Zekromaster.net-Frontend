import { Component, OnInit, Input } from '@angular/core';
import { OptimageGetterService } from './optimage-getter.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'zek-optimage',
  templateUrl: './optimage.component.html',
  styleUrls: ['./optimage.component.scss']
})
export class OptimageComponent implements OnInit {
  @Input() imageID: string;
  @Input() loadless: boolean;
  @Input() imgStyle: string | SafeUrl;
  image: SafeUrl;

  constructor(
    private imageGetter: OptimageGetterService,
    private sanitizer: DomSanitizer
  ) {
  }

  ngOnInit() {
    this.imageGetter.getImage(this.imageID).subscribe(
      (image) => this.image = this.sanitizer.bypassSecurityTrustUrl(image)
    )
    if (this.loadless === undefined) {
      this.loadless = false;
    }
    if (this.imgStyle === undefined) {
      this.imgStyle = "";
    } else {
      this.imgStyle = this.sanitizer.bypassSecurityTrustStyle(this.imgStyle as string);
    }
  }
}
