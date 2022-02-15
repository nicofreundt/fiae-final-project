import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { bookOutline, homeOutline, personCircleOutline } from 'ionicons/icons';
import { Route } from 'react-router';
import Task from './DataViews/Task';
import Topic from './DataViews/Topic';
import Home from './Home';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

const Tab1: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/home/:topic/:task">
          <Task />
        </Route>
        <Route exact path="/home/:topic">
          <Topic />
        </Route>
        <Route path="/tab2">
          <Tab2 />
        </Route>
        <Route path="/tab3">
          <Tab3 />
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
        <IonTabButton tab="tab3" href="/tab3">
          <IonIcon icon={personCircleOutline} />
          <IonLabel>User</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tab1;
