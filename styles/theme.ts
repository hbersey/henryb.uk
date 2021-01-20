import { createMuiTheme } from '@material-ui/core';

const light = '#FEF8EC';
const red = '#F0544F';
const dark = '#363032';
const darker = "#312C2D";

// https://coolors.co/312c2d-363032-f0544f-fef8ec
export const useTheme = (darkMode) => createMuiTheme({
    ...{ // Both Modes
      typography: {
        fontFamily: '\'Noto Sans\', sans-serif',
        body1: {
          fontFamily: '\'Open Sans\', sans-serif'
        },
        body2: {
          fontFamily: '\'Open Sans\', sans-serif'
        }

      },
      palette: {
        primary: {
          contrastText: light
        }
      }
    }
    , ...(darkMode
    ? { // Dark Mode Only
      overrides: {
        MuiButton: {
          root: {
            '& .MuiIcon-root': {
              color: red
            },
            '&:hover': {
              backgroundColor: red,
              '& .MuiIcon-root': {
                color: light
              }
            }
          },
          text: {
            '&:hover': {
              backgroundColor: 'inherit',
              color: red
            }
          }
        },
        MuiSwitch: {
          root: {
            color: light
          }
        }
      },
      palette: {
        type: 'dark',
        primary: {
          main: dark
        },
        secondary: {
          main: red
        },
        background: {
          default: darker
        },
        text: {
          primary: light
        }
      }
    }
    : { // Light Mode
      overrides: {
        MuiIconButton: {
          root: {
            '& .MuiIcon-root': {
              color: light
            }
          }
        }
      },
      palette: {
        primary: {
          main: red
        },
        secondary: {
          main: darker
        },
        background: {
          default: light
        },
        text: {
          primary: dark
        }
      }
    })
  })
;