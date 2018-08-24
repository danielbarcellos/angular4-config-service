import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Config } from 'app/Config';
import { ConfigService } from 'app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config: Config;
  cep: string;
    
    constructor(private _ConfigService: ConfigService) {

    }

    CalcularConfig(): void {
        this._ConfigService.getConfig(this.cep)
            .subscribe((data: Config) => this.config = data,
            error => console.log(error));
    }
}
