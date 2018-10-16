import { Component, OnInit } from '@angular/core';
import {Apod} from '../apod';
@Component({
  selector: 'app-apods',
  templateUrl: './apods.component.html',
  styleUrls: ['./apods.component.css']
})
export class ApodsComponent implements OnInit {
  apod :Apod = {
    title : "Jupiter in Ultraviolet from Hubble",
    date : "2018-10-16",
    explanation: "Jupiter looks a bit different in ultraviolet light.  To better interpret  Jupiter's cloud motions and to help NASA's robotic Juno spacecraft understand the planetary context of the small fields that it sees, the Hubble Space Telescope is being directed to regularly image the entire Jovian giant. The colors of Jupiter being monitored go beyond the normal human visual range to include both ultraviolet and infrared light.  Featured from 2017, Jupiter appears different in near ultraviolet light, partly because the amount of sunlight reflected back is distinct, giving differing cloud heights and latitudes discrepant brightnesses. In the near UV, Jupiter's poles appear relatively dark, as does its Great Red Spot and a smaller (optically) white oval to the right.  The String of Pearl storms farther to the right, however, are brightest in near ultraviolet, and so here appear (false-color) pink.  Jupiter's largest moon Ganymede appears on the upper left. Juno continues on its looping 53-day orbits around Jupiter, while Earth-orbiting Hubble is now recovering from the loss of a stabilizing gyroscope."
  }

  constructor() { }

  ngOnInit() {
  }

}
