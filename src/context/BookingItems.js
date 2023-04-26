import React , {useState} from 'react'
import BookingContext from './BookingContext'

export default function BookingItems({ children }) {

    const [generalInfo, setGeneralInfo] = useState({bookingOffice:'select',bookingNumber:'',bookingDate:'',deliveryMode:'select',stuffingType:'select',stuffingLocation:'select',bookingType:'select'});
    const [partiesDetails,setPartiesDetails] = useState({customer: 'select', customerLocation: 'select', shipper: 'select', consianee: 'select', cha: 'select', salesPerson: 'select', overseasAgent: 'select'});
    const [routeInfo, setRouteInfo] = useState({por:'select',pol:'select',pod:'select',fpd:'select',mot:'select'});
    const [cargoInfo, setCargoInfo] = useState({ imoClass: 'select', imoUnNumber: 'select', parkingGroup: 'select', grossWeight: '', volume: ''});
    const [hazDetails,setHazDetails] = useState({imoClass: 'select', imoUnNumber: 'select', parkingGroup: 'select'});
    const [containerDetails,setContainerDetails] = useState({ sizeType: 'select', noOfContainers : ''});


    return (
        <BookingContext.Provider value={{generalInfo,setGeneralInfo,partiesDetails,setPartiesDetails,routeInfo,setRouteInfo,cargoInfo,setCargoInfo,hazDetails,setHazDetails,containerDetails,setContainerDetails}}>
            {children}
        </BookingContext.Provider>
    )
}
