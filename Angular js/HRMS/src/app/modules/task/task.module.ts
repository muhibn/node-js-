import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';


@NgModule({
  declarations: [ 
  ],
  imports: [
    CommonModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
