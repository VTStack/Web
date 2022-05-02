import { Card, Row, Title, Button, Divider, Col } from '@v-thomas/external/core-ui';
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
  PieController
} from 'chart.js';
// import { addCollection, getCollection } from '@v-thomas/honey/data-access';
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
  // const collection = getCollection('0 testing');
  // addCollection({ name: 'tesitng', description: 'fdjklfdskjl', id: '0' });
  // const { colId }: any = useParams();
  // const collection = useCollection(parseInt(colId));
  // const { data, updateEntries } = useEntry(colId);
  // const data1 = {
  //   labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
  //   datasets: [
  //     {
  //       label: 'My First Dataset',
  //       data: [11, 16, 7, 3, 14],
  //       backgroundColor: [
  //         'rgb(255, 99, 132)',
  //         'rgb(75, 192, 192)',
  //         'rgb(255, 205, 86)',
  //         'rgb(201, 203, 207)',
  //         'rgb(54, 162, 235)',
  //         'orange'
  //       ]
  //     }
  //   ]
  // };
  // console.log(collection);
  return (
    <Grid>
      <Header>
        <Card noHover>
          {/* {collection && (
            <Row padding={'1'}>
              <Title>Collection {collection.name}</Title>
              <Text>{collection.description}</Text>
            </Row>
          )} */}
        </Card>
        {/* <div>
          <PolarArea data={data1}></PolarArea>
        </div> */}
      </Header>
      <Divider style={{ margin: '0.5rem' }} />
      <Col gap="1" style={{ justifyContent: 'unset' }}>
        <Row gap="auto">
          <Title>Expenses</Title>
          <Card noHover>
            <Row gap="1">
              <Button
                variant="outlined"
                onClick={() => {
                  // addCollection({ name: 'jklkl', description: 'fdjklfdskjl' });
                }}>
                CREATE
              </Button>
              <Button variant="outlined">MODIFY</Button>
            </Row>
          </Card>
        </Row>
        {/* {data.data.map((v: any, index: number) => (
          <Card key={index}>
            <Row>
              <Title>{v.name}</Title>
              <img src={CloseImage} alt="" />
            </Row>
          </Card>
        ))} */}
      </Col>
    </Grid>
  );
}
