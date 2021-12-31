import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car';

import {
    Container,
    Header,
    TotalCars,
    HeaderContent,
    CarList
} from './styles';


export function Home() {
    const navigation = useNavigation();

    const carData = {
        brand: 'Audi',
        name: 'R$ 5 Coupé',
        rent: {
            period: 'AO Dia',
            price: 120,
        },
        thumbnail: 'https://production.autoforce.com/uploads/used_model/profile_image/21174071/used_model_comprar-rs-6-pcd-avant-1165_95b6930e12.png'
    }

    function handleCarDetails() {
        navigation.navigate('CarDetails');
    }

    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Header>
                <HeaderContent>
                    <Logo width={RFValue(108)}
                            height={RFValue(12)}
                    />
                    <TotalCars>
                        Total de 12 carros
                    </TotalCars>
                </HeaderContent>
            </Header>

            <CarList 
                data={[1, 2, 3, 4, 5, 6, 7, 8]}
                keyExtractor={item => String(item)}
                renderItem={({item}) => <Car data={carData} onPress={handleCarDetails}/>}
            />
        </Container>
    )
}

export default Home;