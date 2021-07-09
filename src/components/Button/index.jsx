import React from 'react'
import Button from 'react-bootstrap/Button'
import "./Button.css"

function Btn(props){
   return <Button variant={props.btn} onClick={props.btnAction} >{props.name}</Button>
}

export default Btn;