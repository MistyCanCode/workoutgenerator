import '/App.css'
import { Link } from 'react-router';

const Home = () => {
    return(
        <div className="App">
            <div><h3>Welcome to the workout generation machine</h3></div><hr/>
            <div>
                <div>
                    <button className="Buttons" type="submit" value="AboutUs"> About Us </button>
                </div><hr/>
                <div>
                    <button className="Buttons" type="submit" value="Login"><Link to="/Login" className="Buttons"> Login </Link></button>&ensp;&ensp;
                    <button className="Buttons" type="submit" value="SignUp"><Link to="/SignUp" className="Buttons"> Sign Up </Link></button>
                </div>
            </div><hr/>
            <div>
                <button className="Buttons" type="submit" value="NewsFeed"> <Link to="/NewFeed" className="Buttons"> Health &amp; Fitness News </Link></button>
            </div>
        </div>
    );
}
export default Home