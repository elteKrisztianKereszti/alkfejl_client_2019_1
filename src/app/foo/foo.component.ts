import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {
  public greeting: string;

  private _greetings: string[];
  private _index: number;

  constructor() {
      this._greetings = [
          'Jó reggelt!',
          'Good morning!',
          'Guten tag!',
          'Buenos dias!'
      ];
      this._index = 0

      this._tick()
  }

  private _tick(): void {
      this.greeting = this._greetings[this._index];

      if (this._index + 1 < this._greetings.length) {
          ++this._index;
      }
      else {
          this._index = 0
      }

      setTimeout(this._tick.bind(this), 1000)
  }

  ngOnInit() {
  }

}
