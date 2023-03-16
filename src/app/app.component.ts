import { Component } from '@angular/core';
import { MorsePipePipe } from './morse-MD5-pipe.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MorseMD5Pipe';
  rawInput!: string;
  morsecodeString!: string;

}
