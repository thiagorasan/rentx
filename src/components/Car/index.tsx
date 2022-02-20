import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { getAccessoryIcon } from '../../utils/getAccessoryIcons';

import { 
    Container,
    Details,
    Brand,
    Name,
    About,
    Rent,
    Period,
    Price,
    Type,
    CarImage
} from './styles';

interface CarData {
    brand: string;
    name: string;
    rent: {
        period: string;
        price: number;
    },
    thumbnail: string;
    fuel_type: string;
}

interface Props extends RectButtonProps {
    data: CarData;
}

export function Car({ data, ...rest }: Props){
    const MotorIcon = getAccessoryIcon(data.fuel_type);
    return(
        <Container {...rest}>
            <Details>
                <Brand>{data.brand}</Brand>
                <Name>{data.name}</Name>

                <About>
                    <Rent>
                        <Period>{data.rent.period}</Period>
                        <Price>{`R$ ${data.rent.price}`}</Price>
                    </Rent>
                    <Type>
                        <MotorIcon />
                    </Type>
                </About>
            </Details>

            <CarImage 
            source={{uri: data.thumbnail }}
            resizeMode='contain' 
            />
        </Container>
    );
}
export default Car;