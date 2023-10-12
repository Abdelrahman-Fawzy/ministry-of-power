import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent {

  constructor(private router: Router) {}

  complete() {}

  getFileName(event: any) {
    const fileChosen = document.getElementById('file-chosen');

    fileChosen!.textContent = event.target.files[0].name;
  }

  prevPage() {
      this.router.navigate(['signup/create-password']);
  }

}
