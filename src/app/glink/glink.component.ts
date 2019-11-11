import { Component, Input } from '@angular/core';

@Component({
  selector: 'glink',
  templateUrl: './glink.component.html',
  styleUrls: ['./glink.component.css']
})
export class GlinkComponent {
  @Input() searchField: string;
  @Input() num: number;
}
