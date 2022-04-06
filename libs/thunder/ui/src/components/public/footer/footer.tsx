import { Divider, Link, Text, Col, Row } from '@v-thomas/shared/ui';
import styled from 'styled-components';
import { ButtonContainer } from '@v-thomas/thunder/ui';
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
        <ButtonContainer gap="3">
          <FooterText>
            <Link to="https://github.com/VincentThomas06/Codebase/blob/main/LICENSE" external>
              MIT License
            </Link>
          </FooterText>
          <FooterText>
            <Link to="mailto:vincent@email.v-thomas.xyz" external>
              Contact me
            </Link>
          </FooterText>
        </ButtonContainer>
      </Row>
    </StyledFooter>
  );
}
