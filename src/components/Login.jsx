import '/App.css'
import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return(
        <div className="App">
            <div>
            <h2>Please log in to get a workout</h2><hr/>
            <div>
                <div>
                    <input type="text" value="UserName" name="UserName">User Name</input>
                    <label for="UserName">User Name</label><br/><br/>
                    <input type="password" value="Password" name="Password">Password</input>
                    <label for="Password">Password</label>
                </div>
                <button className="Buttons" type="submit" value="LogIn">LogIn</button>
            </div>
            </div><hr/>
            <div>
            <h4>Don't have an account?</h4>
            <h4><Link className="Buttons" to="/SignUp">Create an account here</Link></h4>
            </div><hr/>
            <div>
            <h5><Link className="Buttons" to="/Home"> Home </Link></h5><br/>
            <h5><Link className="Buttons" to="/NewsFeed"> Health &amp; Fitness News</Link></h5>
            </div>
        </div>
    );
}
export default Login