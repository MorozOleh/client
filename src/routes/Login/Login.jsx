import React, { useRef, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import styles from "./Login.module.scss";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormikTextField } from "../../common/controllers";
import instance from "../../axios";
import { gsap } from "gsap";
import { useAuth } from "../../hooks/useAuth";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const auth = useAuth();

  console.log(auth);
  const containerRef = useRef();
  const btnRef = useRef();
  const tl = gsap.timeline({ defaults: { duration: 1 } });

  useEffect(() => {
    tl.fromTo(containerRef.current, { scale: 0 }, { scale: 1 });
    tl.fromTo(btnRef.current, { scale: 0 }, { scale: 1 }, "<50%");
  }, []);

  const handleSubmit = async (values, helpers) => {
    try {
      const { data } = await instance.post("/auth/login", values);
      auth.signin(data);

      helpers.resetForm();
    } catch (err) {
      helpers.setErrors({ message: "Please provide correct credentials" });
    }
    helpers.setSubmitting(false);
  };

  return (
    <Box className={styles.container} ref={containerRef}>
      <Typography align="center">Sing in</Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={Yup.object({
          email: Yup.string().min(3).required(),
          password: Yup.string().min(6).required(),
        })}
      >
        {({ values, errors, isSubmitting }) => {
          return (
            <Form>
              <FormikTextField
                error
                name="email"
                autoComplete="username"
                className={styles.input}
                type="email"
                errorProps={{
                  align: "center",
                }}
                fullWidth
                placeholder="Type your email"
              />
              <FormikTextField
                error
                name="password"
                type="password"
                autoComplete="current-password"
                className={styles.input}
                errorProps={{
                  align: "center",
                }}
                fullWidth
                placeholder="Type your password"
              />
              <Typography sx={{ mt: 2 }} align="center" color="error">
                {errors.message}
              </Typography>
              <Button
                ref={btnRef}
                type="submit"
                disabled={isSubmitting}
                className={styles.btn}
                variant="contained"
                color="secondary"
              >
                submit
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default Login;
