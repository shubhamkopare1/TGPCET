import React from 'react';

const ParticipantCard = ({ participant }) => {
  return (
    <div className="overflow-x-auto max-w-6xl mx-auto mb-8">
      <table className="min-w-full text-sm text-left text-white border border-white/20 shadow-md rounded-xl overflow-hidden">
        <thead className="bg-cyan-800/70 text-cyan-100 uppercase text-xs">
          <tr>
            <th className="px-4 py-3">Field</th>
            <th className="px-4 py-3">Value</th>
          </tr>
        </thead>
        <tbody className="bg-white/10 divide-y divide-white/10">
          <tr className="hover:bg-white/5">
            <td className="px-4 py-2 font-medium text-cyan-300">Team Name</td>
            <td className="px-4 py-2">{participant.teamName}</td>
          </tr>
          <tr className="hover:bg-white/5">
            <td className="px-4 py-2 font-medium text-cyan-300">Leader</td>
            <td className="px-4 py-2">{participant.leaderName} ({participant.leaderPhone})</td>
          </tr>
          <tr className="hover:bg-white/5">
            <td className="px-4 py-2 font-medium text-cyan-300">Email</td>
            <td className="px-4 py-2">{participant.email}</td>
          </tr>
          <tr className="hover:bg-white/5">
            <td className="px-4 py-2 font-medium text-cyan-300">Phone</td>
            <td className="px-4 py-2">{participant.phone}</td>
          </tr>
          <tr className="hover:bg-white/5">
            <td className="px-4 py-2 font-medium text-cyan-300">College</td>
            <td className="px-4 py-2">{participant.college}</td>
          </tr>
          <tr className="hover:bg-white/5">
            <td className="px-4 py-2 font-medium text-cyan-300">UTR ID</td>
            <td className="px-4 py-2">{participant.utrId}</td>
          </tr>
          <tr className="hover:bg-white/5">
            <td className="px-4 py-2 font-medium text-cyan-300">Payment Platform</td>
            <td className="px-4 py-2">{participant.paymentPlatform}</td>
          </tr>
          {Array.isArray(participant.members) && (
            <tr className="hover:bg-white/5">
              <td className="px-4 py-2 font-medium text-cyan-300 align-top">Members</td>
              <td className="px-4 py-2">
                <ul className="list-disc list-inside space-y-1">
                  {participant.members.map((member, index) => (
                    <li key={index}>{member.name} ({member.phone})</li>
                  ))}
                </ul>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ParticipantCard;
