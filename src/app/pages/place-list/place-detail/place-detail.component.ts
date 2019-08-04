import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Place } from 'src/app/models/place';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.scss']
})
export class PlaceDetailComponent implements OnInit {
  @Input() place: Place | null = null;
  @Output() updatePlaceInfo: EventEmitter<any> = new EventEmitter();
  get googleMapLink(): string {
    return this.place ? 'http://maps.apple.com/?daddr=' + this.place.addr : '';
  }
  constructor() {}

  ngOnInit() {}

  protected update() {
    this.updatePlaceInfo.emit(this.place);
  }
}
