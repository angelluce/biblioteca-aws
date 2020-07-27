import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Biblioteca';
  titleBook = 'Cuidades de Papel';
  autorBook = 'John Green';
  summaryBook = 'asfdghfhkjdgethrtjr';

  upLoadBoolean = false;

  showUploadForm() {
    this.upLoadBoolean = true;
  }
  downloadBook() {
    console.log('Hi');
  }
}
