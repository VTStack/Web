import { Col, Divider, Link, Text } from '@v-thomas/libs/thunder/core-ui';
import styled from 'styled-components';

const StyledFooter = styled.footer``;

const FooterText = styled(Text)`
  margin-top: 0.9rem;
`;

export function Footer() {
  return (
    <StyledFooter>
      <Divider marginUnder={false} />
      <Col>
        <FooterText>
          App made by{' '}
          <Link to="https://github.com/VincentThomas06" external>
            Vincent Thomas
          </Link>
        </FooterText>
        <FooterText>
          <Link to="mailto:vincent.nathan.thomas@gmail.com" external>
            Contact me
          </Link>
        </FooterText>
      </Col>
    </StyledFooter>
  );
}
