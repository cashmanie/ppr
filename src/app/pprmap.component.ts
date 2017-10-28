import { Component } from '@angular/core';
import { AgmSnazzyInfoWindow } from 'snazzy-info-window';
import { MouseEvent as AGMMouseEvent } from '@agm/core';


@Component({
    selector : 'ppr-map',
    templateUrl : './pprmap.component.html',
    styleUrls : [ './pprmap.component.css']
})
export class PprmapComponent {
  title = 'John Cashman Heytesbury Map';
  
    lat: number=53.334684;
    lng: number=-6.268933;
    zoom: number= 16;
    
    markers: marker[] = [
      {
        lat: 53.3333644999999,
        lng: -6.268705,
        name: '44 Heytesbury Street',
        label: 'A',
        draggable: true
      },
      {
        lat: 53.334684,
        lng: -6.268933,
        name: '22 Heytesbury Street',
        label: 'b',
        draggable: true
      },
      {
        lat: 53.333969,
        lng: -6.268798,
        name: '34 Heytesbury Street',
        label: 'C',
        draggable: false
      }
    ]
  
    clickedMarker(label: string, index: number) {
      console.log(`clicked the marker: ${name || index}`)
    }
  
    mapClicked($event: AGMMouseEvent) {
      var newMarker  = {
        lat: $event.coords.lat,
        lng: $event.coords.lng,
        label:"G", 
        name: "38 Heytesbury Street",
        draggable: false
      }     
      this.markers.push(newMarker);   
    }
  
    markerDragEnd (marker : any, $event: AGMMouseEvent) {
      console.log('dragEnd', marker, $event);
  
      var upMarker = {
        name: marker.name,
        lat: parseFloat(marker.lat),
        lng: parseFloat(marker.lng),
        draggable: false
      }
  
      var newLat=$event.coords.lat;
      var newLng=$event.coords.lng;
  
      console.log('new latidude= '+ newLat +'\n new longitude='+ newLng)
  
    }
    
  }
  
  interface marker {
    lat: number;
    lng: number;
    name?: string;
    label?: string;
    draggable: boolean;
  }