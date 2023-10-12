import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-required-attachments',
  templateUrl: './required-attachments.component.html',
  styleUrls: ['./required-attachments.component.scss']
})
export class RequiredAttachmentsComponent {

  constructor(private router: Router) {}

  getFileName(event: any) {
    const fileChosen = document.getElementById('file-chosen');

    fileChosen!.textContent = event.target.files[0].name;
  }

  nextPage() {
    this.router.navigate(['signup/create-password']);
}

  prevPage() {
      this.router.navigate(['signup/contacting-information']);
  }

}
