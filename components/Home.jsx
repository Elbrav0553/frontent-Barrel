import { BookingList } from './BookingList';
export function Home() {
    return (
        <main>
            <div className='container'>
                <div className='col-md-15'>
                    <BookingList />
                </div>
            </div>

        </main>
    )
}