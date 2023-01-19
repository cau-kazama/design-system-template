import React from 'react';
import * as S from './styles';
import StyledProps from './styles';

interface ComponentsProps extends StyledProps {
}

const <FTName>: React.FC<ComponentsProps> = ({...rest }) => {
    return (
        <S.Root {...rest}>
        </S.Root>
    );
};

export default <FTName>;
