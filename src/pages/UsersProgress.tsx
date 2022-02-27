import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonProgressBar, IonTitle, IonToolbar } from "@ionic/react";
import { useEffect, useRef, useState } from "react";
import { useAuthHeader } from "react-auth-kit";
import { useParams } from "react-router";
import { URL } from "../misc/setting";

interface status {
    Thema: string,
    Level: string,
    Percentage: number
}

const UsersProgress: React.FC = () => {

    const [status, setStatus] = useState<status[]>([]);
    const { id } = useParams<{ id: string }>();

    const authHeader = useAuthHeader()();

    const fetchOptions = useRef({
        'headers': {
            'Authorization': authHeader
        }
    });

    const idRef = useRef(id);

    useEffect(() => {
        fetch(`${URL}/status/u/${idRef.current}`, fetchOptions.current).then(res => res.json()).then(data => setStatus(data))
    }, [])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>Lernfortschritt</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {status.map(s => <IonCard key={s.Level + s.Thema}>
                    <IonCardHeader><IonCardTitle>{s.Level + ' - ' + s.Thema}</IonCardTitle></IonCardHeader>
                    <IonCardContent>
                        <IonProgressBar value={s.Percentage} />
                    </IonCardContent>
                </IonCard>)}
            </IonContent>
        </IonPage>
    )
}

export default UsersProgress;