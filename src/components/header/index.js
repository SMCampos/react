import React from 'react';
import useGithub from "../../hooks/github-hooks";
import * as S from "./styled";
import { useState } from 'react';


const Header = () => {
  const { getUser } = useGithub();

  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

    return (
      <header>
        <S.Wrapper>
          <input
            type="text"
            placeholder="Digite o username para pesquisar"
            onChange={(event) => setUsernameForSearch(event.target.value)}
          />
          <button type="submit" onClick={submitGetUser}>
            <span>Buscar</span>
          </button>
        </S.Wrapper>
      </header>
    );
}

export default Header;
