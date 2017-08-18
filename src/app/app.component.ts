
import { Component, NgModule } from '@angular/core';
import {LatLngLiteral} from "@agm/core";
import { Ng2MapModule} from 'ng2-map';

// 이건 지금 그냥 지도만 뜨는거 마크 없이.
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})

export class AppComponent {
  zoom: number = 8;
  title: string = 'My first AGM project';
  lat: number = 36.145029;
  lng: number = 127.857517;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  paths: Array<LatLngLiteral> = [
    {
      lat: 35.2553634473608,
      lng: 126.76346819725971},
    {
      lat: 35.218850701876946,
      lng: 126.80569379638136},
    {
      lat: 35.25887302916082,
      lng: 126.90571861260466},
    {
      lat: 35.12440683008061,
      lng: 127.00907732745543},
    {
      lat: 35.05238609675842,
      lng: 126.80371678613697},
    {
      lat: 35.10712005940038,
      lng: 126.73068775114308},
    {
      lat: 35.113384075606994,
      lng: 126.65708424311056},
    {
      lat: 35.215180436544756,
      lng: 126.68688688430589},
    {
      lat: 35.2553634473608,
      lng: 126.76346819725971
    }
  ];

  markers: marker[] = [
    {
      lat: 35.808458,
      lng: 128.112730,
      draggable: true
    },
    {
      lat: 36.357374,
      lng: 127.209145,
      draggable: false
    },
    {
      lat: 35.487610,
      lng: 126.869100,
      draggable: true
    },
    {
      lat: 35.876494,
      lng: 127.756719,
      draggable: true
    },
    {
      lat: 35.128229,
      lng: 127.004426,
      draggable: true
    },
    {
      lat: 35.645374,
      lng: 126.573265,
      draggable: true
    },
    {
      lat: 37.676810,
      lng: 126.992706,
      draggable: true
    },
    {
      lat: 38.144646,
      lng: 128.417001,
      draggable: true
    },
    {
      lat: 36.969689,
      lng: 128.510094,
      draggable: true
    },
    {
      lat: 36.545029,
      lng: 127.857517,
      draggable: true
    },
    {
      lat: 37.781452,
      lng: 128.5963284,
      draggable: true
    },
    {
      lat:36.849365,
      lng: 128.149563,
      draggable: true
    },
    {
      lat: 34.759923,
      lng: 126.686092,
      draggable: true
    },
    {
      lat: 36.412806,
      lng: 129.189237,
      draggable: true
    },
    {
      lat: 35.313673,
      lng: 127.624721,
      draggable: true
    },
    {
      lat: 37.347371,
      lng: 128.069207,
      draggable: true
    },
    {
      lat: 37.117325,
      lng: 128.933039,
      draggable: true
    },
    {
      lat: 33.381207,
      lng: 126.542284,
      draggable: true
    }
  ]

}
interface marker {
  lat: number;
  lng: number;
  draggable: boolean;
}

interface ploy {


}


// just an interface for type safety.


// import {
// Component,
//   NgModule
// } from '@angular/core';
//
// import {
//   BrowserModule
// } from '@angular/platform-browser';
//
// import {
//   AgmCoreModule
// } from 'angular2-google-maps/core';
//
//
// @Component({
//   selector: 'my-app',
//   styles: [`
//     .sebm-google-map-container {
//        height: 500px;
//        width: 800px;
//      }
//   `],
//   template: `
//     <sebm-google-map
//       [latitude]="lat"
//       [longitude]="lng"
//       [zoom]="zoom"
//       [disableDefaultUI]="false"
//       [zoomControl]="false"
//       (mapClick)="mapClicked($event)">
//
//       <sebm-google-map-marker
//           *ngFor="let m of markers; let i = index"
//           (markerClick)="clickedMarker(m.label, i)"
//           [latitude]="m.lat"
//           [longitude]="m.lng"
//           [label]="m.label"
//           [markerDraggable]="m.draggable"
//           (dragEnd)="markerDragEnd(m, $event)">
//
//         <sebm-google-map-info-window>
//           <strong>InfoWindow content</strong>
//         </sebm-google-map-info-window>
//
//       </sebm-google-map-marker>
//
//       <sebm-google-map-circle [latitude]="lat + 0.3" [longitude]="lng"
//           [radius]="5000"
//           [fillColor]="'red'"
//           [circleDraggable]="true"
//           [editable]="true">
//       </sebm-google-map-circle>
//
//     </sebm-google-map>
// `})
// export class App {
//   // google maps zoom level
//   zoom: number = 7;
//
//   // initial center position for the map
//   lat: number = 36.145029;
//   lng: number = 127.857517;
//
//
//
//   clickedMarker(label: string, index: number) {
//     console.log(`clicked the marker: ${label || index}`)
//   }
//
//
//   markerDragEnd(m: marker, $event: MouseEvent) {
//     console.log('dragEnd', m, $event);
//   }
//
//
//
//   markers: marker[] = [
//     {
//       lat: 35.808458,
//       lng: 128.112730,
//       draggable: true
//     },
//     {
//       lat: 36.357374,
//       lng: 127.209145,
//       draggable: false
//     },
//     {
//       lat: 35.487610,
//       lng: 126.869100,
//       draggable: true
//     },
//     {
//       lat: 35.876494,
//       lng: 127.756719,
//       draggable: true
//     },
//     {
//       lat: 35.128229,
//       lng: 127.004426,
//       draggable: true
//     },
//     {
//       lat: 35.645374,
//       lng: 126.573265,
//       draggable: true
//     },
//     {
//       lat: 37.676810,
//       lng: 126.992706,
//       draggable: true
//     },
//     {
//       lat: 38.144646,
//       lng: 128.417001,
//       draggable: true
//     },
//     {
//       lat: 36.969689,
//       lng: 128.510094,
//       draggable: true
//     },
//     {
//       lat: 36.545029,
//       lng: 127.857517,
//       draggable: true
//     },
//     {
//       lat: 37.781452,
//       lng: 128.5963284,
//       draggable: true
//     },
//     {
//       lat:36.849365,
//       lng: 128.149563,
//       draggable: true
//     },
//     {
//       lat: 34.759923,
//       lng: 126.686092,
//       draggable: true
//     },
//     {
//       lat: 36.412806,
//       lng: 129.189237,
//       draggable: true
//     },
//     {
//       lat: 35.313673,
//       lng: 127.624721,
//       draggable: true
//     },
//     {
//       lat: 37.347371,
//       lng: 128.069207,
//       draggable: true
//     },
//     {
//       lat: 37.117325,
//       lng: 128.933039,
//       draggable: true
//     },
//     {
//       lat: 33.381207,
//       lng: 126.542284,
//       draggable: true
//     }
//
//   ]
// }
// // just an interface for type safety.
// interface marker {
//   lat: number;
//   lng: number;
//   // label?: string;
//   draggable: boolean;
// }
//
// @NgModule({
//   imports: [ BrowserModule, AgmCoreModule.forRoot() ],
//   declarations: [ App ],
//   bootstrap: [ App ]
// })
// export class AppModule {}
