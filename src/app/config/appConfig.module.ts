import { NgModule } from '@angular/core';
import {WEBAPI,APP_SETUP } from './injectable-token';
import { DEVELOPMENTAPI } from './devApiConfig';
import { PRODUCTIONAPI } from './proApiConfig';
import {AppSetup} from './APPConfig';

declare const process: any; // Typescript compiler will complain without this

export function globalFactory() { 
  return  process.env.ENV === 'production' ? PRODUCTIONAPI : DEVELOPMENTAPI;
}

@NgModule({
  providers: [
    {
      provide: WEBAPI,
      // useFactory instead of useValue so we can easily add more logic as needed.
      useFactory: globalFactory
    },
   {
      provide: APP_SETUP,
      useClass : AppSetup

    }

  ]
})
export class APPConfigModule {}