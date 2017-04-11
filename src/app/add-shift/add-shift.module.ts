import { NgModule } from '@angular/core';

import { AddShiftComponent }   from './add-shift.component';
import { routing } from './add-shift.routing';

@NgModule({
  imports: [routing],
  declarations: [AddShiftComponent]
})
export class AddShiftModule {}
