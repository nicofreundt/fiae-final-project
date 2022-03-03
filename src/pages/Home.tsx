import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonLoading, IonPage, IonProgressBar, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useRef, useState } from 'react';
import { useAuthHeader, useAuthUser } from 'react-auth-kit';
import { URL } from '../misc/setting';

interface people {
    ID: number,
    name: string,
    percentage: number
}

const Tab2: React.FC = () => {

    const [people, setPeople] = useState<people[]>([]);
    const authHeader = useAuthHeader()();
    const auth = useRef(useAuthUser());

    const fetchOptions = useRef({
        'headers': {
            'Authorization': authHeader
        }
    });

    useEffect(() => {
        fetch(`${URL}/status/allUsers`, fetchOptions.current)
            .then(res => res.json())
            .then(data => {
                if (auth.current()!.role === 'admin') {
                    setPeople(data)
                } else {
                    data = data.filter((u: { name: string; }) => u.name === auth.current()!.user)
                    setPeople(data)
                }
            });
    }, [])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Lernfortschritt</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Lernfortschritt</IonTitle>
                    </IonToolbar>
                </IonHeader>
                {people.length ? (
                    people.map(p =>
                        <IonCard key={p.ID} routerLink={`/home/${p.ID}`}>
                            <IonCardHeader>
                                <IonCardTitle>{p.name}</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonProgressBar value={p.percentage} />
                            </IonCardContent>
                        </IonCard>
                    )
                ) : (
                    <IonLoading isOpen={true} />
                )}
            </IonContent>
        </IonPage>
    );
};

export default Tab2;
