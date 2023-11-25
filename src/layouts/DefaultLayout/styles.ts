import { theme } from 'native-base'
import styled from 'styled-components'

export const LayoutContainer = styled.div`
  background: ${theme.colors.dark['900']};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  .content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    .content {
      width: 100%;
    }
  }
`
