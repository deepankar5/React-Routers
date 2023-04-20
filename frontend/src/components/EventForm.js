import { useNavigate, Form, useNavigation } from 'react-router-dom';
import classes from './EventForm.module.css';

function EventForm({ method, event = {} }) {
  const navigate = useNavigate();
  const navigator = useNavigation()

  function cancelHandler() {
    navigate('..');
  }
  let isSubmitting = navigator.state === 'submitting'

  const {title, image, date, description} = event

  return (
    <Form method='post'  className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required  defaultValue={title ?? ''}/>
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required  defaultValue={image ?? ''}/>
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={date ?? ''}/>
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={description ?? ''}/>
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...': 'Save'}</button>
      </div>
    </Form>
  );
}

export default EventForm;
