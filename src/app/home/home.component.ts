import { Component } from '@angular/core';
import { AnimeService } from '../services/anime.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  response: any = null

constructor(private animeService: AnimeService){}
onSelectedFile($event: File){
  this.animeService.animePrt($event)?.subscribe((res: any) => {
    this.response=res?.result
  })
  console.log($event)
}
}
