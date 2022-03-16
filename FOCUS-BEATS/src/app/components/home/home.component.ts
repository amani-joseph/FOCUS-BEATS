import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  playMusic() {
    fetch(
      'https://spotify23.p.rapidapi.com/playlist_tracks/?id=5e1ac184368244c1&offset=0&limit=100',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'spotify23.p.rapidapi.com',
          'x-rapidapi-key':
            'd59281dc1emsh6f2bcb09aade3c3p1c3938jsn436db4b80d4c',
        },
      }
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
    console.log('Play music');
  }

  constructor() {}

  ngOnInit(): void {}
}
