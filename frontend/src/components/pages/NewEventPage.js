import { json, redirect } from "react-router-dom"
import EventForm from "../EventForm"

const NewEventPage = () => {
    return <EventForm/>
}
export default NewEventPage

export async function submitFormData({request, params}) {
    const data = await request.formData()
    const eventData = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description')
    }
   const response = await fetch("http://localhost:8080/events", {
        method: 'POST',
        body: JSON.stringify(eventData),
        headers: {
            "Content-Type": 'application/json'
        }
    })
    if(!response.ok){
        throw json({message: "Can't submit the data"}, {status: 500})
    }
    return redirect("/events")
}   