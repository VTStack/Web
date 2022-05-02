import { Divider, Link, Text, Row } from '@v-thomas/external/core-ui';
import styled from 'styled-components';
const StyledFooter = styled.footer``;

const FooterText = styled(Text)`
  margin-top: 0.9rem;
`;

export function Footer() {
  return (
    <StyledFooter>
      <Divider marginUnder={false} />
      <Row>
        <FooterText>
          Made by{' '}
          <Link to="https://github.com/VincentThomas06" external line>
            Vincent Thomas
          </Link>
        </FooterText>
        <Row gap="2.5">
          <FooterText>
            <Link to="https://github.com/VincentThomas06/Codebase/blob/main/.github/LICENSE" external line>
              MIT License
            </Link>
          </FooterText>
          <FooterText>
            <Link to="mailto:vincent@email.v-thomas.xyz" external line>
              Contact me
            </Link>
          </FooterText>
        </Row>
      </Row>
    </StyledFooter>
  );
}
