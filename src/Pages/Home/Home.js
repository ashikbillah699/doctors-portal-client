import Appointment from './Appointment/Appointment';
import Banner from './Banner/Banner';
import Contac from './Contac/Contac';
import InfoCart from './InfoCarts/InfoCart';
import OurService from './OurService/OurService';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCart></InfoCart>
            <OurService></OurService>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Contac></Contac>
        </div>
    );
};

export default Home;