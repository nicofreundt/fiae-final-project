import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonItem, IonList, IonPage, IonRefresher, IonRefresherContent, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import { useSignOut } from 'react-auth-kit';

const myUser = {
  name: 'Nico Freundt',
  email: 'nico.freundt@protonmail.com'
}

const Profile: React.FC = () => {

  const [user, setUser] = useState<any>();
  const signOut = useSignOut();

  const getUsers = async () => {
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
        <IonButton onClick={signOut}>Abmelden</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
