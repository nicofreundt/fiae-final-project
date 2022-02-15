import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonLoading, IonPage, IonRouterLink, IonTitle, IonToolbar, useIonRouter } from "@ionic/react";
import { MouseEventHandler, useState } from "react";
import { useSignIn } from "react-auth-kit";

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [loading, setLoading] = useState(false);

    const history = useIonRouter();
    const signIn = useSignIn();

    const loginHandler: MouseEventHandler = async (event) => {
        event.preventDefault();
        setLoading(true);
        var options = {
            method: "POST",
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        }
        fetch('/users/login', options).then(res => res.json()).then(res => {
            if (res.status === 200) {
                if (signIn({ token: res.token, expiresIn: res.expiresIn, tokenType: "Bearer", authState: res.authUserState })) {
                    setLoading(false);
                    history.push('/home')
                } else {
                    setLoading(false);
                    alert("Wrong credentials")
                }
            } else {
                setLoading(false);
                alert("Wrong credentials");
            }
        })
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