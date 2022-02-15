import { Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Tab1 from './pages/Tab1';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import { useEffect, useState } from 'react';
import { createStore, get } from './data/IonicStorage';

setupIonicReact();


const App: React.FC = () => {

  const [authenticated, setAuthenticated] = useState<boolean>(false);


  useEffect(() => {
    (async () => {
      await createStore("lpDB");
      const auth = await get("user");
      console.log(!!auth, auth);
      setAuthenticated(!!auth);
    })()

  }, [])

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/login">
            <Login />
          </Route>
          <PrivateRoute isAuthenticated={authenticated} authenticationPath="/login">
            <Tab1 />
          </PrivateRoute>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
};

export default App;
