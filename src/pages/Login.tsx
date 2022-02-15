import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonLoading, IonPage, IonRouterLink, IonTitle, IonToolbar, useIonRouter } from "@ionic/react";
import { MouseEventHandler, useState } from "react";
import { set } from "../data/IonicStorage";

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [loading, setLoading] = useState(false);

    const history = useIonRouter();

    const loginHandler: MouseEventHandler = async (event) => {
        event.preventDefault();
        setLoading(true);
        await set("user", "Nico");
        setLoading(false);
        history.push('/home')
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Lernplattform</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonItem style={{ borderRadius: "5px" }} className="ion-margin">
                    <IonLabel position="floating">Username</IonLabel>
                    <IonInput value={username} onIonChange={e => setUsername(e.detail.value!)}></IonInput>
                </IonItem>
                <IonItem style={{ borderRadius: "5px" }} className="ion-margin">
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput value={password} onIonChange={e => setPassword(e.detail.value!)} type="password"></IonInput>
                </IonItem>
                <IonLabel style={{ fontStyle: "oblique", opacity: "60%" }} className="ion-margin">Noch keinen Account? <IonRouterLink routerLink="/register" routerDirection="forward">Registrieren!</IonRouterLink></IonLabel>
                <br />
                <IonButton className="ion-margin" onClick={loginHandler}>Login</IonButton>
            </IonContent>
            <IonLoading isOpen={loading} />
        </IonPage>
    )
}

export default Login;