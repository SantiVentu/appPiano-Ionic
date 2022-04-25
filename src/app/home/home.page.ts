import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  teclado: any[] = [
    {sonidoNumero: 1, color: 'rgb(2, 224, 195)'},
    {sonidoNumero: 2, color: 'rgb(0, 153, 255)'},
    {sonidoNumero: 3, color: 'rgb(25, 0, 255)'},
    {sonidoNumero: 4, color: 'rgb(148, 32, 138)'},
    {sonidoNumero: 5, color: 'rgb(107, 42, 212)'},
    {sonidoNumero: 6, color: 'rgb(66, 12, 73)'},
    {sonidoNumero: 7, color: 'rgb(23, 0, 24)'},


  ]
  
  constructor() {}

  aplicarSonido(sonidoNumero: number){
    const audio = new Audio();
    audio.src = '../../assets/sonidos/note'+ sonidoNumero +'.wav';
    audio.load();
    audio.play();
  }
}
