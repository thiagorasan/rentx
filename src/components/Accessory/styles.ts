import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: ${RFValue(109)}px;
    height: ${RFValue(92)}px;

    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
    padding: 16px;

    background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Name = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(13)}px;


`;
