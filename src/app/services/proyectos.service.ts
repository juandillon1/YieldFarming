import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLCOINGEKO, URLPROYECTOS } from '../URLS/URL_SERVICES';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor( private http: HttpClient ) { }
  obtenerProyectos() {
    const URL = `${URLPROYECTOS}/`;
    return this.http.get(URL);
  }
  getProyectos(tipo: string) {
    const URL = `${URLPROYECTOS}/tipo?tipos=${tipo}`;
    return this.http.get(URL);
  }
  crearProyecto( proyecto ){
    const URLPOST = `${URLPROYECTOS}/`;
    return this.http.post(URLPOST, proyecto);
  }
  borrarProyecto(id: string){
    const URLGET = `${URLPROYECTOS}/${id}`;
    return this.http.delete(URLGET);
  }
  obtenerPrecioMoneda(token: string) {
    const precio = JSON.parse(localStorage.getItem('monedas')).find(moneda => moneda.symbol === token);
    const URLGET = `${URLCOINGEKO}/coins/${precio.id}`;
    return this.http.get(URLGET)
    .pipe(
      map( (tokeninfo: any) => {
        return {
          tokenresult: {
            token: tokeninfo.symbol,
            contrato: tokeninfo.platforms,
            marketcaprank: tokeninfo.market_cap_rank,
            priceusd: tokeninfo.market_data.current_price.usd,
            pricears: tokeninfo.market_data.current_price.ars,
            athusd: tokeninfo.market_data.ath.usd,
            athars: tokeninfo.market_data.ath.ars,
            athdate: tokeninfo.market_data.ath_date.usd,
            marketcap: tokeninfo.market_data.market_cap.usd,
            high_24hs: tokeninfo.market_data.high_24h.usd,
            low_24hs: tokeninfo.market_data.low_24h.usd,
            pricechange24hs: tokeninfo.market_data.price_change_percentage_24h
          }
        };
      })
    );
  }
  getListaMonedas() {
    if (localStorage.getItem('monedas') === null){
      const URLGET = `${URLCOINGEKO}/coins/list`;
      this.http.get(URLGET).subscribe( (monedas: any) => {
        localStorage.setItem('monedas', JSON.stringify(monedas));
      });
    }
  }
}
