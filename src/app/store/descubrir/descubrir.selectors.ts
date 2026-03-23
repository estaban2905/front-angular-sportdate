import { Selector } from '@ngxs/store';
import { DescubrirState } from './descubrir.state';
import { DescubrirStateModel } from './descubrir.model';

export class DescubrirSelectors {
  @Selector([DescubrirState])
  static retos(state: DescubrirStateModel) { return state.retos; }

  @Selector([DescubrirState])
  static resultados(state: DescubrirStateModel) { return state.resultados; }

  @Selector([DescubrirState])
  static calificaciones(state: DescubrirStateModel) { return state.calificaciones; }

  @Selector([DescubrirState])
  static oponentes(state: DescubrirStateModel) { return state.oponentes; }

  @Selector([DescubrirState])
  static loading(state: DescubrirStateModel) { return state.loading; }
}
