import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonText,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "../index.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <section className="flex justify-center my-20">
          <div>
            <IonText color="tertiary">
              <h1 className="py-5 text-xl font-bold text-center">
                Masukkan Input
              </h1>
            </IonText>
            <IonHeader collapse="condense">
              <IonToolbar>
                <IonTitle size="large">Tab 1</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonItem>
              <IonLabel>Nama: </IonLabel>
              <IonInput placeholder="Aris Pudji"></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel>NIM: </IonLabel>
              <IonInput placeholder="24000xxx"></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel>Alamat: </IonLabel>
              <IonInput placeholder="Jl.Merdeka"></IonInput>
            </IonItem>
            <div className="flex justify-center">
              <IonButton className="my-6" color="tertiary">
                Submit
              </IonButton>
            </div>
            <IonText className="flex justify-center" color="tertiary">
              <div>
                <h3>Nama: Yusuf Qisthi</h3>
                <h3>NIM: 24060120140134</h3>
                <h3>Alamat: jl. teluk amboina</h3>
              </div>
            </IonText>
          </div>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
