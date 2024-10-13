import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Aluno } from '../aluno'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  alunos: Aluno[] = [
    {
      nome: 'Eric Diniz',
      turno: 'Manhã',
      unidade: 'ADS0301M',
      fotoUrl: 'assets/foto.jpg'
    },
    {
      nome: 'Vitor Costa',
      turno: 'Manhã',
      unidade: 'ADS0301M',
      fotoUrl: 'assets/foto3.jpg'
    },
    {
      nome: 'Kauã Lopes',
      turno: 'Manhã',
      unidade: 'ADS0301M',
      fotoUrl: 'assets/foto2.jpg'
    }
  ];

  constructor(private navCtrl: NavController) {}

  goToDetalhes(aluno: Aluno) {
    this.navCtrl.navigateForward('/detalhes', {
      queryParams: { aluno: JSON.stringify(aluno) }
    });
  }
}
