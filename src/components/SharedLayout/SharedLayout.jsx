import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import {
  Header,
  HeaderContaner,
  LogoContainer,
  LogoIcon,
  LogoText,
  LinksContainer,
  Link,
  LoaderContainer,
} from './SharedLayout.styled';
const SharedLayout = () => {
  return (
    <>
      <Header>
        <HeaderContaner className="container">
            <LogoContainer to="/">
                <LogoIcon/>
                <LogoText>Movie mania</LogoText>
            </LogoContainer>
          <LinksContainer>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </LinksContainer>
        </HeaderContaner>
      </Header>
      <Suspense
        fallback={
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
