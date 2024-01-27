import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Import your step components
import Problems from './Problems';
import AddDocuments from './AddDocuments';
import ContactandAddress from './ContactandAddress';

const steps = ['What is the problem>', 'Add Images, videos/audio', 'Contact and Address Details'];

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

export default function MaintenanceLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [uploadedFiles, setUploadedFiles] = React.useState<FileList | null>(null);
  const [problemDetails, setProblemDetails] = React.useState<string>("");
  const [breadcrumbTrailPath, setBreadCrumbTrailPath] = React.useState([]);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const [formDatas, setFormDatas] = React.useState<FormData>({
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

  const isStepOptional = (step: number) => {
    return step === -1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
  
    if (activeStep === 0 && problemDetails === "") {
      console.error('Please provide problem details before proceeding to the next step.');
    } else if (activeStep === 1 && (!uploadedFiles || uploadedFiles.length < 1)) {
      console.error('Please upload at least one file before proceeding to the next step.');
    } else {
      if (activeStep === steps.length - 1) {
        // Final step, log the necessary data
        console.log('Final Step - Data:', {
          problemDetails,
          breadcrumbTrailPath,
          formDatas,
        });
      }
  
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    }
  };
  

  const handleDocumentsUpload = (files: FileList | null) => {
    console.log('Uploaded files:', files);
    setUploadedFiles(files);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setProblemDetails("")
    setActiveStep(0);
  };

  const stepComponents = [
    <Problems key="Step1" setProblemDetails={setProblemDetails} setBreadCrumbTrailPath={setBreadCrumbTrailPath} />,
    <AddDocuments key="Step2" onDocumentsUpload={handleDocumentsUpload} onFinish={handleNext} />,
    <ContactandAddress key="Step3" setFormDatas={setFormDatas} />,
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
            <div className='m-4'>
                {stepComponents[activeStep]}
            </div>          
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, margin:1 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
