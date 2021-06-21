import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const FormUserDetails = (props) => {
    const conti = e => {
        e.preventDefault()
        props.nextStep()
    }
    const styles = {
        button : {
            margin : 15
        }
    }
    const {values, handleChange} = props
    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title = "Enter User Details" />
                <TextField hintText = "Enter your first name" 
                floatingLabelText = "First Name"
                onChange = {handleChange('firstName')}
                defaultValue = {values.firstName} />
                <br />
                <TextField hintText = "Enter your last name" 
                floatingLabelText = "Last Name"
                onChange = {handleChange('lastName')}
                defaultValue = {values.lastName} />
                <br />
                <TextField hintText = "Enter your email" 
                floatingLabelText = "Email"
                onChange = {handleChange('email')}
                defaultValue = {values.email} />                
                <br />
                <RaisedButton 
                label = "Continue"
                primary = {true}
                style = {styles.button}
                onClick = {conti}
                />
            </React.Fragment>
        </MuiThemeProvider>
    )
    
}

export default FormUserDetails
