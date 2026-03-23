import { Reto, Resultado, Calificacion } from '@core/models';
import { Profile } from '@core/models';

export interface DescubrirStateModel {
  retos: Reto[];
  resultados: Resultado[];
  calificaciones: Calificacion[];
  oponentes: Profile[];
  loading: boolean;
}
