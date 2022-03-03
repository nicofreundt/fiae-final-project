import { IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonLoading, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { useEffect, useRef, useState } from "react"
import { useAuthHeader } from "react-auth-kit";
import { URL } from "../misc/setting";

const Topic: React.FC = () => {

    const [topics, setTopics] = useState<string[]>([]);
    const authHeader = useAuthHeader()();

    const fetchOptions = useRef({
        'headers': {
            'Authorization': authHeader
        }
    });

    useEffect(() => {
        fetch(`${URL}/tasks/topics`, fetchOptions.current).then(res => res.json()).then(topics => setTopics(topics));
    }, [])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Themen</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {topics.length ? (
                    topics.map(topic => 
                        <IonCard routerLink={"/topic/" + topic.toLowerCase()} key={topic}>
                            <IonCardHeader>
                                <IonCardTitle>{topic}</IonCardTitle>
                            </IonCardHeader>
                        </IonCard>
                    )
                ) : (
                    <IonLoading isOpen={true} />
                )}
            </IonContent>
        </IonPage>
    )
}

export default Topic;