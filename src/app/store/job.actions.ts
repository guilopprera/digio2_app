import { Action } from "@ngrx/store";
import { Job } from "../domain/entities/job";

export enum JobActionTypes {
  GET_ALL_JOBS = 'GET_ALL_JOBS',
  FILTER_JOBS = 'FILTER_JOBS',
}

export class GetAllJob implements Action {
  readonly type = JobActionTypes.GET_ALL_JOBS;
  constructor(public jobList: Job[]) { }
}


export class FilterJob implements Action {
  readonly type = JobActionTypes.FILTER_JOBS;
  constructor(public filters: string[]) { }
}

export type JobActions = FilterJob | GetAllJob;
