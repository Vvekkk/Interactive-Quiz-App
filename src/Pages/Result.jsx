import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Result.css"
import { Button } from '@mui/material';

const Result = ({name, score}) => {
const Navigate = useNavigate();

  useEffect(() => {
     if(!name) {
      useNavigate("/");
     } 


  }, [name, Navigate]);


  return ( 
    <div className='result'>
      <span className='title' style={{paddingTop: 60}}>{name}'s <br /> Final Score: {score}</span>
      <Button
      variant="contained"
      color="secondary"
      size="large"
      style={{alignSelf: "center", marginTop: 20 }}
      href="/"
      >
        Go To Homepage
      </Button>
      <img src='/trophy.svg' className="trophy" alt="trophy image" />
      </div>
  )
}

export default Result