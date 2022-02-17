import { IonBackButton, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useEffect, useRef, useState } from "react";
import { useAuthHeader } from "react-auth-kit";
import { useParams } from "react-router";
import { URL } from "../../misc/setting";

interface taskType {
    tasks_id: number,
    Thema: string,
    Titel: string,
    Text: string,
    Level: string
}

const Topic: React.FC = () => {

    const [tasks, setTasks] = useState<taskType[]>([]);
    const { topic } = useParams<{ topic: string }>();

    const topicRef = useRef(topic);

    const authHeader = useAuthHeader()();

    const fetchOptions = useRef({
        'headers': {
            'Authorization': authHeader
        }
    });

    useEffect(() => {
        fetch(`${URL}/tasks/${topicRef.current}`, fetchOptions.current).then(res => res.json()).then(tasks => setTasks(tasks))
    }, [])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>{topic.replace(/^\w/, (c) => c.toUpperCase())}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {tasks.map(task => (
                    <IonCard routerLink={"/home/" + topic + "/" + task.tasks_id} key={task.tasks_id}>
                        <IonCardHeader>
                            <IonCardTitle>{task.Titel}</IonCardTitle>
                        </IonCardHeader>
                    </IonCard>
                ))}
            </IonContent>
        </IonPage>
    )
}

export default Topic;