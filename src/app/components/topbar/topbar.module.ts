import { NgModule } from '@angular/core';

import { TopbarComponent } from './topbar.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [TopbarComponent],
    declarations: [TopbarComponent],
    providers: [],
})
export class TopbarModule { }
