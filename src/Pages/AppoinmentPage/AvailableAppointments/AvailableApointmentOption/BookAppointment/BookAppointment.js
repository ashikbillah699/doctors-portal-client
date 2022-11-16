import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../../context/AuthProvider';

const BookAppointment = ({ treatment, selected, setTreatment, refetch }) => {
    const { name, slots } = treatment;
    const data = format(selected, 'PP')
    const { user } = useContext(AuthContext);

    const handleBookMark = event => {
        event.preventDefault()
        const form = event.target;
        const names = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const slot = form.slot.value;
        const booking = {
            appointment: data,
            treatment: name,
            patient: names,
            phone,
            email,
            slot
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setTreatment(null)
                    toast.success('your Appointment in booked')
                    refetch()
                }
                else {
                    toast.error(data.message)

                    setTreatment(null)
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-11">{name}</h3>
                    <form onSubmit={handleBookMark}>
                        <input type="text" value={data} className="input input-bordered w-full mb-6" readOnly />
                        <select name='slot' className="select select-bordered w-full mb-6" placeholder='Select your time'>
                            {
                                slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="name" defaultValue={user?.displayName} disabled className="input input-bordered w-full mb-6" required />
                        <input name='email' type="email" placeholder="email" defaultValue={user?.email} disabled className="input input-bordered w-full mb-6" required />
                        <input name='phone' type="number" placeholder="Phone" className="input input-bordered w-full mb-6" required />
                        <button className="btn border-none bg-accent w-full">Submit</button>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default BookAppointment;