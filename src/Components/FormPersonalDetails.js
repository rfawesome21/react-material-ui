import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const FormPersonalDetails = (props) => {
    const conti = e => {
        e.preventDefault()
        props.nextStep()
    }
    const back = e => {
        e.preventDefault()
        props.prevStep()
    }
    const styles = {
        button : {
            margin : 15
        }
    }

    const {values, handleChange} = props
    return (
        <div>
            <MuiThemeProvider>
                <AppBar title = "Enter personal details" />
            <TextField hintText = "Enter your city" 
                floatingLabelText = "City"
                onChange = {handleChange('city')}
                defaultValue = {values.city} />
                <br />
                <TextField hintText = "Enter your occupation" 
                floatingLabelText = "Occupation"
                onChange = {handleChange('occupation')}
                defaultValue = {values.occupation} />
                <br />
                <TextField hintText = "Enter your bio" 
                floatingLabelText = "Bio"
                onChange = {handleChange('bio')}
                defaultValue = {values.bio} />
                <br />
                <RaisedButton 
                label = "Continue"
                primary = {true}
                style = {styles.button}
                onClick = {conti}
                />
                <RaisedButton 
                label = "Back"
                primary = {false}
                style = {styles.button}
                onClick = {back}
                />
                </MuiThemeProvider>
        </div>
    )
}

export default FormPersonalDetails
