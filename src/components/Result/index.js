import React from 'react';
import {Card, Typography, CardContent} from "@material-ui/core";

import './index.css';

const Result = ({ result }) => {
  if (!result) {
    return null;
  }

  const { documentTitle, issues, pageUrl, img } = result;

  return (
      <div className="result">
        <div className="head">
          <div className="title">
            <Typography
                variant="h4"
                color="textPrimary"
                component="h2"
            >
              {documentTitle}
            </Typography>
            <Typography
                variant="subtitle1"
                color="textSecondary"
                style={{marginBottom: '10px'}}
            >
              {pageUrl}
            </Typography>
          </div>
          <img src={img} alt="screenshot site" height="200px"/>
        </div>


        {issues.map((issue) =>
            <Card style={{marginBottom: '10px'}}>
              <CardContent>
                <Typography color="error" style={{marginBottom: '7px'}}>
                  {issue.code}
                </Typography>
                <Typography paragraph>
                  <b>Текст ошибки</b>: {issue.message}
                </Typography>
                <Typography color="textSecondary">
                  <b>Элемент</b>: {issue.context}
                </Typography>
              </CardContent>
            </Card>
        )}
      </div>

  );
};

export default Result;