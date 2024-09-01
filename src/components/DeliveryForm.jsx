// src/DeliveryForm.js
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Coordinates for key states in Egypt
const egyptStates = {
  cairo: { name: "القاهرة", lat: 30.0444, lng: 31.2357 },
  alexandria: { name: "الإسكندرية", lat: 31.2001, lng: 29.9187 },
  giza: { name: "الجيزة", lat: 30.0131, lng: 31.2089 },
  luxor: { name: "الأقصر", lat: 25.6872, lng: 32.6396 },
  aswan: { name: "أسوان", lat: 24.0889, lng: 32.8998 },
  portsaid: { name: "بورسعيد", lat: 31.2564, lng: 32.3052 },
  suez: { name: "السويس", lat: 30.5852, lng: 32.2659 },
  mansoura: { name: "المنصورة", lat: 31.0370, lng: 31.3790 },
  tanta: { name: "طنطا", lat: 30.7744, lng: 31.0020 },
  zifta: { name: "زفتي", lat: 30.8666, lng: 31.0488 },
  elminya: { name: "المنيا", lat: 28.0937, lng: 30.7511 },
  qena: { name: "قنا", lat: 26.1500, lng: 32.7167 },
  damietta: { name: "دمياط", lat: 31.1833, lng: 31.8333 },
  ismailia: { name: "الإسماعيلية", lat: 30.5890, lng: 32.2651 },
  sohag: { name: "سوهاج", lat: 26.5581, lng: 31.6932 },
  heliopolis: { name: "هيليوبوليس", lat: 30.0938, lng: 31.3380 }, // Historically significant, part of Cairo
  beheira: { name: "البحيرة", lat: 30.9188, lng: 30.5832 },
  kafrelshaikh: { name: "كفر الشيخ", lat: 31.3085, lng: 30.9233 },
  sharqia: { name: "الشرقية", lat: 30.7326, lng: 31.7157 },
  minufiya: { name: "المنوفية", lat: 30.5648, lng: 31.0032 },
  gharbia: { name: "الغربية", lat: 30.8738, lng: 31.0364 },
  dakahlia: { name: "الدقهلية", lat: 31.0410, lng: 31.3807 },
  beni_suef: { name: "بني سويف", lat: 29.0661, lng: 31.0994 },
  fayoum: { name: "الفيوم", lat: 29.3102, lng: 30.8418 },
  assiut: { name: "أسيوط", lat: 27.1808, lng: 31.1837 },
  red_sea: { name: "البحر الأحمر", lat: 27.2579, lng: 33.8116 },
  new_valley: { name: "الوادي الجديد", lat: 25.4487, lng: 30.5564 },
  matrouh: { name: "مطروح", lat: 31.3526, lng: 27.2373 },
  north_sinai: { name: "شمال سيناء", lat: 30.9157, lng: 33.6064 },
  south_sinai: { name: "جنوب سيناء", lat: 29.3100, lng: 34.1960 }
};


const DeliveryForm = () => {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();
  const [position, setPosition] = useState([30.0444, 31.2357]); // Default to Cairo

  const onSubmit = data => {
    console.log('بيانات النموذج:', data);
    console.log('الموقع المختار:', position);
  };
  
  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    const coords = egyptStates[selectedState];
    if (coords) {
      setPosition([coords.lat, coords.lng]);
      setValue('state', coords.name);
    }
  };

  // Custom hook to update the map view based on position changes
  function MapUpdater({ position }) {
    const map = useMap();
    map.setView(position, map.getZoom());
    return null;
  }

  return (
    <div className="max-w-lg mx-auto p-4 mt-32">
      <h2 className="text-2xl font-bold mb-4">معلومات التوصيل</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">الاسم</label>
          <input
            id="name"
            {...register('name', { required: 'الاسم مطلوب' })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">رقم الهاتف</label>
          <input
            id="phone"
            type="tel"
            {...register('phone', { required: 'رقم الهاتف مطلوب' })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">المحافظه</label>
          <select
            id="state"
            {...register('state', { required: 'الولاية مطلوبة' })}
            onChange={handleStateChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          >
            <option value="">اختر المحافظه</option>
            {Object.keys(egyptStates).map((key) => (
              <option key={key} value={key}>{egyptStates[key].name}</option>
            ))}
          </select>
          {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
        </div>
        
        <div className="mb-4 h-80 ">
          <MapContainer center={position} zoom={8} style={{ height: '100%', width: '100%' ,zIndex:0}}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <MapUpdater position={position} />
            <Marker position={position} />
          </MapContainer>
        </div>
        
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700"
        >
          إرسال
        </button>
      </form>
    </div>
  );
};

export default DeliveryForm;
