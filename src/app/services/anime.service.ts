import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  constructor(private _http: HttpClient) {}
  animePrt(file: File) {
    if (file) {
      const formData = new FormData();
      formData.append('image', file);
      return this._http.post('https://api.trace.moe/search', formData);
    }
    return;
  }
}
