import BannerBg from '../../../assets/images/Bannerbg.png';
import BannerImg from '../../../assets/images/Banner-chair.png'
import { DayPicker } from 'react-day-picker';

const AppiontmentBanner = ({ selected, setSelected }) => {
    return (
        <div>
            <div className="max-w-[1398px] mx-auto hero"
            // style={{
            //     background: `url(${BannerBg})`
            // }}
            >
                <img src={BannerBg} alt="" />
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='Banner Chire' src={BannerImg} className="md:w-1/2 mb-20 rounded-lg  shadow-2xl" />
                    <div className='pb-36'>
                        <DayPicker
                            className=' pr-20'
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppiontmentBanner;