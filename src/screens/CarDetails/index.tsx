import React from 'react';
import BackButton from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';



import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';



import {
    CarImages,
    Container,
    Header,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    About,
    Accessories,
    Footer
} from './styles';

export function CarDetails() {
    const navigation = useNavigation();

    function handleConfirmRental(){
        navigation.navigate('Scheduling');
    }


    return (
        <Container>
            <Header>
                <BackButton />

            </Header>

            <CarImages>
                <ImageSlider imagesUrl={['https://production.autoforce.com/uploads/used_model/profile_image/21174071/used_model_comprar-rs-6-pcd-avant-1165_95b6930e12.png']} />
            </CarImages>

            <Content>
                <Details>
                    <Description>
                        <Brand>
                            Lamborghini
                        </Brand>
                        <Name>Huracan</Name>
                    </Description>

                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 580</Price>
                    </Rent>

                </Details>

                <Accessories>
                    <Accessory name="380Km/h" icon={speedSvg}/>
                    <Accessory name="3.2s" icon={accelerationSvg}/>
                    <Accessory name="80 HP" icon={forceSvg}/>
                    <Accessory name="Gasolina" icon={gasolineSvg}/>
                    <Accessory name="Auto" icon={exchangeSvg}/>
                    <Accessory name="2 pessoas" icon={peopleSvg}/>
                </Accessories>
                <About>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias officia exercitationem,
                    architecto vitae et tenetur suscipit quod animi perferendis blanditiis voluptates quis
                    ex autem accusamus ipsam reprehenderit laborum esse culpa.
                </About>

            </Content>
            <Footer>
                <Button title="Escolher Período de aluguel" onPress={handleConfirmRental}/>
            </Footer>
        </Container>
    )
}

export default CarDetails;