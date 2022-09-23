import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'esmeralda'
})
export class EsmeraldaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {
    let fahrenheit
    let grados
    let escala = args[0]

    if (escala === "c") {
      fahrenheit = (value * (5/9)) + 32
      grados = "ºF"
    } else {
      fahrenheit = (value - 32) * (5/9)
      grados = "ºC"
    }
    return fahrenheit + grados;
  }

}
