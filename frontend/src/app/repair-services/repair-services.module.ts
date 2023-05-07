import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepairServicesComponent } from './repair-services.component';
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";



@NgModule({
    declarations: [
        RepairServicesComponent
    ],
    exports: [
        RepairServicesComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        RouterLink
    ]
})
export class RepairServicesModule { }
