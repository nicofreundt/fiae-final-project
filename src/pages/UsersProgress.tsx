import { IonAccordion, IonAccordionGroup, IonBackButton, IonButtons, IonCard, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonProgressBar, IonTitle, IonToolbar } from "@ionic/react";
import { useEffect, useRef, useState } from "react";
import { useAuthHeader } from "react-auth-kit";
import { useParams } from "react-router";
import { URL } from "../misc/setting";

const UsersProgress: React.FC = () => {

    const [status, setStatus] = useState({});
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
                <IonAccordionGroup>
                    {Object.entries(status).map(([k, v]) =>    
                        <IonCard className="ion-margin-bottom" key={k}>
                            <IonAccordion>
                                <IonItem slot="header">
                                    <IonLabel>
                                        {k}
                                    </IonLabel>
                                </IonItem>
                                <IonList slot="content">
                                    {Array.isArray(v) && v.map((w: { Level: string; Wert: number }) =>     
                                        <IonItem key={k + w.Level}>
                                            <IonLabel className="ion-margin-bottom">
                                                {w.Level}
                                                <IonProgressBar className="ion-margin-top" value={w.Wert}/>
                                            </IonLabel>
                                        </IonItem>
                                    )}
                                </IonList>
                            </IonAccordion>
                        </IonCard>
                    )}
                </IonAccordionGroup>
            </IonContent>
        </IonPage>
    )
}

export default UsersProgress;