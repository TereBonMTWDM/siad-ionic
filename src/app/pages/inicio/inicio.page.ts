import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: IComponente[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'appstore',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'american-football',
      name: 'Alert',
      redirectTo: '/alert'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}


interface IComponente {
  icon: string;
  name: string;
  redirectTo: string;
}
