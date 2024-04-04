import { ActionReducerMap } from "@ngrx/store";
import { reducer } from "./job.reducer";
import { Job } from "../domain/entities/job";

export interface AppState {
  jobs: Job[];
}

export const appReducers: ActionReducerMap<AppState, any> = {
  jobs: reducer
}
