import { IonBackButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useEffect, useRef, useState } from "react";
import { useAuthHeader } from "react-auth-kit";
import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import { URL } from "../../misc/setting";
import { checkmarkOutline } from "ionicons/icons";

interface taskType {
    tasks_id: number,
    Thema: string,
    Titel: string,
    Text: string,
    Level: string
}

const Task: React.FC = () => {

    const [task, setTask] = useState<taskType>();
    const { taskID } = useParams<{ taskID: string }>();

    const authHeader = useAuthHeader()();

    const fetchOptions = useRef({
        'headers': {
            'Authorization': authHeader
        }
    });

    const taskIDRef = useRef(taskID);

    useEffect(() => {
        fetch(`${URL}/tasks/task/${taskIDRef.current}`, fetchOptions.current).then(res => res.json()).then(task => setTask(task));
    }, [])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>{task?.Titel}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <ReactMarkdown>{task?.Text!}</ReactMarkdown>
                <IonFab horizontal="end" vertical="bottom" slot="fixed"><IonFabButton><IonIcon icon={checkmarkOutline}/></IonFabButton></IonFab>
            </IonContent>
        </IonPage>
    )
}

export default Task;