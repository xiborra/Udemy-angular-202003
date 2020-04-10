import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  artists: any[] = [];
  loading: boolean;

  constructor(private spotifyService: SpotifyService) { }

  buscar(termino: string) {
    this.loading = true;
    this.spotifyService.getArtistas(termino).subscribe((data: any) => {
      this.artists = data;
      this.loading = false;
    });
  }

}
