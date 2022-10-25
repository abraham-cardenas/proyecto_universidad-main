import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { calendarApi } from '../api';
import { convertEventstoDateEvents } from '../helpers';
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent, onLoadEvents } from '../store';

export const useCalendarStore = () => {

  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector(state => state.calendar);
  const { user } = useSelector(state => state.auth);


  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  }

  const startSavingEvent = async (calendarEvent) => {

    //TODO: Llegar al backen
    try {
      //Todo bien
      if (calendarEvent.id) {
        //Actualizando
        await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent);
        dispatch(onUpdateEvent({ ...calendarEvent, user }));
        return;

      }
      //creando
      const { data } = await calendarApi.post('/events', calendarEvent);
      dispatch(onAddNewEvent({ ...calendarEvent, id: data.evento.id, user }));

    } catch (error) {
      Swal.fire('Error al guardar', error.response.data.msg, 'error');

    }





  }
  const startDeletingEvent = async () => {
    //TODO: llegar al backend

    try {
      await calendarApi.delete(`/events/${activeEvent.id}`);
      dispatch(onDeleteEvent());


    } catch (error) {
      Swal.fire('Error al guardar', error.response.data.msg, 'error');

    }

  }

  const startLoadingEvents = async () => {
    try {
      const { data } = await calendarApi.get('/events');
      const events = convertEventstoDateEvents(data.eventos);
      dispatch(onLoadEvents(events));


    } catch (error) {

    }
  }

  return {

    //propiedades
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,

    //metodos
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
    startLoadingEvents

  }
}
