import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonItem, IonList, IonPage, IonRefresher, IonRefresherContent, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';

/* interface user {
  id: number,
  name: string,
  height: number,
  weight: number,
  stats: {
    base_stat: number,
    effort: number,
    stat: {
      name: string,
      url: string
    }
  }[],
} */

const myUser = {
  name: 'Nico Freundt',
  email: 'nico.freundt@protonmail.com'
}

const Tab3: React.FC = () => {

  const [user, setUser] = useState<any>();

  const getUsers = async () => {
    /*     let data = await fetch('https://pokeapi.co/api/v2/pokemon/157').then(res => res.json());
        console.log(data);
        return data; */
    return myUser;
  }

  useEffect(() => {
    getUsers().then(data => setUser(data))
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>User</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRefresher slot='fixed' onIonRefresh={(event) => { getUsers().then(data => setUser(data)).then(() => event.detail.complete()) }}>
          <IonRefresherContent>
          </IonRefresherContent>
        </IonRefresher>
        {user &&
          <IonCard key={user.id}>
            <IonCardHeader>
              <IonCardTitle>Hey {user.name.split(' ')[0]}!</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonList>
                <IonItem>Name:<br />{user.name}</IonItem>
                <IonItem>Mail-Adresse:<br />{user.email}</IonItem>
              </IonList>
            </IonCardContent>
          </IonCard>}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
