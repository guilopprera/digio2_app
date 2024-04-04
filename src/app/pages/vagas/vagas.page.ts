import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../../domain/entities/job';
import { AppState } from 'src/app/store';
import { Store, select } from '@ngrx/store';
import { FilterJob, GetAllJob } from 'src/app/store/job.actions';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.page.html',
  styleUrls: ['./vagas.page.scss'],
})
export class VagasPage implements OnInit {
  public mobileMode: boolean = window.innerWidth <= 768;
  public jobsList: Job[] = [];
  public jobsListFilter: Job[] = [];
  public filterList: string[] = [];
  public job$: Observable<Job[]>;

  constructor(private empregoService: JobService, private http: HttpClient,
    private store: Store<AppState>) {
    this.getJobList();
  }

  ngOnInit() {
    window.onresize = () => this.mobileMode = window.innerWidth <= 768;
  }

  private async getJobList() {

    (await this.empregoService.getListNgRx()).subscribe((res) => {
      this.jobsList = res;

      this.store.dispatch(new GetAllJob(this.jobsList));

      this.store.pipe(select('jobs')).subscribe(res => {
        this.jobsList = res == undefined ? [] : res;
      });
    });
  }

  public addFilter(event: any) {
    event.preventDefault();
    event.stopImmediatePropagation();


    if (this.filterList.indexOf(event.srcElement.innerText) == -1) {
      this.filterList = [...this.filterList, event.srcElement.innerText]
      this.store.dispatch(new FilterJob(this.filterList));
    }
  }

  public removeFilter(event: any) {
    event.preventDefault();
    event.stopImmediatePropagation();

    this.filterList = this.filterList.filter(j => {
      return j != (event.srcElement.closest("ion-chip") as any).childNodes[0].innerText;
    });

    this.store.dispatch(new FilterJob(this.filterList));

    if (!this.filterList.length)
      this.clearFilter();
  }

  public async clearFilter() {
    this.filterList = [];

    (await this.empregoService.getListNgRx()).subscribe((res) => {
      this.store.dispatch(new GetAllJob(res));
    });
  }
}
