//Input para recibir datos del componente padre, Output para enviar datos al componente padre, EventEmitter para
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//Importo la interface para poder usarla
import { HousingLocation } from '../housing-location';


@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {

  constructor() { }

  //Utilizamos el decorador @Input() para recibir desde app los valores de tipo HousingLocation de housingLocationList
  @Input() locationList: HousingLocation[] = [];
  //Utilizamos el decorador @Output() para enviar desde housing-list el valor de tipo HousingLocation (instanciando la clase EventEmitter) que está guardado en "results" al componente padre app
  @Output() selectedLocationEvent = new EventEmitter<HousingLocation>();
  //Aquí guardo los resultados que coinciden con el criterio de búsqueda en el input
  results: HousingLocation[] = [] 

  ngOnInit(): void {
  }

  //Manejador de eventos del botón Search
  searchHousingLocations(searchText: string) {
    if(!searchText) return;
    this.results = this.locationList.filter(location => location.city.toLowerCase().includes(searchText.toLowerCase()))
  }

  //Emitimos el location que fue seleccionado por el usuario cuando el usuario haga click en el botón View que está vinvulado al método selectHousingLocation
  selectHousingLocation(location: HousingLocation){
    this.selectedLocationEvent.emit(location)
  }
}
