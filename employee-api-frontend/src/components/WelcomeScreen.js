import React from 'react';


class Welcome extends React.Component{
    constructor(props){
        super(props);
        this.handleGetAllClick = this.callGetAllAPI.bind(this)
        this.handleClearClick = this.clear.bind(this)


        this.state = { 
            allEmployees:"",
        }
    }

    async callGetAllAPI(){
        const resp = await fetch("http://localhost:5000/api/v2/employees",{method:"get"})
        const respJSON = await resp.json();
        this.setState({
            allEmployees: respJSON
        })
    }

    clear(){
        this.setState({
            allEmployees: ""
        })
    }

    render(){
        return(
        <div className ="Main">
            <h1>Welcome to the Dummy Employee API</h1>
            <p>Here you can manipulate the Dummy Employee databae using GET(all), GET(Single), POST, PUT, DELETE</p>
            <div>
               <GetAllButton onClick={this.handleGetAllClick} /> 
            </div>
            <br/>
            <div>

               <GetSingleButton /> 
            </div><br/>
            
            <PostForm /><br/>
            <PostButton /><br/>
            <UpdateButton /><br />
            <DeleteButton /><br/>
            <ClearButton onClick = {this.handleClearClick}/><br/>
            {JSON.stringify(this.state.allEmployees)}
        </div>);
    }
}

class GetAllButton extends React.Component{
    render(){
        return(
            <button className="getAllButton" onClick={this.props.onClick}>
                Get all employees
            </button>
        );
    }
}

class PostForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name:"",
            salary:"",
            age:""
        }

        this.handleSubmit = this.post.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onSalaryChange = this.onSalaryChange.bind(this);
        this.onAgeChange = this.onAgeChange.bind(this);
    }

    onNameChange(event){
        this.setState({
            name: event.target.value
        })
    }

    onSalaryChange(event){
        this.setState({
            salary: event.target.value
        })
    }

    onAgeChange(event){
        this.setState({
            age: event.target.value
        })
    }

    

    async post(event){
        event.preventDefault();
        const data = JSON.stringify(this.state)
        const post = await fetch("http://localhost:5000/api/v2/employees", 
        {
            method:"post",
            body:data,
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        );

    }

    render(){
        return(
            <form onSubmit ={this.handleSubmit}>
                <label>
                    name: </label>
                    <input type="text" value={this.state.name} onChange = {this.onNameChange}/>
               
                <label>
                    salary:</label>
                    <input type="text" value={this.state.salary} onChange = {this.onSalaryChange}/>
                
                <label>
                    age:
                    </label>
                    <input type="text" value={this.state.age} onChange = {this.onAgeChange}/>
              
                <input type="submit" value="submit"/>

            </form>
        );
    }
}

class GetSingleButton extends React.Component{
    render(){
        return(
            <button className ="getSingleEmployeeButton">
                Get an employee
            </button>
        );
    }
}

class PostButton extends React.Component{
    render(){
        return(
            <button className = "createSingleEmployeeButton">
                Create a new employee
            </button>
        );
    }
}

class UpdateButton extends React.Component{
    render(){
        return(
            <button className = "updateEmployeeButton">
                Update an employee
            </button>
        );
    }
}

class DeleteButton extends React.Component{
    render(){
        return(
        <button className="deleteEmployeeButton">
            Delete an employee
        </button>);
    }
}

class ClearButton extends React.Component{
    render(){
        return(
            <button className="clearButton" onClick={this.props.onClick}>
                Clear
            </button>
        )
    }
}


export default Welcome;