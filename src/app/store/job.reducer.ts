import { Job } from "../domain/entities/job";
import { JobActionTypes as JobActionTypes, JobActions } from "./job.actions";

export const initialState: Job[] = [];

export function reducer(state = initialState, action: JobActions): Job[] {
  switch (action.type) {
    case JobActionTypes.FILTER_JOBS:
      return state.filter((job: Job) => {
        for (let i = 0; i < action.filters.length; i++) {
          const element = action.filters[i];
          return job.languages.includes(element) || job.tools.includes(element) ? job : null;
        };
        return state;
      })

    case JobActionTypes.GET_ALL_JOBS:
      state = action.jobList;
      return state;
  }
}

