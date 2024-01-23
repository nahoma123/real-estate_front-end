import React, { useState } from 'react';
import { Button, Grid, Card, CardContent, Typography } from '@material-ui/core';

interface WindowCardListProps {
  data: {
    [key: string]: string[];
  };
}

const WindowCardList = ({ data }:any) => {
    const [selectedCategory, setSelectedCategory] = useState<string[]>(data);
    const [breadcrumbTrail, setBreadcrumbTrail] = useState<string[]>(["Home"]);
    const [currentPath, setCurrentPath] = useState();
    const handleSelectedList = (category: any) => {
        if(selectedCategory[category] !== null){
            setSelectedCategory(selectedCategory[category]);
            setBreadcrumbTrail((prevTrail) => [...prevTrail, category]);
        }
        console.log(data[category])
      };
    
      const handleBreadcrumbClick = (index: number) => {
        if (index === 0) {
          setSelectedCategory(data);
          setBreadcrumbTrail(['Home']);
        } else {
          setBreadcrumbTrail((prevTrail) => prevTrail.slice(0, index + 1));
          const lastCategory = breadcrumbTrail[index];
          setSelectedCategory(data[lastCategory]);
          console.log(breadcrumbTrail);
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
                {index < breadcrumbTrail.length - 1 && ' / '}
            </span>
            ))}
        </div>
        {selectedCategory && Array.isArray(selectedCategory) === false && (
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
      
      {selectedCategory && Array.isArray(selectedCategory) && (
        <div>
            <ul>
            {selectedCategory.map((subcategory: string, index: number) => (
                <li key={index}>
                <label>
                    <Card style={{ cursor: 'pointer', display:'flex', marginTop: 12 }}>
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
    </div>
  );
};

export default WindowCardList;
