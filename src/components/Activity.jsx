import '/App.css'

const Activity = (props) => {
    const {Level, WeightType, MuscleGroup, Quantity, Cardio, TimePeriod, Exercise = [ExName, Description, Picture]} = props.FormInfo
    console.log(props)
    return(
        <div className="App">
            <div className='Box'>
                <h4>Cardio: {Cardio}</h4>
                <h4>Duration: {TimePeriod}</h4>
                <hr/>
                <h4>Level: {Level}</h4>
                <h4>Weight Type: {WeightType}</h4>
                <h4>Muscle Group: {MuscleGroup}</h4>
                <h4>Quantity: {Quantity}</h4>
            </div>
            <div className='Box'>

               <h4>Activity Name: {Exercise.map(ExName =><h4 key={ExName}>{ExName}</h4> )}</h4> 
               <h4>Description: {ExName.Description}</h4>
               <p>{ExName.Picture}</p>
            </div>
        </div>
    );
}
export default Activity

