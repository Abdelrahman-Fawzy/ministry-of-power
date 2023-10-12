import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  sliderConfig = {
    rtl: true,
    dots: true,
    // autoplay: true,
    // speed: 1500,
    infinite: false,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

}
