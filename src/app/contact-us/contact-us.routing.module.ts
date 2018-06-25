import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ContactUsFormComponent } from "./component/contact-us-form/contact-us-form.component";
import { ContactUsEntryComponent } from "./component/contact-us-entry.component";

const appRoutes: Routes = [
    {
        path: '',
        component: ContactUsEntryComponent,
        children: [
            {
                path: 'form',
                component: ContactUsFormComponent
            },
            {
                path: '',
                redirectTo: 'form',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class ContactUsRoutingModule { }