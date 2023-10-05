import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DigimonCardComponent } from './components/digimon-card/digimon-card.component';
import { ButtonComponent } from './components/button/button.component';

// Providers
import { DigimonApiProvider } from './providers/digimon-api/digimon-api.provider';

// Services
import { DigimonApiService } from './services/digimon-api/digimon-api.service';
import { DigimonListComponent } from './components/digimon-list/digimon-list.component';

// Pipes
import { FilterPipe } from './pipes/filter/filter.pipe';

// Pages
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DetailsComponent } from './pages/details/details.component';

// Pages
const PAGES_LIST = [
  DashboardComponent,
  DetailsComponent,
]

const PIPES_LIST = [
  FilterPipe,
]

const COMPONENT_LIST = [
  AppComponent,
  HeaderComponent,
  DigimonCardComponent,
  DigimonListComponent,
  ButtonComponent,
];

@NgModule({
  declarations: [
    ...COMPONENT_LIST,
    ...PIPES_LIST,
    ...PAGES_LIST,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    DigimonApiProvider,
    DigimonApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
