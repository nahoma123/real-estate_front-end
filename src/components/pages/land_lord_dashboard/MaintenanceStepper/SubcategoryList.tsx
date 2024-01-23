// SubcategoryList.tsx

import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

interface SubcategoryListProps {
  subcategories: Record<string, string[] | Record<string, string[] | Record<string, string[]>>>;
}

const SubcategoryList: React.FC<SubcategoryListProps> = ({ subcategories }) => {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  const handleCardClick = (subcategory: string) => {
    setSelectedSubcategory(subcategory === selectedSubcategory ? null : subcategory);
  };

  const renderLists = (lists: string[] | Record<string, string[] | Record<string, string[]>>) => {
    if (Array.isArray(lists)) {
      return (
        <ul>
          {lists.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    } else {
      return <SubcategoryList subcategories={lists as Record<string, string[] | Record<string, string[]>>} />;
    }
  };

  return (
    <Grid container spacing={2}>
      {Object.entries(subcategories).map(([subcategory, innerLists]) => (
        <Grid item xs={12} md={3} key={subcategory}>
          <Card onClick={() => handleCardClick(subcategory)}>
            <CardContent>
              <Typography variant="h6">{subcategory}</Typography>
              {selectedSubcategory === subcategory && renderLists(innerLists)}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SubcategoryList;
