import React from 'react';
import { Card, Typography, CardContent } from "@material-ui/core";

import './index.css';

const Result = ({ result }) => {
  if (!result) {
    return null;
  }

  const { documentTitle, issues, pageUrl, img, KPI } = result;

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

        <div className="result-container">
          {KPI.values.map(({ name, result, count }) =>
              <Card>
                <CardContent>
                  <Typography color={result !== count ? "error" : "primary"}>
                    {name}
                  </Typography>
                  <Typography color="textSecondary" style={{textAlign: 'center'}}>
                    {result} / {count}
                  </Typography>
                </CardContent>
              </Card>
          )}
          <Card className="result-item">
            <CardContent>
              <Typography color="primary">
                Результат
              </Typography>
              <Typography color="textSecondary" style={{textAlign: 'center'}}>
                {KPI.result.toFixed(2)}% / {100}%
              </Typography>
            </CardContent>
          </Card>
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