import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';  
import { Aluno } from '../aluno';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  aluno?: Aluno;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController 
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params['aluno']) {
        this.aluno = JSON.parse(params['aluno']);
      }
    });
  }

 
  voltar() {
    this.navCtrl.navigateBack('/');  
  }
}
