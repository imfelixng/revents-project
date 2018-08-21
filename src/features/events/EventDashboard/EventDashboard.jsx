import React, { Component } from 'react';
import {Grid, Button} from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import {connect} from 'react-redux';
import * as actions from '../eventActions';

class EventDashboard extends Component {

    state = {
      isOpen: false,
      selectedEvent: null
    }

    handleFormOpen = () => {
      this.setState({
        selectedEvent: null,
        isOpen: true
      })
    }

    handleCancel = () => {
      this.setState({
        isOpen: false
      })
    }

    handleDeleteEvent = (eventID) => () => {
      this.props.deleteEvent(eventID);
    }

    handleUpdateEvent = (updateEvent) => {
      this.props.updateEvent(updateEvent);
      this.setState({
        isOpen: false,
        selectedEvent: null
      });
    }

    handleEditEvent = (eventToUpdate) => () =>{
      this.setState({
        selectedEvent: eventToUpdate,
        isOpen: true
      })
    }

    handleCreateEvent = (newEvent) => {
      newEvent.id = new Date().valueOf();
      newEvent.hostPhotoURL = '/assets/user.png';
      this.props.createEvent(newEvent);
      this.setState({
        isOpen: false
      })
    }

    render() {
        const {selectedEvent} = this.state;
        return (
            <Grid>
                <Grid.Column
                    width = {10}
                >
                    <EventList
                        events = {this.props.events}
                        editEvent = {this.handleEditEvent}
                        deleteEvent = {this.handleDeleteEvent}
                    />
                </Grid.Column>
                <Grid.Column
                    width = {6}
                >
                    <Button
                       posivtive = "true"
                       content = 'Create Event' 
                       color = "green"
                       onClick = {this.handleFormOpen}
                    />
                    {
                      this.state.isOpen && 
                      <EventForm 
                        handleCancel = {this.handleCancel}
                        createEvent = {this.handleCreateEvent}
                        selectedEvent = {selectedEvent}
                        updateEvent = {this.handleUpdateEvent}
                        />
                    }
                </Grid.Column>
            </Grid>

        );
    }
}

const mapStateToProps = (state) => {
  return {
    events: state.events.events
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createEvent: (event) => dispatch(actions.createEvent(event)),
    updateEvent: (event) => dispatch(actions.updateEvent(event)),
    deleteEvent: (eventId) => dispatch(actions.deleteEvent(eventId)) 

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDashboard);