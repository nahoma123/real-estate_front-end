import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';

interface WindowCardListProps {
  data: {
    [key: string]: string[];
  };
}

const WindowCardList = ({ data }:any) => {
    const [selectedCategory, setSelectedCategory] = useState<string[]>(data);
    
    const handleSelectedList = (category: any) => {
        if(selectedCategory[category] !== null){
            setSelectedCategory(selectedCategory[category]);
        }
        console.log(data[category])
      };

  return (
    <div>
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
            {/* <Typography variant="h5">Selected Category: {selectedCategory}</Typography> */}
            <ul>
            {selectedCategory.map((subcategory: string, index: number) => (
                <li key={index}>{subcategory}</li>
            ))}
            </ul>
        </div>
        )}
    </div>
  );
};

export default WindowCardList;
