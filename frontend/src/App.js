import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from './components/pages/HomePage';
import EventsPage, {getEvents} from './components/pages/EventsPage';
import EventsDetailPage, { deleteEvent, getIndividualEvent } from './components/pages/EventsDetailPage';
import NewEventPage  from "./components/pages/NewEventPage";
import EditEventPage from "./components/pages/EditEventPage";
import RootLayout from './components/pages/RootLayout';
import EventsRootLayout from './components/pages/EventsRootLayout';
import ErrorPage from './components/pages/ErrorPage';
import {submitFormData} from "./components/EventForm"
function App() {
  const route = createBrowserRouter([
    {path: "/",
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <HomePage/>},
      {path: 'events', element: <EventsRootLayout/>,
      children: [
        {index: true, element: <EventsPage/> , 
        loader: getEvents
      }, 
      {
        path: ':eventId',
        loader: getIndividualEvent,
        id: 'event_details',
        children: [
          {index: true,
          element: <EventsDetailPage/>,
          action: deleteEvent
        },
      {path: 'edit', element: <EditEventPage/>, action: submitFormData}],
      },
      {path: 'new', element: <NewEventPage/>, action: submitFormData}
      ]}
    ]}
  ])  
  return <RouterProvider router={route}/>
}

export default App;
