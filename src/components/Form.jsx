import './App.css';

function FormPage(props) {
    const [Level, WeightType, MuscleGroup, Quantity, Cardio, TimePeriod] = props.children;

    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // handleChange(event) {
    //     this.setState({value: event.target.value});
    // }

    // handleSubmit(event) {
    //     alert('Choices are:' + this.state.value + Level, WeightType, MuscleGroup, Quantity, Cardio, TimePeriod);
    //     event.preventDefault();
    //   }

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
                        <input type="radio" id="beginner" name="Level" value={this.state.Level} onChange={this.handleChange}></input>
                        <label for="beginner">Beginner</label><br></br>
                        <input type="radio" id="intermediate" name="Level" value={this.state.Level} onChange={this.handleChange}></input>
                        <label for="intermediate">Intermediate</label><br></br>
                        <input type="radio" id="advanced" name="Level" value={this.state.Level} onChange={this.handleChange}></input>
                        <label for="advanced">Advanced</label><br></br>
                    </div>
                </div><hr></hr>

                <div>
                    <h3>Select weight type</h3>
                    <div>
                        <input type="radio" id="free" name="WeightType" value="Free"></input>
                        <label for="free">Free Weights</label><br></br>
                        <input type="radio" id="machine" name="WeightType" value="Machine"></input>
                        <label for="machine">Machine Weights</label><br></br>
                        <input type="radio" id="resistance" name="WeightType" value="Resistance"></input>
                        <label for="resistance">Resistance Weights</label><br></br>
                        <input type="radio" id="body" name="WeightType" value="Body"></input>
                        <label for="body">Body Weight</label><br></br>
                        <input type="radio" id="random" name="WeightType" value="Random"></input>
                        <label for="random">Random Weights</label><br></br>
                    </div>
                </div><hr></hr>

                <div>
                    <h3>Select Muscle Group</h3>
                </div>
                <div>
                    <input type="radio" id="upper" name="MuscleGroup" value="Upper"></input>
                    <label for="upper">Upper Body</label><br></br>
                    <input type="radio" id="abs" name="MuscleGroup" value="Abs"></input>
                    <label for="abs">Abs</label><br></br>
                    <input type="radio" id="lower" name="MuscleGroup" value="Lower"></input>
                    <label for="lower">Lower Body</label><br></br>
                    <input type="radio" id="varied" name="MuscleGroup" value="Varied"></input>
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
                        <input type="radio" id="yep" name="Cardio" value="Yes"></input>
                        <label for="yep">Yes</label><br></br>
                        <input type="radio" id="nope" name="Cardio" value="No"></input>
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