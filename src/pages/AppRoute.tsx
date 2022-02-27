import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { bookOutline, homeOutline, personCircleOutline } from 'ionicons/icons';
import { Redirect, Route } from 'react-router';
import Task from './DataViews/Task';
import Topic from './DataViews/Topic';
import Home from './Home';
import Tab2 from './Tab2';
import Profile from './Profile';
import UsersProgress from './UsersProgress';

const AppRoute: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path='/' to="/home" />
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/home/:topic/:taskID">
          <Task />
        </Route>
        <Route exact path="/home/:topic">
          <Topic />
        </Route>
        <Route exact path="/tab2">
          <Tab2 />
        </Route>
        <Route path="/tab2/:id">
          <UsersProgress />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={bookOutline} />
          <IonLabel>Themen</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tab2">
          <IonIcon icon={homeOutline} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="profile" href="/profile">
          <IonIcon icon={personCircleOutline} />
          <IonLabel>Profil</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default AppRoute;
