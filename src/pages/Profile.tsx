import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useAuthUser, useSignOut } from 'react-auth-kit';
import Avatar from 'react-avatar';

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
                    <Avatar round={true} name={auth()!.user} style={{"z-index": "5", "position": "absolute", "top": "15px", "right": "15px"}}/>
                    <IonButton className="ion-margin" onClick={signOut}>Abmelden</IonButton>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Profile;
