import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
 import { AuthComponent } from "./auth/auth.component";
 import { MainPanelComponent } from "./main-panel/main-panel.component";

const appRoutes: Routes = [
    {path: '', component : AuthComponent},
    {path: 'panel', component : MainPanelComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}