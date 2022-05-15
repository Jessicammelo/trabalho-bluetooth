import { Component, OnInit } from '@angular/core';
import { BluetoothSerialOriginal } from '@awesome-cordova-plugins/bluetooth-serial';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private bluetoothSerial: BluetoothSerialOriginal) {}

  ngOnInit(): void {
    this.bluetoothSerial.setDeviceDiscoveredListener().subscribe(devices => {
      console.log(devices);
    })
  }
  
}
