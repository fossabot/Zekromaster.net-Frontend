import { Injectable } from '@angular/core';
import { Howl } from 'howler';


@Injectable({
  providedIn: 'root'
})
export class MusicPlayerService {

  private sounds: Map<string, Howl> = new Map<string, Howl>();
  private defaultBG: string = 'assets/floral_shoppe.mp3'

  constructor() { }

  playSound(src: string): void;
  playSound(src: string, name:string): void;
  playSound(src: string, name?: string): void {
    var _ = this.sounds;
    var _name: string
    if (name){
      _name = name;
    } else {
      _name = src + Math.ceil(Math.random() * 1000);
    }
    this.sounds.set(_name, new Howl({src: src}));
    this.sounds.get(_name).play();
    this.sounds.get(_name).on('end', ()=>{_.delete(_name)})
  }

  setBgm(src: string): void {
    this.stopBgm();
    this.sounds.set('bgm', new Howl({src: src, loop: true}));
    this.sounds.get('bgm').play();
  }

  stopBgm(): void {
    if (this.sounds.has('bgm')){
      this.sounds.get('bgm').stop();
    }
  }

  setDefaultBgm(): void {
    this.setBgm(this.defaultBG);
  }
}
