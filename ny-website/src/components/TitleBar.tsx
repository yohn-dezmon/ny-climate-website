import Button from './Button';
import HamburgerMenu from './HamburgerMenu';
import { Link } from 'react-router-dom';


function TitleBar() {
    return (
        <div className="flex items-center justify-between w-full">
            <HamburgerMenu />
            <Link  to="/">
                <Button primary rounded outline className="mr-5"> 
                    Home
                </Button>
            </Link>
        </div>
    )
}

export default TitleBar;
