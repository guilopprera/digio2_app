import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/emprego.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../domain/entities/job';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.page.html',
  styleUrls: ['./vagas.page.scss'],
})
export class VagasPage implements OnInit {
  public mobileMode: boolean = window.innerWidth <= 768;
  public jobsList: Job[] = [];
  public filterList: string[] = [];


  constructor(private empregoService: JobService, private http: HttpClient) {
    this.obterListaEmpregos();
  }

  ngOnInit() {
    window.onresize = () => this.mobileMode = window.innerWidth <= 768;
  }

  private async obterListaEmpregos() {
    let listaEmpregos = (await this.empregoService.obterListaNgRx()).subscribe((res) => {
      console.log(res);
      this.jobsList = res;
    });

    console.log(listaEmpregos);
  }

  public addFilter(event: any) {
    event.preventDefault();
    event.stopImmediatePropagation();

    if (!this.filterList.find(j => j == event.srcElement.innerText))
      this.filterList.push(event.srcElement.innerText);

    console.log(this.filterList);
  }

  public removeFilter(event: any) {
    event.preventDefault();
    event.stopImmediatePropagation();

    this.filterList = this.filterList.filter(j => {
      return j != (event.srcElement.closest("ion-chip") as any).childNodes[0].innerText;
    });

    console.log(this.filterList);
  }

  public clearFilter() {
    this.filterList = [];
  }
}
