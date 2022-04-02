import { Card, Col, Row, Title, Text, Code, Button, Divider } from '@v-thomas/shared/ui';
import styled from 'styled-components';
import {
  Chart,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  DoughnutController,
  ArcElement,
  ScatterController,
  BubbleController,
  PolarAreaController,
  Tooltip,
  PieController,
  Legend
} from 'chart.js';
import { useEffect, useState } from 'react';
import { PolarArea } from 'react-chartjs-2';
import { CloseImage } from '@v-thomas/shared/ui';
import { useController } from 'react-hook-form';
import { useCollection } from '../../../../hooks/collection';
import { useParams } from 'react-router-dom';
import { useEntry } from '../../../../hooks/entry/entry';
Chart.register(
  BarController,
  ArcElement,
  DoughnutController,
  Tooltip,
  CategoryScale,
  LinearScale,
  BarElement,
  PolarAreaController,
  ScatterController,
  RadarController,
  RadialLinearScale,
  PieController,
  PointElement,
  LineElement,
  BubbleController
  // Legend
);

const Grid = styled.div`
  --space: 1rem;

  display: grid;
  grid-template-rows: auto auto 1fr;
  padding: 2.5vw;
  margin: 0 auto;
  max-width: 1000px;
  height: 100vh;
  gap: var(--space);
`;

const Header = styled.div`
  display: grid;
  gap: var(--space);
  grid-template-columns: 1fr auto;
`;

// const Card = styled(SCard)`
//   padding-block: 1.5rem;
//   padding-inline: 1.25rem;
// `;

// const Col = styled(SCol)`
//   justify-content: unset;
//   /* display: grid; */
//   /* grid-template-columns: 60% 1fr; */
//   max-width: 100%;
// `;

// const ChartComp = styled.canvas`
//   width: 100%;
//   height: 100%;
// `;

export function HomePage() {
  // useEffect(() => {
  //   localStorage.setItem(
  //     'expenses',
  //     JSON.stringify({
  //       ids: [1],
  //       data: [
  //         {
  //           name: 'Youtube',
  //           id: 1,
  //           collectionId: 1
  //         }
  //       ]
  //     })
  //   );
  // }, []);
  const { colId }: any = useParams();
  // const data = useEntry(colId);
  const collection = useCollection(parseInt(colId));
  const { data, updateEntries } = useEntry(colId);
  const data1 = {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)',
          'orange'
        ]
      }
    ]
  };
  console.log(data);
  return (
    <Grid>
      <Header>
        <Card style={{ padding: '2rem' }}>
          <Row>
            <Title>Collection {collection.name}</Title>
            <Text>{collection.description}</Text>
          </Row>
        </Card>
        <div>
          <PolarArea data={data1}></PolarArea>
        </div>
      </Header>
      <Divider style={{ margin: '0.5rem' }} />
      <Row gap="1" style={{ justifyContent: 'unset' }}>
        <Col>
          <Title>Expenses</Title>
          <Card style={{ padding: '0.5rem' }}>
            <Col gap="1rem">
              <Button
                variant="outlined"
                onClick={() => updateEntries({ name: 'testing', description: 'tesing desc', price: '432' })}>
                CREATE
              </Button>
              <Button variant="outlined">MODIFY</Button>
            </Col>
          </Card>
        </Col>
        {/* {data.data.map((v: any, index: number) => (
          <Card key={index}>
            <Col>
              <Title>{v.name}</Title>
              <img src={CloseImage} alt="" />
            </Col>
          </Card>
        ))} */}
      </Row>
    </Grid>
  );
}
