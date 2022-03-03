import { IonBackButton, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonLoading, IonPage, IonTitle, IonToolbar } from "@ionic/react";
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
    const [levels, setLevels] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const { topic } = useParams<{ topic: string }>();

    const topicRef = useRef(topic);

    const authHeader = useAuthHeader()();

    const fetchOptions = useRef({
        'headers': {
            'Authorization': authHeader
        }
    });

    useEffect(() => {
        setLoading(true);
        fetch(`${URL}/tasks/${topicRef.current}`, fetchOptions.current).then(res => res.json()).then(tasks => {
            setLevels(Array.from(new Set(tasks.map((task: { Level: string; }) => task.Level))));
            setTasks(tasks);
            setLoading(false);
        })
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
                {loading ? 
                    <IonLoading isOpen={loading}/>
                    :
                    levels.map(level => (
                        <div key={level}>
                            <h5 className="ion-margin-start">{level}</h5>
                            {tasks.filter(task => task.Level === level).map(task => (
                                <IonCard routerLink={"/topic/" + topic + "/" + task.tasks_id} key={task.tasks_id}>
                                    <IonCardHeader>
                                        <IonCardTitle>{task.Titel}</IonCardTitle>
                                    </IonCardHeader>
                                </IonCard>
                            ))}
                        </div>
                    ))
                }
            </IonContent>
        </IonPage>
    )
}

export default Topic;