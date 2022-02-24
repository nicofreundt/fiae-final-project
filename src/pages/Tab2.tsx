import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonLabel, IonPage, IonProgressBar, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useRef, useState } from 'react';
import { useAuthHeader } from 'react-auth-kit';
import { URL } from '../misc/setting';

interface people {
  Name: string,
  Bereich: string,
  LVL: string,
  Prozent: number
}

const Tab2: React.FC = () => {

  const [people, setPeople] = useState<people[]>([]);
  const [percentages, setPercentages] = useState<{ name: string, percentage: number }[]>([]);
  const authHeader = useAuthHeader()();

  const fetchOptions = useRef({
    'headers': {
      'Authorization': authHeader
    }
  });

  useEffect(() => {
    fetch(`${URL}/status/getProzent`, fetchOptions.current)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        /* setPeople(data)
        var arr: people[] = data;
        var names = Array.from(new Set(arr.map(e => e.Name)));
        var percentage: { name: string, percentage: number }[] = [];
        for (let n of names) {
          let p = arr.filter(obj => obj.Name === n).map(obj => obj.Prozent).reduce((pv, cv) => pv + cv, 0);
          percentage.push({ name: n, percentage: Math.round(p / arr.filter(obj => obj.Name === n).length) / 100 });
        }
        console.log(percentage);
        setPercentages(percentage); */
      });
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        {people.map(p =>
          <IonCard key={p.Name}>
            <IonCardHeader>
              <IonCardTitle>{p.Name}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonProgressBar value={percentages?.filter(obj => obj.name === p.Name)[0]!.percentage} />
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
