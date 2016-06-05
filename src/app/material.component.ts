import { Component } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
@Component({
  moduleId: module.id,
  selector: 'material-app',
  templateUrl: 'material.component.html',
  styleUrls: ['material.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES]
})
export class MaterialAppComponent {
  title = 'material works!';
}
