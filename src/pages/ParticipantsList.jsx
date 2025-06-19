import React, { useEffect, useState } from 'react';
import ParticipantCard from '../components/ParticipantCard';
import * as XLSX from 'xlsx'; // ✅ Import xlsx

const ParticipantsList = () => {
  const [participants, setParticipants] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('https://techkruti-backend.onrender.com/api/participants', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error((await res.json()).message || 'Failed to fetch');
        const { participants } = await res.json();
            
        setParticipants(participants);
        setFiltered(participants);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filteredData = participants.filter((p) =>
      p.teamName?.toLowerCase().includes(value) ||
      p.leaderName?.toLowerCase().includes(value)
    );

    setFiltered(filteredData);
  };

  const downloadExcel = () => {
    const data = filtered.map((p) => ({
      Team: p.teamName,
      Leader: p.leaderName,
      Email: p.email,
      Phone: p.phone,
      College: p.college,
      UTR_ID: p.utrId,
      Platform: p.paymentPlatform,
      Members: (p.members || []).map((m) => `${m.name} (${m.phone})`).join(', ')
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Participants");
    XLSX.writeFile(workbook, "participants.xlsx");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl text-white font-bold mb-4">Participants</h2>
<p className="text-white mb-2">Total Participants: {filtered.length}</p>
  <div className="flex flex-col sm:flex-row justify-center items-center mb-4 gap-4">
  <input
    type="text"
    placeholder="Search by team name or leader..."
    value={searchTerm}
    onChange={handleSearch}
    className="p-2 rounded border border-white text-black w-full sm:w-1/2 bg-white placeholder-gray-500"
  />
        <button
          onClick={downloadExcel} // 👈 Updated here
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Download Excel
        </button>
      </div>

      {error && <div className="text-red-500 mb-2">{error}</div>}

      {filtered.length === 0 && !error && (
        <p className="text-white">No participants found.</p>
      )}

      {filtered.map((p, idx) => (
        <ParticipantCard key={idx} participant={p} />
      ))}
    </div>
  );
};

export default ParticipantsList;
