import '/App.css'
import { Link } from 'react-router';

const SignUp = () => {
    return(

        <div classname="App">
            <div>
                <h3>Sign Up Here</h3>
                <h5>It's free &amp; easy</h5>
            </div><hr/>
            <div>
                <input type="email" value="Email" name="Email"></input>
                <label for="Email">Email</label><br/>
                <input type="text" value="FullName" name="FullName"></input>
                <label for="FullName">Full Name</label><br/>
                <input type="text" value="UserName" name="UserName"></input>
                <label for="UserName">User Name</label><br/>
                <input type="password" value="Password" name="Password"></input>
                <label for="Password">Password</label><br/>
                <input type="time" name="DateJoined" hidden="true"></input><br/>
                <div>
                    <button className="Buttons" type="submit"> Submit </button>&ensp;&ensp;
                    <button className="Buttons" type="reset"> Clear Form </button>
                </div>
            </div><hr/>
            <div>
                <h4>Already Signed Up?</h4> 
                <h4><Link className="Buttons" to="/Login">Log in Here</Link></h4><hr/>
                <div>
                <h5><Link className="Buttons" to="/Home"> Home </Link></h5><br/>
                <h5><Link className="Buttons" to="/NewsFeed"> Health &amp; Fitness News</Link></h5>
                </div>
            </div>
        </div>
    );
}
export default SignUp
