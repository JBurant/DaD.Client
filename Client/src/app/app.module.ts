import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { EditorModule } from './modules/editor/editor.module';
import { FeedModule } from './modules/feed/feed.module';
import { ArchiveModule } from './modules/archive/archive.module';
import { UsersModule } from './modules/users/users.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule } from "@angular/material";

import { SignUser } from './modules/users/dialogs/components/signuser/signuser.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    EditorModule,
    FeedModule,
    ArchiveModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    UsersModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SignUser],
})
export class AppModule { }
