import React, { useState } from 'react';
import { Button, Grid, Card, CardContent, Typography, Divider } from '@material-ui/core';
import TextField from '@mui/material/TextField';


const WindowCardList = ({ data, setProblemDetails, setBreadCrumbTrailPath }:any) => {
    const [selectedCategory, setSelectedCategory] = useState<any>(data || [] || String);
    const [renderTurn, setRenderTurn] = useState(true);
    const [otherTurn, setOtherTurn] = useState(false);
    const [breadcrumbTrail, setBreadcrumbTrail] = useState<string[]>(["Home"]);
    const [finalProblem, setFinalProblem] = useState("")
    const [currentPath, setCurrentPath] = useState();
    const [formData, setFormData] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setProblemDetails(e.target.value)
      setFormData(e.target.value);
    };

    const handleSelectedList = (category: any) => {
        if (category === "Other"){
          setOtherTurn(true)
          setFinalProblem("Other")
          setRenderTurn(false)
        }
        else if(selectedCategory[category] !== null){
            setSelectedCategory(selectedCategory[category]);
            setBreadcrumbTrail((prevTrail) => [...prevTrail, category]);
            setBreadCrumbTrailPath((prevTrail:any) => [...prevTrail, category])
        }
      };
    
      const handleBreadcrumbClick = (index: number) => {
        setOtherTurn(false)
        setProblemDetails("")
        if (index === 0) {
          setSelectedCategory(data);
          setBreadcrumbTrail(['Home']);
          setBreadCrumbTrailPath(['Home'])
          setRenderTurn(true);
        } else {
          setBreadcrumbTrail((prevTrail) => prevTrail.slice(0, index + 1));
          setBreadCrumbTrailPath((prevTrail:any) => prevTrail.slice(0, index + 1))
          const lastCategory = breadcrumbTrail[index];
          setSelectedCategory(data[lastCategory]);
          let tempdata = data;
          for(let i=1;i<=index;i++){
            tempdata = tempdata[breadcrumbTrail[i]]
            if (typeof tempdata === 'string'){
              setRenderTurn(false)
            }
            else{
              setRenderTurn(true)
            }
          }
          setSelectedCategory(tempdata)
        }
      };

  return (
    <div>
        <div>
            {breadcrumbTrail.map((breadcrumb, index) => (
            <span key={index}>
                <Button onClick={() => handleBreadcrumbClick(index)} variant='text' color="primary" size='small' style={{ textTransform: 'none' }}>
                    {breadcrumb}
                </Button>
                {index < breadcrumbTrail.length - 1 && '/'}
            </span>
            ))}
        </div>
        {selectedCategory && renderTurn && Array.isArray(selectedCategory) === false && (
            <Grid container spacing={2}>
            {Object.entries(selectedCategory).map(([category, subcategories]) => (
              <Grid item xs={12} md={3} key={category}>
                <Card onClick={() => handleSelectedList(category)} style={{ cursor: 'pointer' }}>
                  <img
                    src="https://images.unsplash.com/photo-1540103711724-ebf833bde8d1?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Temporary"
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <CardContent>
                    <Typography component="div" style={{ fontSize: '0.7rem' }}>
                      {category}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )
        }
      
      {selectedCategory && renderTurn && Array.isArray(selectedCategory) && (
        <div>
            <ul>
            {selectedCategory.map((subcategory: string, index: number) => (
                <li key={index}>
                <label>
                    <Card onClick={() => {setRenderTurn(false); setOtherTurn(false); setFinalProblem(subcategory) }} style={{ cursor: 'pointer', display:'flex', marginTop: 12 }}>
                        <input type="radio" name="subcategory" value={subcategory} className='ml-2' />
                        <CardContent>
                            <Typography component="div" style={{ fontSize: '0.7rem' }}>
                            {subcategory}
                            </Typography>
                        </CardContent>
                    </Card>
                </label>
                </li>
            ))}
            </ul>
        </div>
       )}
       {
        renderTurn === false && (
          <div>
            <label>
                <Card style={{ cursor: 'pointer', display:'flex', marginTop: 12 }}>
                    <input type="radio" name="subcategory"  className='ml-2' />
                    <CardContent>
                        <Typography component="div" style={{ fontSize: '0.7rem' }}>
                        { finalProblem }
                        </Typography>
                    </CardContent>
                </Card>
            </label>
            <Divider style={{marginTop:20, marginBottom:20}} />
            <form>
              <TextField
                label="Fault Details *"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={formData}
                onChange={handleInputChange}
                margin="normal"
              />
            </form>
          </div>
        )
       }
    </div>
  );
};

export default WindowCardList;
