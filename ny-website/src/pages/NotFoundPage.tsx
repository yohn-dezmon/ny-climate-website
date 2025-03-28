import { Link } from 'react-router-dom';
import Button from '../components/Button';

function NotFoundPage() {
    return (
        <div className="flex flex-col gap-4">
            <Link  to="/">
                <Button primary rounded outline className="mb-5"> 
                    Home
                </Button>
            </Link>
            404 Not Found
        </div>)
}

export default NotFoundPage;
