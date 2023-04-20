import { json, useRouteLoaderData } from "react-router-dom"
import EventItem from "../EventItem"

const EventDetailPage = () => {
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