import { Card, Col, Row, Title, Text, Code } from '@v-thomas/shared/ui';
import styled from 'styled-components';
import { Chart } from 'chart.js';
import { useEffect } from 'react';

const TopCards = styled(Card)`
  padding-block: 1.5rem;
  padding-inline: 1.25rem;
`;

// const ChartComp = styled.canvas`
//   width: 100%;
//   height: 100%;
// `;

export function HomePage() {
  useEffect(() => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

    const data = {
      labels: labels,
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45]
        }
      ]
    };

    const chart = new Chart((document.getElementById('chart') as any).getContext('2d'), {
      type: 'bar',

      data: data,
      options: {}
    });

    return () => {
      chart.destroy();
    };
  }, []);
  return (
    <Row>
      <Col>
        <TopCards>
          <Title>Hi Vincent!</Title>
          <Text>
            This is the description for the group: <Code>spending group</Code>
          </Text>
        </TopCards>
        <Card>
          <canvas id="chart" />
        </Card>
      </Col>
      <Card></Card>
      <Card />
      <Card />
    </Row>
  );
}
