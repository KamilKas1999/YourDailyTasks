import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
 import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";
import { FinischedComponent } from "./finished/finisched.component";
 import { MainPanelComponent } from "./main-panel/main-panel.component";

const appRoutes: Routes = [
    {path: '', component : AuthComponent},
    {path: 'panel', component : MainPanelComponent, canActivate: [AuthGuard]},
    {path:'finished', component: FinischedComponent,canActivate: [AuthGuard]}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}