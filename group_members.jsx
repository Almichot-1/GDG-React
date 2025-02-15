import React from 'react';
const GroupMembers = () => {
  const members = ["Ahmed", "Yassin", "Fatima", "Hassan", "Aisha"];

  return (
    <div className="p-4 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2">
      <h2 className="text-xl font-bold text-gray-700">Group Members</h2>
      <ul className="list-disc pl-5 text-gray-600">
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroupMembers;
