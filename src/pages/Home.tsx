import { IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"

export const aufgaben = [
    {
        "id": 1,
        "titel": "Aufgabe 1",
        "thema": "Python",
        "text": "Dies ist die aller erste Aufgabe"
    },
    {
        "id": 2,
        "titel": "Aufgabe 2",
        "thema": "Python",
        "text": "Dies ist die zweit tollste aller Aufgabe"
    },
    {
        "id": 3,
        "titel": "Aufgabe 3",
        "thema": "Java",
        "text": "Alle guten Aufgaben sind drei!"
    },
    {
        "id": 4,
        "titel": "Aufgabe 4",
        "thema": "Java",
        "text": "Aufgaben-Squad ist nie allein"
    }
]


const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Themen</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {Array.from(new Set(aufgaben.map(aufgabe => aufgabe.thema))).map(thema => (
                    <IonCard routerLink={"/home/" + thema.toLowerCase()} key={thema}>
                        <IonCardHeader>
                            <IonCardTitle>{thema}</IonCardTitle>
                        </IonCardHeader>
                    </IonCard>
                ))}
            </IonContent>
        </IonPage>
    )
}

export default Home;