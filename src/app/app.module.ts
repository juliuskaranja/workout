import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";
import {PopOverPage} from "../pages/pop-over/pop-over";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ProfilePage} from "../pages/profile/profile";
import { PeopleServiceProvider } from '../providers/people-service/people-service';
import {MealPage} from "../pages/meal/meal";
import {HttpClientModule} from "@angular/common/http";
import { RestProvider } from '../providers/rest/rest';
import { LoginRestProvider } from '../providers/login-rest/login-rest';
import { RegisterRestProvider } from '../providers/register-rest/register-rest';
import {IonicStorageModule} from "@ionic/storage";
import { ProfileRestProvider } from '../providers/profile-rest/profile-rest';
import { ListPostsProvidersProvider } from '../providers/list-posts-providers/list-posts-providers';
import {AddNewPostPage} from "../pages/add-new-post/add-new-post";
import {ShowMealModalPage} from "../pages/show-meal-modal/show-meal-modal";
import { LoadMealPlanProvider } from '../providers/load-meal-plan/load-meal-plan';
import { AddPostRestProvider } from '../providers/add-post-rest/add-post-rest';
import { UpdateUserProfileProvider } from '../providers/update-user-profile/update-user-profile';
import {SettingPage} from "../pages/setting/setting";
import {UpdatePasswordPage} from "../pages/update-password/update-password";
import { UpdatePasswordProvider } from '../providers/update-password/update-password';
import { DeleteAccountProvider } from '../providers/delete-account/delete-account';
import { Geolocation } from "@ionic-native/geolocation";
import { GeocodingServiceProvider } from '../providers/geocoding-service/geocoding-service';
import {PrivateMessagePage} from "../pages/private-message/private-message";
import { LoadPrivateContactProvider } from '../providers/load-private-contact/load-private-contact';
import { LoadPrivateContactMessagesProvider } from '../providers/load-private-contact-messages/load-private-contact-messages';
import {ShowContactMessagesPage} from "../pages/show-contact-messages/show-contact-messages";
import { LoadGoalsProvider } from '../providers/load-goals/load-goals';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    PopOverPage,
    ProfilePage,
    MealPage,
    ProfilePage,
    AddNewPostPage,
    ShowMealModalPage,
    SettingPage,
    UpdatePasswordPage,
    PrivateMessagePage,
    ShowContactMessagesPage

  ],
  imports: [
    BrowserModule,
      HttpClientModule,
    IonicModule.forRoot(MyApp),
      IonicStorageModule.forRoot({name: '__mydb',
    driverOrder: ['indexeddb', 'sqlite', 'websql']
})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    PopOverPage,
    ProfilePage,
    MealPage,
    ProfilePage,
    AddNewPostPage,
    ShowMealModalPage,
    SettingPage,
    UpdatePasswordPage,
    PrivateMessagePage,
    ShowContactMessagesPage


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PeopleServiceProvider,
    RestProvider,
    LoginRestProvider,
    RegisterRestProvider,
    ProfileRestProvider,
    ListPostsProvidersProvider,
    LoadMealPlanProvider,
    AddPostRestProvider,
    UpdateUserProfileProvider,
    UpdatePasswordProvider,
    DeleteAccountProvider,
    Geolocation,
    GeocodingServiceProvider,
    LoadPrivateContactProvider,
    LoadPrivateContactMessagesProvider,
    LoadGoalsProvider
  ]
})
export class AppModule {}
