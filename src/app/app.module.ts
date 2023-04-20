import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavBarDineshComponent } from './nav-bar-dinesh/nav-bar-dinesh.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { CertificatePageComponent } from './certificate-page/certificate-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarDineshComponent,
    FrontPageComponent,
    AboutPageComponent,
    SkillsPageComponent,
    ProjectsPageComponent,
    CertificatePageComponent,
    BlogPageComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
