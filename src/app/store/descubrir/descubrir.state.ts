import { inject, Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { combineLatest, tap } from 'rxjs';
import { take } from 'rxjs/operators';
import { DescubrirRepository } from '@core/repositories/abstractions/descubrir.repository';
import { DescubrirStateModel } from './descubrir.model';
import { DESCUBRIR_STATE_DEFAULTS } from './descubrir.constants';
import { DescubrirActions } from './descubrir.actions';

@State<DescubrirStateModel>({
  name: 'descubrir',
  defaults: DESCUBRIR_STATE_DEFAULTS,
})
@Injectable()
export class DescubrirState {
  private readonly repo = inject(DescubrirRepository);

  /**
   * Carga las 4 colecciones en paralelo usando combineLatest + take(1).
   * take(1) es necesario porque onSnapshot emite indefinidamente y
   * forkJoin nunca completaría.
   */
  @Action(DescubrirActions.Load)
  load(ctx: StateContext<DescubrirStateModel>) {
    ctx.patchState({ loading: true });

    return combineLatest([
      this.repo.getRetos().pipe(take(1)),
      this.repo.getResultados().pipe(take(1)),
      this.repo.getCalificaciones().pipe(take(1)),
      this.repo.getOponentes().pipe(take(1)),
    ]).pipe(
      tap({
        next: ([retos, resultados, calificaciones, oponentes]) =>
          ctx.patchState({ retos, resultados, calificaciones, oponentes, loading: false }),
        error: () => ctx.patchState({ loading: false }),
      }),
    );
  }

  @Action(DescubrirActions.CreateReto)
  createReto(ctx: StateContext<DescubrirStateModel>, action: DescubrirActions.CreateReto) {
    return this.repo.createReto(action.reto).pipe(
      tap(reto => ctx.patchState({ retos: [reto, ...ctx.getState().retos] })),
    );
  }

  @Action(DescubrirActions.UpdateRetoStatus)
  updateRetoStatus(ctx: StateContext<DescubrirStateModel>, action: DescubrirActions.UpdateRetoStatus) {
    return this.repo.updateRetoStatus(action.retoId, action.status, action.ganadorId).pipe(
      tap(() => {
        const retos = ctx.getState().retos.map(r =>
          r.id === action.retoId
            ? { ...r, status: action.status, ...(action.ganadorId ? { ganadorId: action.ganadorId } : {}) }
            : r,
        );
        ctx.patchState({ retos });
      }),
    );
  }

  @Action(DescubrirActions.CreateCalificacion)
  createCalificacion(ctx: StateContext<DescubrirStateModel>, action: DescubrirActions.CreateCalificacion) {
    return this.repo.createCalificacion(action.calificacion).pipe(
      tap(cal => ctx.patchState({ calificaciones: [cal, ...ctx.getState().calificaciones] })),
    );
  }
}
