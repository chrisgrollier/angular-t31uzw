import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.css']
})
export class PackageDetailsComponent implements OnInit {

  @Input() package;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}