import { json, redirect, useRouteLoaderData } from "react-router-dom"
import EventItem from "../EventItem"

const EventDetailPage = () => {
    // useLoaderData fails because it try to look for the data in the own component only and not on the parent componenet
    const data = useRouteLoaderData('event_details') 
   const event = data.event

    return <EventItem event={event}/>
}

export default EventDetailPage

export async function getIndividualEvent({request, params}){
    const id = params.eventId
    const response = await fetch(`http://localhost:8080/events/${id}`);
    if(!response.ok){
        throw json({message: 'Unable to fetch individual event'}, {status: 500})
    }else {
        return response
    }
}

export async function deleteEvent({request, params}){
    const id = params.eventId
    const response = await fetch('http://localhost:8080/events/'+ id, {
        method: request.method
        })
    if(!response){
        throw json({message: 'Unable to delete'}, {status: 500})
    }
    else {
       return redirect('/events')
    }
}

