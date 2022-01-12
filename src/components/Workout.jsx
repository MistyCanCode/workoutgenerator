import Activity from './Activity';
import '/App.css'

const Workout = (props) => {
    const[activities, updateActivities] = useState([
        {
            name: "Level",
            value: "beginner"
        },{
            name: "WeightType",
            value: "free"
        },{
            name: "MuscleGroup",
            value: "upper"
        },{
            name: "Quantity",
            value: 3
        },{
            name: "Cardio",
            value: true
        },{
            name: "TimePeriod",
            value: 30
        }
    ])

    return(
        <div className="App">
            <div>
            {activities.map((activity, index) => (
            <Activity 
            key={name + index} 
            name={activity.name}/>
            ))}
            </div><hr/>
            <h5><Link className="Buttons" to="/Home"> Home </Link></h5><br/>
            <h5><Link className="Buttons" to="/NewsFeed"> Health &amp; Fitness News</Link></h5>
        </div>
    );
}
export default Workout
