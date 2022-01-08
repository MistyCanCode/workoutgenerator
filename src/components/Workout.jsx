import Activity from './Activity';
import '/App.css'

const Workout = (props) => {
    const {} = props.Activity
    return(
        <div className="App">
            <div>
            <Activity></Activity>
            </div><hr/>
            <h5><Link className="Buttons" to="/Home"> Home </Link></h5><br/>
            <h5><Link className="Buttons" to="/NewsFeed"> Health &amp; Fitness News</Link></h5>
        </div>
    );
}
export default Workout
