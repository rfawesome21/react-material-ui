import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import {List, ListItem} from 'material-ui/List'

const Confirm = (props) => {
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
    
    const {values} = props
    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title = "Confirm" />
                <List>
                    
                <ListItem 
                    primaryText = "First Name"
                    secondaryText = {values.firstName}
                    />
                    <ListItem 
                    primaryText = "Last Name"
                    secondaryText = {values.lastName}
                    />
                    <ListItem 
                    primaryText = "Email"
                    secondaryText = {values.email}
                    />
                    <ListItem 
                    primaryText = "City"
                    secondaryText = {values.city}
                    />
                    <ListItem 
                    primaryText = "Occupation"
                    secondaryText = {values.occupation}
                    />
                    <ListItem 
                    primaryText = "Bio"
                    secondaryText = {values.bio}
                    />
                    
                </List>
                
                <RaisedButton 
                label = "Confirm & Continue"
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
            </React.Fragment>
        </MuiThemeProvider>
    )
}

export default Confirm
