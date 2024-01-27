import React, { useState } from 'react';
import {
  TextField,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(3),
    },
    button: {
      margin: theme.spacing(1),
    },
  })
);

interface FormData {
  personalInformation: {
    title: string;
    firstname: string;
    surname: string;
    email: string;
    phoneNumber: string;
    otherPhoneNumber: string;
  };
  addressInformation: {
    address: string;
    city: string;
    postcode: string;
  };
  additionalInformation: {
    alarmInformation: string;
    petInformation: string;
    furtherNotes: string;
    vulnerableOccupier: boolean;
    agreeTerms: boolean;
    agreePrivacyNotice: boolean;
  };
}

const ContactandAddress= ({setFormDatas}:any) => {
  const classes = useStyles();

  const [formData, setFormData] = useState<FormData>({
    personalInformation: {
      title: '',
      firstname: '',
      surname: '',
      email: '',
      phoneNumber: '',
      otherPhoneNumber: '',
    },
    addressInformation: {
      address: '',
      city: '',
      postcode: '',
    },
    additionalInformation: {
      alarmInformation: '',
      petInformation: '',
      furtherNotes: '',
      vulnerableOccupier: false,
      agreeTerms: false,
      agreePrivacyNotice: false,
    },
  });

  const handleChange = (
    category: keyof FormData,
    field: any
  ) => (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [category]: {
        ...prevData[category],
        [field]: event.target.value,
      },
    }));
  };

  const handleCheckboxChange = (field: keyof FormData['additionalInformation']) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      additionalInformation: {
        ...prevData.additionalInformation,
        [field]: event.target.checked,
      },
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add your logic for form submission here
    console.log('Form submitted:', formData);
    setFormDatas(formData)
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth className={classes.formControl}>
            <FormLabel>Personal Information</FormLabel>
            <FormGroup>
              <TextField
                label="Title"
                value={formData.personalInformation.title}
                onChange={handleChange('personalInformation', 'title')}
                required
              />
              <TextField
                label="First Name"
                value={formData.personalInformation.firstname}
                onChange={handleChange('personalInformation', 'firstname')}
                required
              />
              <TextField
                label="Surname"
                value={formData.personalInformation.surname}
                onChange={handleChange('personalInformation', 'surname')}
                required
              />
              <TextField
                label="Email"
                type="email"
                value={formData.personalInformation.email}
                onChange={handleChange('personalInformation', 'email')}
                required
              />
              <TextField
                label="Phone Number"
                value={formData.personalInformation.phoneNumber}
                onChange={handleChange('personalInformation', 'phoneNumber')}
                required
              />
              <TextField
                label="Other Phone Number"
                value={formData.personalInformation.otherPhoneNumber}
                onChange={handleChange('personalInformation', 'otherPhoneNumber')}
                required
              />
            </FormGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth className={classes.formControl}>
            <FormLabel>Address Information</FormLabel>
            <FormGroup>
              <TextField
                label="Address"
                value={formData.addressInformation.address}
                onChange={handleChange('addressInformation', 'address')}
                required
              />
              <TextField
                label="City/Town"
                value={formData.addressInformation.city}
                onChange={handleChange('addressInformation', 'city')}
                required
              />
              <TextField
                label="Postcode"
                value={formData.addressInformation.postcode}
                onChange={handleChange('addressInformation', 'postcode')}
                required
              />
            </FormGroup>
          </FormControl>

          <FormControl fullWidth className={classes.formControl}>
            <FormLabel>Additional Information</FormLabel>
            <FormGroup>
              <TextField
                label="Alarm Information"
                value={formData.additionalInformation.alarmInformation}
                onChange={handleChange('additionalInformation', 'alarmInformation')}
                required
              />
              <TextField
                label="Pet Information"
                value={formData.additionalInformation.petInformation}
                onChange={handleChange('additionalInformation', 'petInformation')}
                required
              />
              <TextField
                label="Further Notes"
                multiline
                rows={4}
                value={formData.additionalInformation.furtherNotes}
                onChange={handleChange('additionalInformation', 'furtherNotes')}
                required
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.additionalInformation.vulnerableOccupier}
                    onChange={handleCheckboxChange('vulnerableOccupier')}
                  />
                }
                label="Is there a vulnerable occupier at this property?"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.additionalInformation.agreeTerms}
                    onChange={handleCheckboxChange('agreeTerms')}
                  />
                }
                label="I agree to the terms and conditions"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.additionalInformation.agreePrivacyNotice}
                    onChange={handleCheckboxChange('agreePrivacyNotice')}
                  />
                }
                label="I agree to the privacy notice"
              />
            </FormGroup>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.button}
        >
          Submit
        </Button>
      </Grid>
    </form>
  );
};

export default ContactandAddress;