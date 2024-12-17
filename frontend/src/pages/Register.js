import React, { useState, useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, Stack, Typography, Button, FormControl, InputLabel, OutlinedInput, FormHelperText, Checkbox, FormControlLabel, Link, Alert } from '@mui/material';
import { z as zod } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

const schema = zod.object({
  firstName: zod.string().min(1, 'First name is required'),
  lastName: zod.string().min(1, 'Last name is required'),
  email: zod.string().email('Invalid email address').min(1, 'Email is required'),
  password: zod.string().min(6, 'Password must be at least 6 characters'),
  terms: zod.boolean().refine((value) => value, 'You must accept the terms and conditions'),
});

const defaultValues = { firstName: '', lastName: '', email: '', password: '', terms: false };

const Register = () => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);
  const { control, handleSubmit, setError, formState: { errors } } = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const onSubmit = useCallback(
    async (values) => {
      setIsPending(true);
      try {
        // Mock sign-up logic
        console.log('User Registered:', values);
        setTimeout(() => {
          setIsPending(false);
          navigate('/login'); // Redirect to login after successful registration
        }, 1000);
      } catch (error) {
        setError('root', { type: 'server', message: 'An unexpected error occurred' });
        setIsPending(false);
      }
    },
    [navigate, setError]
  );

  return (
    <Box sx={{ maxWidth: '500px', margin: '0 auto', padding: '2rem' }}>
      <Stack spacing={3}>
        <Typography variant="h4" textAlign="center">Sign Up</Typography>
        <Typography variant="body2" textAlign="center">
          Already have an account?{' '}
          <Link href="/login" underline="hover" color="primary">Sign in</Link>
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <FormControl error={Boolean(errors.firstName)}>
                  <InputLabel>First Name</InputLabel>
                  <OutlinedInput {...field} label="First Name" />
                  {errors.firstName && <FormHelperText>{errors.firstName.message}</FormHelperText>}
                </FormControl>
              )}
            />
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <FormControl error={Boolean(errors.lastName)}>
                  <InputLabel>Last Name</InputLabel>
                  <OutlinedInput {...field} label="Last Name" />
                  {errors.lastName && <FormHelperText>{errors.lastName.message}</FormHelperText>}
                </FormControl>
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <FormControl error={Boolean(errors.email)}>
                  <InputLabel>Email Address</InputLabel>
                  <OutlinedInput {...field} label="Email Address" />
                  {errors.email && <FormHelperText>{errors.email.message}</FormHelperText>}
                </FormControl>
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <FormControl error={Boolean(errors.password)}>
                  <InputLabel>Password</InputLabel>
                  <OutlinedInput {...field} label="Password" type="password" />
                  {errors.password && <FormHelperText>{errors.password.message}</FormHelperText>}
                </FormControl>
              )}
            />
            <Controller
              name="terms"
              control={control}
              render={({ field }) => (
                <FormControl error={Boolean(errors.terms)}>
                  <FormControlLabel
                    control={<Checkbox {...field} />}
                    label="I accept the terms and conditions"
                  />
                  {errors.terms && <FormHelperText>{errors.terms.message}</FormHelperText>}
                </FormControl>
              )}
            />
            {errors.root && <Alert severity="error">{errors.root.message}</Alert>}
            <Button variant="contained" color="primary" type="submit" disabled={isPending} sx={{ padding: '0.8rem', fontSize: '1rem' }}>
              {isPending ? 'Signing Up...' : 'Sign Up'}
            </Button>
          </Stack>
        </form>
      </Stack>
    </Box>
  );
};

export default Register;
