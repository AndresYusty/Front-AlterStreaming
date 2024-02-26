import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { ContenidoComponent } from './contenido/contenido.component';
import { ContenidoAleatorioComponent } from './contenido-aleatorio/contenido-aleatorio.component';
import { ContenidoPuntuacionComponent } from './contenido-puntuacion/contenido-puntuacion.component';






@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
     ContenidoComponent,
     ContenidoAleatorioComponent,
     ContenidoPuntuacionComponent,
  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule
    

  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es'}, //Agregamos el idioma que vamos a usar en las fechas
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
