import { Flex } from "../StyledItems"
import {styled, Button, TextField} from "@mui/material";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const schema = yup
  .object()
  .shape({
    email: yup.string().email().required(),
  })


export const Title = styled('b')(()=>({
    fontSize:'39px',
    textAlign:'left',
    fontWeight: 500,
    lineHeight: '46.8px',
    color: '#B0B1B3',
    marginBottom:'20px'

})); 

export const StyledButton = styled(Button)(()=>({
    background: '#19191A',
    color: '#FFFFFF',
    fontSize: '16px',
    fontWeight: 600,
    marginTop: '20px',
    textAlign: 'center',
    padding: '18px 28px 18px 28px',
    textTransform: 'capitalize',
    width: '100% !important',
    "&:hover": {
        background: '#19191A',
        color: '#FFFFFF',
    }

}));

export const HelpText = styled('p')(()=>({
    fontWeight: 600,
    marginTop:'20px',
    fontSize:'16px',
    width:'356px !important' ,
    textAlign: 'center',
    lineHeight: '19.2px'
}));

export const Form = () => {
    const smallScreen = window.innerWidth <450;
    const { register, handleSubmit , control,  formState: { errors }} = useForm({
        resolver: yupResolver(schema),
      });
    const onSubmit = (data) => {
        console.log(data.email);
      };
    return (
        <Flex  width={smallScreen?'100%' : "40%"} padding="auto 50px !important">
        <Flex justifyContent="center" flexDirection="column" margin="auto auto" alignItems="center" height="100vh" width="355px" textAlign="center" >
        <Title>Sign up for exclusive access.</Title>
        <form onSubmit={handleSubmit(onSubmit)} style={{width:'355px', }}>
            <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{ required: 'Email is required' }}
                render={({ field }) => (
                <TextField
                    {...field}
                    placeholder="Your email address"
                    variant="outlined"
                    fullWidth
                    error={Boolean(errors.email)}
                    helperText={errors.email && errors.email.message}
                />
                )}
            />
            <StyledButton type="submit" variant="contained" color="primary">
                Get started
            </StyledButton>
            </form>
            <HelpText>You’ll receive an email with an invite link to join.</HelpText>
         </Flex>
         </Flex>
         )
}