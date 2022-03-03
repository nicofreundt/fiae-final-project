import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useAuthUser, useSignOut } from 'react-auth-kit';

const Profile: React.FC = () => {

    const signOut = useSignOut();
    const auth = useAuthUser();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Profil</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Hey, {auth()!.user}!</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonCardSubtitle className="ion-margin-top">Name:</IonCardSubtitle>
                        <IonLabel>{auth()!.user}</IonLabel>
                        <IonCardSubtitle className="ion-margin-top">E-Mail:</IonCardSubtitle>
                        <IonLabel>{auth()!.email}</IonLabel>
                    </IonCardContent>
                </IonCard>
                <IonButton className="ion-margin-start" onClick={signOut}>Abmelden</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Profile;
