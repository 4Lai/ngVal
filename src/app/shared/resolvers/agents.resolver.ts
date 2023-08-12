import { ResolveFn } from '@angular/router';
import { Agents } from '../interfaces/agents';
import { inject } from '@angular/core';
import { AgentsService } from '../services/agents.service';
import { map } from 'rxjs';

export const agentsResolver: ResolveFn<Agents['data']> = (route, state) => {
  const allAgents = inject(AgentsService)

  return allAgents.getAgents().pipe(map(val => {
    return val.data
  } ))
};
