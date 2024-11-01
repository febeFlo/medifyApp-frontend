import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const RegisterForm = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    nama: '',
    nik: '',
    tempatTanggalLahir: '',
    jenisKelamin: '',
    alamat: '',
    kelDesa: '',
    kecamatan: ''
  });

  useEffect(() => {
    console.log('Location state:', location.state);
    if (location.state) {
      setFormData(location.state);
    }
  }, [location.state]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const isFormComplete = () => {
    return Object.values(formData).every(field => field.trim() !== '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormComplete()) {
      console.log('Form data submitted:', formData);
      // Add your form submission logic here
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg" style={{ fontFamily: 'Arial, sans-serif' }}>
      <h2 className="text-2xl font-bold mb-6 text-center text-teal-600">Registrasi</h2>
      <hr className="mb-6" />
      <h3 className="text-xl font-semibold mb-4">Cek Data Anda</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Nama</label>
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md text-gray-800 focus:ring focus:border-teal-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">NIK</label>
          <input
            type="text"
            name="nik"
            value={formData.nik}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md text-gray-800 focus:ring focus:border-teal-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Tempat Tanggal Lahir</label>
          <input
            type="text"
            name="tempatTanggalLahir"
            value={formData.tempatTanggalLahir}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md text-gray-800 focus:ring focus:border-teal-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Jenis Kelamin</label>
          <input
            type="text"
            name="jenisKelamin"
            value={formData.jenisKelamin}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md text-gray-800 focus:ring focus:border-teal-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Alamat</label>
          <input
            type="text"
            name="alamat"
            value={formData.alamat}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md text-gray-800 focus:ring focus:border-teal-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Kel/Desa</label>
          <input
            type="text"
            name="kelDesa"
            value={formData.kelDesa}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md text-gray-800 focus:ring focus:border-teal-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Kecamatan</label>
          <input
            type="text"
            name="kecamatan"
            value={formData.kecamatan}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md text-gray-800 focus:ring focus:border-teal-500"
          />
        </div>
        <button
          type="submit"
          className={`w-full py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-200 ${isFormComplete() ? '' : 'opacity-50 cursor-not-allowed'}`}
          disabled={!isFormComplete()}
        >
          Konfirmasi
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;