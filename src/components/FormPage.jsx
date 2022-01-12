import { useState } from 'react';
import { findRenderedComponentWithType } from 'react-dom/cjs/react-dom-test-utils.production.min';
import './App.css';

const FormPage = ({props}) => {

    const [form, updateForm] = useState({
            Level: {
                value: ''
            },
            WeightType: {
                value: ''
            },
            MuscleGroup: {
                value: ''
            },
            Quantity: {
                value: ''
            },
            Cardio: {
                value: ''
            },
            TimePeriod: {
                value: ''
            }
    })

    // const[activities, updateActivities] = useState([
    //     {
    //         name: "Level",
    //         value: "beginner"
    //     },{
    //         name: "WeightType",
    //         value: "free"
    //     },{
    //         name: "MuscleGroup",
    //         value: "upper"
    //     },{
    //         name: "Quantity",
    //         value: 3
    //     },{
    //         name: "Cardio",
    //         value: true
    //     },{
    //         name: "TimePeriod",
    //         value: 30
    //     }
    // ])


    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    const handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    const handleSubmit = (event) => {
        alert('You have submitted:' + this.state.Level, this.state.WeightType, this.state.MuscleGroup, this.state.Quantity, this.state.Cardio, this.state.TimePeriod);
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={this.handleSubmit}>
            <div className="App">
                <h1>Workout Generator</h1>
            </div>
            <form className="Form" action="" method="get">
                <div>
                    <h3>Select workout level</h3>
                    <div>
                        <input type="radio" id="beginner" name="Level" value="Beginner" checked={this.state.selectedOption === "Beginner"} onChange={this.handleChange}></input>
                        <label for="beginner">Beginner</label><br></br>
                        <input type="radio" id="intermediate" name="Level" value="Intermediate" checked={this.state.selectedOption === "Intermediate"} onChange={this.handleChange}></input>
                        <label for="intermediate">Intermediate</label><br></br>
                        <input type="radio" id="advanced" name="Level" value="Advanced" checked={this.state.selectedOption === "Advanced"} onChange={this.handleChange}></input>
                        <label for="advanced">Advanced</label><br></br>
                    </div>
                </div><hr></hr>

                <div>
                    <h3>Select weight type</h3>
                    <div>
                        <input type="radio" id="free" name="WeightType" value="Free" checked={this.state.selectedOption === "Free"} onChange={this.handleChange}></input>
                        <label for="free">Free Weights</label><br></br>
                        <input type="radio" id="machine" name="WeightType" value="Machine" checked={this.state.selectedOption === "Machine"} onChange={this.handleChange}></input>
                        <label for="machine">Machine Weights</label><br></br>
                        <input type="radio" id="resistance" name="WeightType" value="Resistance" checked={this.state.selectedOption === "Resistance"} onChange={this.handleChange}></input>
                        <label for="resistance">Resistance Weights</label><br></br>
                        <input type="radio" id="body" name="WeightType" value="Body" checked={this.state.selectedOption === "Body"} onChange={this.handleChange}></input>
                        <label for="body">Body Weight</label><br></br>
                        <input type="radio" id="random" name="WeightType" value="Random" checked={this.state.selectedOption === "Random"} onChange={this.handleChange}></input>
                        <label for="random">Random Weights</label><br></br>
                    </div>
                </div><hr></hr>

                <div>
                    <h3>Select Muscle Group</h3>
                </div>
                <div>
                    <input type="radio" id="upper" name="MuscleGroup" value="Upper" checked={this.state.selectedOption === "Upper"} onChange={this.handleChange}></input>
                    <label for="upper">Upper Body</label><br></br>
                    <input type="radio" id="abs" name="MuscleGroup" value="Abs" checked={this.state.selectedOption === "Abs"} onChange={this.handleChange}></input>
                    <label for="abs">Abs</label><br></br>
                    <input type="radio" id="lower" name="MuscleGroup" value="Lower" checked={this.state.selectedOption === "Lower"} onChange={this.handleChange}></input>
                    <label for="lower">Lower Body</label><br></br>
                    <input type="radio" id="varied" name="MuscleGroup" value="Varied" checked={this.state.selectedOption === "Varied"} onChange={this.handleChange}></input>
                    <label for="varied">Random Muscles</label><br></br>
                    <div>
                        <h4>Select Quantity</h4>
                        <div>
                            <label for="quantity"> Quantity (up to 5)</label><br></br>
                            <input type="range" id="quantity" name="Quantity" value="3" min="1" max="5"></input>
                        </div>
                    </div>
                </div><hr></hr>

                <div>
                    <h3>Want to add Cardio?</h3>
                    <div>
                        <input type="radio" id="yep" name="Cardio" value="Yes" checked={this.state.selectedOption === "Yes"} onChange={this.handleChange}></input>
                        <label for="yep">Yes</label><br></br>
                        <input type="radio" id="nope" name="Cardio" value="No" checked={this.state.selectedOption === "No"} onChange={this.handleChange}></input>
                        <label for="nope">No</label><br></br><br></br>
                    </div>
                    <div>
                        <label for="cardioTime">Select up to 60 minutes</label>
                    </div>
                    <input type="range" id="cardioTime" name="TimePeriod" min="0" max="60" value="30" step="1"></input>

                </div><hr></hr>

                <div>
                    <button className="Buttons" type="submit" value="Submit" onClick={() => this.handleSubmit()}>Submit</button>&ensp;&ensp;
                    <button className="Buttons" type="reset" value="Reset"> Reset </button>
                </div>
            </form>
            <div>
            <h5><Link className="Buttons" to="/Home"> Home </Link></h5><br/>
            <h5><Link className="Buttons" to="/NewsFeed"> Health &amp; Fitness News</Link></h5>
            </div>
            </form>
        </div>
    );
}
export default FormPage;