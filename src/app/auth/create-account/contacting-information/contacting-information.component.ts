import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacting-information',
  templateUrl: './contacting-information.component.html',
  styleUrls: ['./contacting-information.component.scss']
})
export class ContactingInformationComponent {

  constructor(private router: Router) {}

  getFileName(event: any) {
    const fileChosen = document.getElementById('file-chosen');

    fileChosen!.textContent = event.target.files[0].name;
  }

  nextPage() {
    this.router.navigate(['signup/required-attachments']);
}

  prevPage() {
      this.router.navigate(['signup/account-type']);
  }

}
