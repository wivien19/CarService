import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepairServicesComponent } from './repair-services.component';



@NgModule({
    declarations: [
        RepairServicesComponent
    ],
    exports: [
        RepairServicesComponent
    ],
    imports: [
        CommonModule
    ]
})
export class RepairServicesModule { }
