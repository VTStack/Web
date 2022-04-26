import { Divider, Link, Text, Row } from '@v-thomas/shared/ui';
import { FC } from 'react';
import styled from 'styled-components';
const StyledFooter = styled.footer``;

const FooterText = styled(Text)`
  margin-top: 0.9rem;
`;

export const PublicFooter: FC = () => (
  <StyledFooter>
    <Divider marginUnder={false} />
    <Row>
      <FooterText>
        App made by{' '}
        <Link to="https://github.com/VincentThomas06" external line>
          Vincent Thomas
        </Link>
      </FooterText>
      <Row gap="2.5">
        <FooterText>
          <Link to="https://github.com/VincentThomas06/Codebase/blob/main/.github/LICENSE" external icon>
            MIT License
          </Link>
        </FooterText>
        <FooterText>
          <Link to="mailto:vincent@email.v-thomas.xyz" external icon>
            Contact me
          </Link>
        </FooterText>
      </Row>
    </Row>
  </StyledFooter>
);
