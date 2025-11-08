"use client";

import { useRef } from "react";

import styles from "./style.module.css";
import { useColorToggleCounter } from "@/app/hooks/useButtonChangeToggle";
import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
const HomePage = () => {
  const { buttonRef, count, handleClick } = useColorToggleCounter({
    toggleColor: "#1e90ff",
    getButtonText: (count) => `Đã click ${count} lần`,
  });

  return (
    <>
      <Container maxWidth='xs'>
        <Box className={styles.contentWrapper}>
          <Typography component='h1' variant='h5'>
            Random Picker
          </Typography>
          <Typography component='p'>
            Input the value list and press SPIN
          </Typography>
          <Box sx={{ mt: 3 }} className={styles.box}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }}>
                <Typography
                  component='label'
                  htmlFor='choice-cards'
                  className={styles.choiceLabel}
                >
                  List selection
                </Typography>

                <TextareaAutosize
                  className={styles.choiceCards}
                  name='choice-cards'
                  id='choice-cards'
                  aria-label='minimum height'
                  minRows={10}
                  placeholder='Each value each line'
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              disableRipple
            >
              Spin
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
