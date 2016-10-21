import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlannerComponent } from './planner/planner.component';
import { ColumnComponent } from './column/column.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlannerComponent, ColumnComponent],
  exports: [PlannerComponent, ColumnComponent]
})
export class LibPlannerModule { }
