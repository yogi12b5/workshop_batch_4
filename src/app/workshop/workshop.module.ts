import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfileService } from './profiles/profile.service';
import { UsersService } from './users/users.service';
import { Routes, RouterModule } from '@angular/router';


import { EditComponent } from './profiles/edit/edit.component';
import { ViewComponent } from './profiles/view/view.component';
import { UserprofileComponent } from './users/userprofile/userprofile.component';
import { UserlistComponent } from './users/userlist/userlist.component';


const routes: Routes = [
    { path: 'myProfile-edit', component: EditComponent },
    { path: 'myProfile', component: ViewComponent },
    { path: 'userprofile', component: UserprofileComponent },
    { path: 'userslist', component: UserlistComponent }
];

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        RouterModule.forRoot(routes, { useHash: false })
    ],
    declarations: [
        EditComponent,
        ViewComponent,
        UserprofileComponent,
        UserlistComponent],
    exports: [RouterModule],
    providers: [ProfileService, UsersService]
})

export class WorkshopMoule {
}
