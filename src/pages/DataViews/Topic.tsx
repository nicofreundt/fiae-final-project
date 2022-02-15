import { IonBackButton, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useParams } from "react-router";
import { aufgaben } from "../Home";

const Topic: React.FC = () => {

    const { topic } = useParams<{ topic: string }>();

    var hello = aufgaben.filter(aufgabe => aufgabe.thema.toLowerCase() === topic)

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
                {hello.map(aufgabe => (
                    <IonCard routerLink={"/home/" + topic + "/" + aufgabe.id} key={aufgabe.id}>
                        <IonCardHeader>
                            <IonCardTitle>{aufgabe.titel}</IonCardTitle>
                        </IonCardHeader>
                    </IonCard>
                ))}
            </IonContent>
        </IonPage>
    )
}

export default Topic;