import EventsList from '../EventsList';
import {json, useLoaderData} from "react-router-dom"
function EventsPage() {
    const res = useLoaderData()
    const events = res.events

    if(res.isError){
        return <p>{res.message}</p>
    }
  return (
    <>
      <EventsList events = {events} />
    </>
  );
}

export default EventsPage;

export async function getEvents(){
    const response = await fetch('http://localhost:8080/events');
     if(!response.ok){
      throw json({ message: 'Something went wrong in data fetching' }, {status: 500})
     }else{
        return response
     }
}