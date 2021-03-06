/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';
import { ActivatedRoute } from '@angular/router';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    //'./app.component.css'
  ],
  template: `

   <nav>
      <div class="logo"></div>
      <div class="right">
        <span>Hello user!</span>
        
        <button class='btn sm reverse'>logout</button>
        
      </div>
     
      <a [routerLinkActiveOptions]="{exact: true}" [routerLink]=" ['./'] " routerLinkActive="active">
        Home
      </a>
      <a [routerLink]=" ['./catalog'] " routerLinkActive="active">
        Catalog
      </a>
      <a [routerLink]=" ['./caching'] " routerLinkActive="active">
        Caching
      </a>
      <a [routerLink]=" ['./logs'] " routerLinkActive="active">
        Logs
      </a>
      <a [routerLink]=" ['./users'] " routerLinkActive="active">
        Users
      </a>

      
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>

    <!--<pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>-->
    {{ActivatedRoute}}
    <footer>
      futa
      <!--<span>WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a></span>
      <div>
        <a [href]="url">
          <img [src]="angularclassLogo" width="25%">
        </a>
      </div>-->
    </footer>
  `
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';


  constructor(
    public appState: AppState,
    public route: ActivatedRoute
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
     console.log('ХУУУУУЙ!!!', this.route);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
