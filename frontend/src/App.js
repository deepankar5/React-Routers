import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from './components/pages/HomePage';
import EventsPage, {getEvents} from './components/pages/EventsPage';
import EventsDetailPage, { getIndividualEvent } from './components/pages/EventsDetailPage';
import NewEventPage , {submitFormData} from "./components/pages/NewEventPage";
import EditEventPage from "./components/pages/EditEventPage";
import RootLayout from './components/pages/RootLayout';
import EventsRootLayout from './components/pages/EventsRootLayout';
import ErrorPage from './components/pages/ErrorPage';

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
          element: <EventsDetailPage/>,},
      {path: 'edit', element: <EditEventPage/>}],
      },
      {path: 'new', element: <NewEventPage/>, action: submitFormData}
      ]}
    ]}
  ])  
  return <RouterProvider router={route}/>
}

export default App;
