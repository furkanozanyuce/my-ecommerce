import axios from "axios";
import React, { useEffect, useState } from "react";
import { Linkedin, Loader2, Github } from "lucide-react";
import PageContent from "@/layout/PageContent";

function TeamsPage() {
  const [teamData, setTeamData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://68c1d169-3085-4a16-bba8-1b823fd15611.mock.pstmn.io/teams"
        );
        setTeamData(response.data);
      } catch (err) {
        setError("Ekip üyeleri yüklenirken bir hata oluştu.");
        console.error("Ekip verileri çekilirken hata:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTeamData();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <LoaderSpinner />
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-red-100 text-red-700 px-6 py-4 rounded-md shadow-md">
          <p className="text-lg">{error}</p>
        </div>
      </div>
    );

  return (
    <PageContent>
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-monts">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        Our Team
      </h1>
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {teamData.members.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <div className="flex flex-col items-center p-6">
              <img
                src={member.image}
                alt={`Photo of ${member.name}`}
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 "
              />
              <h2 className="text-2xl font-semibold text-gray-800">
                {member.name}
              </h2>
              <p className="text-gray-500 mt-2">{member.role}</p>
              <div className="flex space-x-4 mt-4">
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <Linkedin size={24} />
                  </a>
                )}
                {member.socials.github && (
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-gray-600 transition-colors duration-300"
                    aria-label={`${member.name} on GitHub`}
                  >
                    <Github size={24} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </PageContent>
  );
}

export default TeamsPage;

// LoaderSpinner Component
const LoaderSpinner = () => {
  return (
    <div className="flex items-center space-x-2 animate-pulse">
      <Loader2 className="w-8 h-8 text-indigo-600" />
      <span className="text-xl text-indigo-600">Loading...</span>
    </div>
  );
};