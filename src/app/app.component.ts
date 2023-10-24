import { Component } from '@angular/core';
//Importamos la interfaz que hemos creado
import { HousingLocation } from './housing-location';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fairhouse';

  //Creamos la propiedad housingLocationList que es un array de tipo HousingLocation(la interfaz que hemos creado e importado) 
  housingLocationList: HousingLocation[] = [
    {
      name: "Acme Fresh Start Housing",
      city: "Chicago",
      state: "IL",
      photo: "../assets/housing-1.jpg",
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      name: "A113 Transitional Housing",
      city: "Santa Monica",
      state: "CA",
      photo: "../assets/housing-2.jpg",
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      name: "Warm Beds Housing Support",
      city: "Juneau",
      state: "AK",
      photo: "../assets/housing-3.jpg",
      availableUnits: 1,
      wifi: false,
      laundry: false,
    }
  ];

  //Creamos propiedad de tipo HousingLocation para guardar el location seleecionado por el usuario
  selectedLocation: HousingLocation | undefined;// = this.housingLocationList[0];

  //El método updateSelectedLocation asociado al evento selectedLocationEvent de housing-list.component.ts actualiza la propiedad selectedLocation con la location que envía el componete hijo housing-list en el evento "selectedLocationEvent"
  updateSelectedLocation(location: HousingLocation) {
    this.selectedLocation = location;
  }
}
