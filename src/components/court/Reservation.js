import React from 'react';
import {IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel} from "@ionic/react";
import {useDispatch} from "react-redux";
import {removeReservation} from "../../actions";

export default function Reservation({ reservation }) {
    const dispatch = useDispatch();

    const names = (reservation.players.join(" ")) || "randoms";

    const handleReservationDelete = () => {
        dispatch(removeReservation(reservation));
    };

    return (
        <IonItemSliding value={reservation._id}>
            <IonItem>
                <IonLabel>{names}</IonLabel>
                <span slot="end" className="text-muted">{reservation.time}</span>
            </IonItem>

            <IonItemOptions side="end">
                <IonItemOption color="danger" onClick={handleReservationDelete}>
                    <IonIcon slot="icon-only" name="close"/>
                </IonItemOption>
            </IonItemOptions>
        </IonItemSliding>
    );
}
