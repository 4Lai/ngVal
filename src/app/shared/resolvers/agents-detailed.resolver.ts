import { ResolveFn } from '@angular/router';
import { Agents } from '../interfaces/agents';
import { inject } from '@angular/core';
import { AgentsService } from '../services/agents.service';
import { map } from 'rxjs';

export const agentsDetailedResolver: ResolveFn<Agents['data']> = (
  route,
  state
) => {
  const agentsDetailed = inject(AgentsService);

  return agentsDetailed.getAgents().pipe(
    map((val) => {
      return val.data.map((val) => {
        return { ...val, color: `${val.displayName.toLowerCase()}-bgClass` };
      }) as Agents['data'];
    })
  );
};
