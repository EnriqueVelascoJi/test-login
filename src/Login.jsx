import * as React from 'react';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';

//MUI Components 
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/icons-material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'



//Assets
import logo from '../src/assets/imgs/logo.png'

//Page Styles
const styles = {
    form: {
        height: '100vh',
        width: '100vw'
    },
    formLeft: {
        height: '100%',
        backgroundColor: 'rgba(69,46,112,50%)',
        width: '50%',
        float: 'left',
        display: 'flex'
    },
    formRigth: {
        height: '100%',
        backgroundColor: '#452E70',
        width: '50%',
        float: 'right',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: '90%'
    },
    formTitle: {
        textAlign: 'center'
    },
    formText: {
        color: '#E4B453'
    },
    button: {
        backgroundColor: '#D53638',
        color: '#ffffff'
    },
    field: {
        color: '#fff'
    }

}

export default function Login() {

    //State 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div style={styles.form}>
        <div style={styles.formLeft}>
            <Grid display={'flex'} justifyContent={'center'} alignItems={'center'}> 
                <img src={logo} style={styles.logo}/>
            </Grid>
        </div>
        <div style={styles.formRigth}>
            <Grid display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <form style={styles.formText}>
            <h1 style={styles.formTitle}>Inicia sesión</h1>
                <InputLabel style={styles.formText}>Email</InputLabel>
                <TextField 
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    required
                    variant="outlined"
                    color="#fff"
                    type="email"
                    fullWidth
                    value={email}
                    sx={{
                        mb: 3,
                        // Root class for the input field
                        "& .MuiOutlinedInput-root": {
                          color: "#fff",
                          fontFamily: "Arial",
                          // Class for the border around the input field
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#fff",
                            borderWidth: "1px",
                          },
                        },
                        // Class for the label of the input field
                        "& .MuiInputLabel-outlined": {
                          color: "#fff"
                        }
                      }}
                 />
                    <InputLabel style={styles.formText}>Password</InputLabel>
                    <TextField
                    color='#fff'
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    required
                    variant="outlined"
                    type="pass"
                    value={password}
                    fullWidth
                    sx={{
                        mb: 3,
                        // Root class for the input field
                        "& .MuiOutlinedInput-root": {
                          color: "#fff",
                          fontFamily: "Arial",
                          // Class for the border around the input field
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#fff",
                            borderWidth: "1px",
                          },
                        },
                        // Class for the label of the input field
                        "& .MuiInputLabel-outlined": {
                          color: "#fff"
                        }
                      }}
                 />
                 <Button style={styles.button} fullWidth>Entrar</Button>
             
        </form>

            </Grid>
        </div>
    </div>
  );
}
