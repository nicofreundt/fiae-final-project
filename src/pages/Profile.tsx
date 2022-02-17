import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonItem, IonList, IonPage, IonRefresher, IonRefresherContent, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import { useAuthUser, useSignOut } from 'react-auth-kit';

const myUser = {
  name: 'Nico Freundt',
  email: 'nico.freundt@protonmail.com'
}

const Profile: React.FC = () => {

  const [user, setUser] = useState<any>();
  const signOut = useSignOut();
  const auth = useAuthUser();

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
          <IonTitle>Profil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding-horizontal'>
        <IonRefresher slot='fixed' onIonRefresh={(event) => { getUsers().then(data => setUser(data)).then(() => event.detail.complete()) }}>
          <IonRefresherContent>
          </IonRefresherContent>
        </IonRefresher>
        {user &&
          <IonCard className='ion-no-margin ion-margin-bottom' key={user.id}>
            <IonCardHeader>
              <IonCardTitle>Hey, {auth()!.user}!</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonList>
                <IonItem>Name:<br />{auth()!.user}</IonItem>
                <IonItem>Mail-Adresse:<br />{auth()!.email}</IonItem>
              </IonList>
            </IonCardContent>
          </IonCard>}
        <IonButton onClick={signOut}>Abmelden</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
