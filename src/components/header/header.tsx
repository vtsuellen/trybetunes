import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Loading } from '../../pages/loading/loading';
import { UserType } from '../../types';
import { getUser } from '../../services/userAPI';

function Header() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userName, setUserName] = useState<UserType>();

  const fetchUser = async () => {
    setIsLoading(true);
    const responseUser = await getUser();
    setUserName(responseUser);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      {isLoading === true && <Loading />}
      <header data-testid="header-component">
        <nav>
          <NavLink data-testid="link-to-search" to="/search">
            Search
          </NavLink>
          <NavLink data-testid="link-to-favorites" to="/favorites">
            Favorites
          </NavLink>
          <NavLink data-testid="link-to-profile" to="/profile">
            Search
          </NavLink>
        </nav>
        <h4 data-testid="header-user-name">{userName?.name}</h4>
      </header>
    </div>
  );
}

export default Header;
