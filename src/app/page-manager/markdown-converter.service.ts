import { Injectable } from '@angular/core';
import { Converter } from 'showdown';

@Injectable({
  providedIn: 'root'
})
export class MarkdownConverterService {

  constructor() { }

  convert(content: string) {
    return new Converter().makeHtml(content);
  }
}
