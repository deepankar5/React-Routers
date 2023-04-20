import EventForm from "../EventForm";
import {useRouteLoaderData} from "react-router-dom"
const EditEventPage = () => {
    const data = useRouteLoaderData('event_details')

    return <EventForm  method='patch' event={data.event}/>
    
}

export default EditEventPage