import { IonBackButton, IonButtons, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useParams } from "react-router";
import { aufgaben } from "../Home";

const Task: React.FC = () => {

    const { task } = useParams<{ task: string }>();

    let aufgabe = aufgaben.filter(aufgabe => aufgabe.id === parseInt(task))[0]

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>{aufgabe.titel}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonLabel>
                    {aufgabe.text}
                </IonLabel>
            </IonContent>
        </IonPage>
    )
}

export default Task;