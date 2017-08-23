
import {Component, Directive, NgModule} from '@angular/core';
import {LatLngLiteral} from "@agm/core";

// 이건 지금 그냥 지도만 뜨는거 마크 없이.
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})

export class AppComponent {
  // zoom: number = 8;
  // title: string = 'My first AGM project';
  // lat: number = 36.145029;
  // lng: number = 127.857517;

  lat: number = 35.783458347;
  lng: number = 128.113903583;
  zoom: number = 13;
  Circleeditable: boolean;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  circless: circle[] = [
    {
      lat: 35.808458,
      lng: 128.112730,
      label : '가야산국립공원',
      temp : 24,
      fillColor: '#ff1e34'

    },
    {
      lat: 36.357374,
      lng: 127.209145,
      label : '계룡산국립공원',
      temp : 19,
      fillColor: '#09f'
    },
    {
      lat: 35.487610,
      lng: 126.869100,
      label : '내장산국립공원',
      temp : 37,
      fillColor: '#ff1e34'
    },
    {
      lat: 35.876494,
      lng: 127.756719,
      label : '덕유산국립공원',
      temp : 32,
      fillColor: '#ff1e34'
    },
    {
      lat: 35.128229,
      lng: 127.004426,
      label : '무등산국립공원',
      temp : 29,
      fillColor: '#46ff44'
    },
    {
      lat: 35.645374,
      lng: 126.573265,
      label : '변산반도국립공원',
      temp : 17,
      fillColor: '#46ff44'
    },
    {
      lat: 37.676810,
      lng: 126.992706,
      label : '북한산국립공원',
      temp : 23,
      fillColor: '#46ff44'
    },
    {
      lat: 38.144646,
      lng: 128.417001,
      label : '설악산국립공원',
      temp : 22,
      fillColor: '#46ff44'
    },
    {
      lat: 36.969689,
      lng: 128.510094,
      label : '소백산국립공원',
      temp : 21,
      fillColor: '#46ff44'
    },
    {
      lat: 36.545029,
      lng: 127.857517,
      label : '속리산국립공원',
      temp : 20,
      fillColor: '#46ff44'
    },
    {
      lat: 37.781452,
      lng: 128.5963284,
      temp : 15,
      fillColor: '#09f',
      label : '오대산국립공원'
    },
    {
      lat:36.849365,
      lng: 128.149563,
      temp : 35,
      fillColor: '#ff1e34',
      label : '월악산국립공원'
    },
    {
      lat: 34.759923,
      lng: 126.686092,
      temp : 9,
      fillColor: '#09f',
      label : '월출산국립공원'
    },
    {
      lat: 36.412806,
      lng: 129.189237,
      temp : 30,
      fillColor: '#ff1e34',
      label : '주왕산국립공원'
    },
    {
      lat: 35.313673,
      lng: 127.624721,
      temp : 10,
      fillColor: '#09f',
      label : '지리산국립공원'
    },
    {
      lat: 37.347371,
      lng: 128.069207,
      temp : 17,
      fillColor: '#46ff44',
      label : '치악산국립공원'
    },
    {
      lat: 37.117325,
      lng: 128.933039,
      temp : 27,
      fillColor: '#46ff44',
      label : '태백산국립공원'
    },
    {
      lat: 33.381207,
      lng: 126.542284,
      temp : 21,
      fillColor: '#46ff44',
      label : '한라산국립공원'
    }
  ]
  markers: marker[] = [
    {
      lat: 35.808458,
      lng: 128.112730,
      label : '가야산국립공원',
      draggable: true
    },
    {
      lat: 36.357374,
      lng: 127.209145,
      label : '계룡산국립공원',
      draggable: false
    },
    {
      lat: 35.487610,
      lng: 126.869100,
      label : '내장산국립공원',
      draggable: true
    },
    {
      lat: 35.876494,
      lng: 127.756719,
      label : '덕유산국립공원',
      draggable: true
    },
    {
      lat: 35.128229,
      lng: 127.004426,
      label : '무등산국립공원',
      draggable: true
    },
    {
      lat: 35.645374,
      lng: 126.573265,
      label : '변산반도국립공원',
      draggable: true
    },
    {
      lat: 37.676810,
      lng: 126.992706,
      label : '북한산국립공원',
      draggable: true
    },
    {
      lat: 38.144646,
      lng: 128.417001,
      label : '설악산국립공원',
      draggable: true
    },
    {
      lat: 36.969689,
      lng: 128.510094,
      label : '소백산국립공원',
      draggable: true
    },
    {
      lat: 36.545029,
      lng: 127.857517,
      label : '속리산국립공원',
      draggable: true
    },
    {
      lat: 37.781452,
      lng: 128.5963284,
      draggable: true,
      label : '오대산국립공원'
    },
    {
      lat:36.849365,
      lng: 128.149563,
      draggable: true,
      label : '월악산국립공원'
    },
    {
      lat: 34.759923,
      lng: 126.686092,
      draggable: true,
      label : '월출산국립공원'
    },
    {
      lat: 36.412806,
      lng: 129.189237,
      draggable: true,
      label : '주왕산국립공원'
    },
    {
      lat: 35.313673,
      lng: 127.624721,
      draggable: true,
      label : '지리산국립공원'
    },
    {
      lat: 37.347371,
      lng: 128.069207,
      draggable: true,
      label : '치악산국립공원'
    },
    {
      lat: 37.117325,
      lng: 128.933039,
      draggable: true,
      label : '태백산국립공원'
    },
    {
      lat: 33.381207,
      lng: 126.542284,
      draggable: true,
      label : '한라산국립공원'
    }
  ]

}

interface marker {
  lat: number;
  lng: number;
  draggable: boolean;
  label: string;
}

interface circle {
  lat: number;
  lng: number;
  label: string;
  fillColor: String;
  temp : number;


}
