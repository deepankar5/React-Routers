import {useRouteError} from 'react-router-dom';
import PageContent from '../PageContent';

const ErrorPage = () => {
    const error = useRouteError()
    let title = "An Error has occured"
    let message = 'Something went wrong!'

    if(error.status === 500){
        message = error.data.message
    }
    if(error.status === 404){
        title = "Path not found!"
        message = "Unable to fetch data with the given path"
    }
    return(
        <div>
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </div>        
    ) ;
}
export default ErrorPage