import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Modal from 'react-modal';
import { Input } from '../../../../input/Input';
import { GreenButton, PinkButton } from '../../button';
import PropTypes from 'prop-types';
import styles from './address-picker.module.css';

export const AddressPicker = ({ showModal, setShowModal, setMainAddress }) => {
	const [address, setAddress] = useState('');
	const [markerPosition, setMarkerPosition] = useState([55.751244, 37.618423]);
	const [mapCenter, setMapCenter] = useState([55.751244, 37.618423]);

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const { latitude, longitude } = position.coords;
					setMarkerPosition([latitude, longitude]);
					setMapCenter([latitude, longitude]);
				},
				(error) => {
					console.error('Ошибка получения геолокации:', error);
				},
			);
		}
	}, []);

	const fetchAddressByCoords = async (lat, lon) => {
		try {
			const response = await fetch(
				`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&accept-language=ru`,
			);
			const data = await response.json();
			if (data.display_name) {
				setAddress(data.display_name);
			}
		} catch (error) {
			console.error('Ошибка получения адреса:', error);
		}
	};

	const handleSearch = async () => {
		if (!address.trim()) return;

		try {
			const response = await fetch(
				`https://nominatim.openstreetmap.org/search?format=json&q=${address}&accept-language=ru`,
			);
			const data = await response.json();
			if (data.length > 0) {
				const { lat, lon } = data[0];
				setMarkerPosition([parseFloat(lat), parseFloat(lon)]);
				setMapCenter([parseFloat(lat), parseFloat(lon)]);
			}
		} catch (error) {
			console.error('Ошибка геокодирования:', error);
		}
	};

	const handleSelectAddress = () => {
		setMainAddress(address);
		setShowModal(false);
	};

	return (
		<Modal
			isOpen={showModal}
			onRequestClose={() => setShowModal(false)}
			ariaHideApp={false}
		>
			<h2>Выберите адрес</h2>
			<div className={styles['select-addresss']}>
				<Input
					type="text"
					value={address}
					onChange={(e) => setAddress(e.target.value)}
					placeholder="Введите адрес"
				/>
				<GreenButton onClick={handleSearch}>Найти</GreenButton>
			</div>
			<MapContainer
				center={mapCenter}
				zoom={13}
				style={{ height: '400px', width: '100%' }}
				attributionControl={false}
			>
				<TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
				<Marker position={markerPosition} />
				<MapInteraction
					setMarkerPosition={setMarkerPosition}
					fetchAddressByCoords={fetchAddressByCoords}
				/>
				<ChangeMapCenter center={mapCenter} />
			</MapContainer>
			<div className={styles['button-container']}>
				<GreenButton onClick={handleSelectAddress}>Выбрать адрес</GreenButton>
				<PinkButton onClick={() => setShowModal(false)}>Закрыть</PinkButton>
			</div>
		</Modal>
	);
};

const MapInteraction = ({ setMarkerPosition, fetchAddressByCoords }) => {
	useMapEvents({
		click(e) {
			const newPosition = [e.latlng.lat, e.latlng.lng];
			setMarkerPosition(newPosition);
			fetchAddressByCoords(e.latlng.lat, e.latlng.lng);
		},
	});

	return null;
};

const ChangeMapCenter = ({ center }) => {
	const map = useMap();
	useEffect(() => {
		map.setView(center);
	}, [center]);

	return null;
};

AddressPicker.propTypes = {
	showModal: PropTypes.bool.isRequired,
	setShowModal: PropTypes.func.isRequired,
	setMainAddress: PropTypes.func.isRequired,
};

MapInteraction.propTypes = {
	setMarkerPosition: PropTypes.func.isRequired,
	fetchAddressByCoords: PropTypes.func.isRequired,
};

ChangeMapCenter.propTypes = {
	center: PropTypes.array.isRequired,
};
