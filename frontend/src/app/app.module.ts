// gerado dentro de ./src/app

import { NgModule } from "@angular/core";
import { NgIf, NgFor } from "@angular/common";
import { FormsModule } from "@angular/forms"; // imports ngModel, to bem used on todolist.component.ts
import { HttpClientModule } from "@angular/common/http";
import { PerlitServiceService } from "./services/perlit-service.service";

@NgModule({
    declarations: [],
    imports: [
        NgIf, NgFor, FormsModule, HttpClientModule
    ],
    exports: [
        NgIf, NgFor, FormsModule, HttpClientModule
    ],
    providers: [HttpClientModule, PerlitServiceService],
    bootstrap: []
})

export class AppModule {}