import { Title, Text, Col, Link, Card, Row } from '@v-thomas/shared/ui';
import ThunderIcon from '@v-thomas/thunder/assets/favicon.svg';
import styled from 'styled-components';
import { PublicFooter } from '../../components/footer';

const SmallNav = styled(Card)`
  position: fixed;
  right: 0;
  top: 0;
  background-color: ${({ theme }) => theme.background.third};
  border-radius: 0 0 0 0.5rem;
  padding: 1.5rem;
`;

export const HomePage = () => {
  return (
    <Col padding="2" align="top" exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Card noHover>
        <Row>
          <Title align="left">
            Hello! I'm Vincent{' '}
            <span role="img" aria-label="Waving hand">
              👋🏼
            </span>
          </Title>
          <SmallNav>
            <Text bold>
              Quick links:&nbsp;&nbsp;&nbsp;
              <Link to="/projects">/projects</Link>
              &nbsp;&nbsp;&nbsp;
              <Link to="/contact">/contact</Link>
            </Text>
          </SmallNav>
        </Row>

        <Text>
          I am a 15 year old guy making web-apps and other types of softwares.
          <br />I like sailing and coding.
        </Text>
        <Text bold>
          I live in{' '}
          <Link
            to="https://earth.google.com/web/@61.83615759,11.17196823,583.21351524a,3682683.83453071d,35y,0h,0t,0r"
            external>
            Sweden
          </Link>{' '}
          {'> '}
          <Link to="//link.v-thomas.me/where-i-live" external>
            Gothemburg
          </Link>
        </Text>
      </Card>
      <Title>Projects</Title>
      <Card noHover onClick={() => window.open('//link.v-thomas.me/movie', '_blank')}>
        <Row align="left" gap="1">
          <img src={ThunderIcon} alt="" width="70" height="70" />
          <Col gap="0.5">
            <Title>MovieReviewer</Title>
            <Link to="//link.v-thomas.me/movie" external>
              movie.v-thomas.me
            </Link>
          </Col>
        </Row>
      </Card>

      <Title>Tech i've used</Title>

      <Row gap="1">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
          alt="nodejs"
          width="20"
          height="20"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
          alt="nodejs"
          width="20"
          height="20"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          width="20"
          height="20"
          alt=""
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg"
          width="20"
          alt=""
          height="20"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
          width="20"
          alt=""
          height="20"
        />
        <img src="https://rollupjs.org/favicon.png" width="20" height="20" alt="" />
      </Row>
      <Row gap="1">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
          alt="nodejs"
          width="20"
          height="20"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg"
          width="20"
          alt=""
          height="20"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
          width="20"
          height="20"
          alt=""
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg"
          width="20"
          alt=""
          height="20"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
          width="20"
          alt=""
          height="20"
        />
        <img src="https://app.supabase.io/favicon.ico" width="20" height="20" alt="" />
      </Row>
      <Row gap="1">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          width="20"
          alt=""
          height="20"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          alt=""
          width="20"
          height="20"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
          width="20"
          alt=""
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg"
          width="20"
          alt=""
          height="20"
        />
        <img src="https://nx.dev/images/favicon-32x32.png" width="20" height="20" alt="" />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
          alt="python"
          width="20"
          height="20"
        />
      </Row>

      <Title>Contributions graph</Title>

      <img
        src="https://activity-graph.herokuapp.com/graph?username=VincentThomas06&theme=xcode&bg_color=1F222E&color=F8D866&line=F85D7F&point=FFFFFF&hide_border=true"
        alt=""
      />
      <Title size="1.5">Contact/Follow me here:</Title>
      <Row gap="1">
        <Link external to="//link.v-thomas.me/github">
          <img
            src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
            alt="meaningfull text"
            height="27"
          />
        </Link>
        <Link external to="//link.v-thomas.me/youtube">
          <img
            src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white"
            alt="meaningfull text"
            height="27"
          />
        </Link>{' '}
        <Link external to="//link.v-thomas.me/donate">
          <img
            src="https://camo.githubusercontent.com/ab6dddafd2bdfc2a0e66b6f4eae6f508a308c085a3093bea8b1a143ac909f14a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4275795f4d655f415f436f666665652d4646444430303f7374796c653d666f722d7468652d6261646765266c6f676f3d6275792d6d652d612d636f66666565266c6f676f436f6c6f723d626c61636b"
            alt="meaningfull text"
            height="27"
          />
        </Link>
      </Row>
      <PublicFooter />
    </Col>
  );
};
