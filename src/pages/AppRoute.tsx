import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { bookOutline, homeOutline, personCircleOutline } from 'ionicons/icons';
import { Redirect, Route } from 'react-router';
import Task from './data_views/Task';
import Topic from './data_views/Topic';
import Topics from './Topics';
import Home from './Home';
import Profile from './Profile';
import UsersProgress from './progress_views/UsersProgress';

const AppRoute: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path='/' to="/home" />
        <Route exact path="/topic">
          <Topics />
        </Route>
        <Route exact path="/topic/:topic/:taskID">
          <Task />
        </Route>
        <Route exact path="/topic/:topic">
          <Topic />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/home/:id">
          <UsersProgress />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="topic" href="/topic">
          <IonIcon icon={bookOutline} />
          <IonLabel>Themen</IonLabel>
        </IonTabButton>
        <IonTabButton tab="home" href="/home">
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
