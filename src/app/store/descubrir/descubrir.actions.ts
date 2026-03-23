import { Reto, Calificacion } from '@core/models';

export namespace DescubrirActions {
  /** Carga retos, resultados, calificaciones y oponentes. */
  export class Load {
    static readonly type = '[Descubrir] Load';
  }

  export class CreateReto {
    static readonly type = '[Descubrir] Create Reto';
    constructor(public reto: Omit<Reto, 'id'>) {}
  }

  export class UpdateRetoStatus {
    static readonly type = '[Descubrir] Update Reto Status';
    constructor(
      public retoId: string,
      public status: Reto['status'],
      public ganadorId?: string,
    ) {}
  }

  export class CreateCalificacion {
    static readonly type = '[Descubrir] Create Calificacion';
    constructor(public calificacion: Omit<Calificacion, 'id'>) {}
  }
}
