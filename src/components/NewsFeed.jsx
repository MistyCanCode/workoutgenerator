import '/App.css'
import { Link } from 'react-router';

const NewsFeed = () => {
    return (
        <div className='App'>
            <div>

            </div><hr />
            <div>
                <div>
                    <h5><Link className="Buttons" to="/Login"> Login </Link></h5><br />
                    <h5><Link className="Buttons" to="/Signup"> Sign Up </Link></h5>
                </div>
                <h5><Link className="Buttons" to="/Home"> Home </Link></h5><br />
            </div>
        </div>
    );
}
export default NewsFeed