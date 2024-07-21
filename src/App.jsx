import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px',
    borderRadius: '15px'
};

const center = {
    lat: -23.561684,
    lng: -46.655981
};

const App = () => {
    return (
        <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
            <h1 className="text-2xl">Google Maps</h1>
            <div className="w-full max-w-2xl p-1.5 bg-white rounded-xl shadow-md">
                <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={15}
                    >
                        <Marker position={center} />
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
};

export default App;
