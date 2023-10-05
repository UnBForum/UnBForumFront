import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  /* align-items: center; */
  /* justify-content: space-between; */

  .create-account-image {
    object-fit: cover;
    object-position: center;
    width: 50%;
    height: 100vh;
  }

  .content {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    .create-account-image {
      display: none;
    }

    .content {
      width: 100%;
    }
  }
`
