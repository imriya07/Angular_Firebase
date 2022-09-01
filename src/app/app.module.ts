import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { UserListComponent } from './user-list/user-list.component';
import { SETTINGS as FIRESTORE_SETTINGS} from '@angular/fire/compat/firestore';
import { FormsModule } from '@angular/forms';
import { NameComponent } from './name/name.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WinnerComponent } from './winner/winner.component';
import { TopperComponent } from './topper/topper.component';

const appRoutes:Routes=[
  {path:'name', component: NameComponent},
  {path:'winner', component: WinnerComponent},
  {path:'topper', component: TopperComponent},
  {path:'addUser', component: UserListComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NameComponent,
    WinnerComponent,
    TopperComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  
  providers: [{
    provide: FIRESTORE_SETTINGS,
    useValue: { experimentalAutoDetectLongPolling: true, merge: true },
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
