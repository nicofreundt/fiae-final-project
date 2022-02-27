import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonLabel, IonPage, IonRefresher, IonRefresherContent, IonTitle, IonToolbar } from '@ionic/react';
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
      <IonContent>
        <IonRefresher slot='fixed' onIonRefresh={(event) => { getUsers().then(data => setUser(data)).then(() => event.detail.complete()) }}>
          <IonRefresherContent>
          </IonRefresherContent>
        </IonRefresher>
        {user &&
          <IonCard key={user.id}>
            <IonCardHeader>
              <IonCardTitle>Hey, {auth()!.user}!</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonCardSubtitle className="ion-margin-top">Name:</IonCardSubtitle>
              <IonLabel>{auth()!.user}</IonLabel>
              <IonCardSubtitle className="ion-margin-top">E-Mail:</IonCardSubtitle>
              <IonLabel>{auth()!.email}</IonLabel>
            </IonCardContent>
          </IonCard>}
        <IonButton className="ion-margin-horizontal" onClick={signOut}>Abmelden</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
