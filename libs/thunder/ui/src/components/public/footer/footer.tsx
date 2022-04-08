import { Divider, Link, Text, Col, Row } from '@v-thomas/shared/ui';
import styled from 'styled-components';
const StyledFooter = styled.footer``;

const FooterText = styled(Text)`
  margin-top: 0.9rem;
`;

export function PublicFooter() {
  return (
    <StyledFooter>
      <Divider marginUnder={false} />
      <Row>
        <FooterText>
          App made by{' '}
          <Link to="https://github.com/VincentThomas06" external>
            Vincent Thomas
          </Link>
        </FooterText>
        <Row gap="2.5">
          <FooterText>
            <Link to="https://github.com/VincentThomas06/Codebase/blob/main/.github/LICENSE" external>
              MIT License
            </Link>
          </FooterText>
          <FooterText>
            <Link to="mailto:vincent@email.v-thomas.xyz" external>
              Contact me
            </Link>
          </FooterText>
        </Row>
      </Row>
    </StyledFooter>
  );
}
