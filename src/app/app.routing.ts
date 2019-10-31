import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const mayApp: Routes = [
  {
    path: '',
    loadChildren: './app.module#AppModule',
    data: {
      preload: true
    }
  },
  {
    path: 'map',
    loadChildren: './app.module#AppModule',
    data: {
      preload: true
    }
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        ...mayApp
      ],
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
