import React, { Component } from 'react'
import EventListItem from './EventListItem';

export default class EventList extends Component {
  render() {
    const {events, editEvent, deleteEvent} = this.props;
    return (
      <div>
        <h1>Event List</h1>
        {
          events && events.length > 0 && events.map((event) => (
            <EventListItem
              key = {event.id}
              event = {event}
              editEvent = {editEvent}
              deleteEvent = {deleteEvent}
            />
          ))
        }
      </div>
    )
  }
}
