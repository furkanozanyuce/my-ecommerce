import React, { useEffect, useState } from "react";
import axios from "axios";
import PageContent from "@/layout/PageContent";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react"; // lucide-react icons
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


function TeamsPage() {
  // const [members, setMembers] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const members = [
    {
        name: "Rick Sanchez",
        role: "Megagenius Scientist",
        image: "https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png",
        socials: {
            linkedin: "#",
            github: "#"
        }
    },
    {
        name: "Gökhan Özdemir",
        role: "Scrum Master",
        image: "https://www.workintech.com.tr/team/gokhanozdemir.webp",
        socials: {
            linkedin: "https://www.linkedin.com/in/gnozdemir/",
            github: "https://github.com/gokhanozdemir"
        }
    },
    {
        name: "Furkan Ozan Yüce",
        role: "Full Stack Developer",
        image: "https://ca.slack-edge.com/T046N0ZLKU4-U07M4JJQ8MB-a6f56504a740-512",
        socials: {
            linkedin: "https://www.linkedin.com/in/furkan-ozan-yuce/",
            github: "https://github.com/furkanozanyuce"
        }
    },
    {
        name: "Semih Ömer Baltacı",
        role: "Front-End Developer",
        image: "https://media.licdn.com/dms/image/v2/D5603AQFVccVo2MgpIg/profile-displayphoto-shrink_200_200/B56ZQKaNMLGQAY-/0/1735341430289?e=1741219200&v=beta&t=e7zJHDsZ0wCqizeIlAbrNLXhJH50Axs5ss78xA92EbE",
        socials: {
            linkedin: "https://www.linkedin.com/in/semih-%C3%B6mer-baltac%C4%B1-144971340/",
            github: "https://github.com/Semih-Omer-Baltaci"
        }
    },
    {
        name: "Berk Karademir",
        role: "Full Stack Developer",
        image: "https://avatars.githubusercontent.com/u/182853888?v=4",
        socials: {
            linkedin: "https://www.linkedin.com/in/berk-karademir/",
            github: "https://github.com/berk-karademir"
        }
    },
    {
        name: "Naim Kahyaoğlu",
        role: "Full Stack Developer",
        image: "https://cooltrade.vercel.app/assets/naimprofil-D6zMTQji.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/naim-kahyaoglu-8a0000236/",
            github: "https://github.com/Naim-Kahyaoglu"
        }
    }
]

  // useEffect(() => {
  //   fetchMembers();
  // }, []);

  // const fetchMembers = async () => {
  //   setLoading(true);
  //   setError(null);
  //   try {
  //     const response = await axios.get(
  //       "https://68c1d169-3085-4a16-bba8-1b823fd15611.mock.pstmn.io/teams"
  //     );
  //     // The API returns { members: [ ... ] }
  //     const data = response.data;
  //     setMembers(data.members || []);
  //   } catch (err) {
  //     console.error("Error fetching team members:", err);
  //     setError("Failed to load team data.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <PageContent>
      <div className="font-monts">
        <section className="flex flex-col items-center">
          <h2 className="text-md font-bold text-gray-500 text-center pt-12 mb-6">
            WHAT WE DO
          </h2>
          <h1 className="text-3xl font-bold text-center mb-6">
            Innovation tailored for you
          </h1>
          <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Team</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

          <section className="w-full h-auto overflow-hidden">
            <div
              className="
    grid
    grid-cols-1
    md:grid-cols-3
    md:grid-rows-2
    gap-2
    lg:gap-4
  "
            >
              <div className="md:row-span-2 md:col-span-1">
                <img
                  src="images/teams1.jpg"
                  alt="Main Large"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="max-h-[350px]">
                <img
                  src="images/teams2.jpg"
                  alt="Top Right 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="max-h-[350px]">
                <img
                  src="images/teams3.jpg"
                  alt="Top Right 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="max-h-[350px]">
                <img
                  src="images/teams4.jpg"
                  alt="Bottom Right 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="max-h-[350px]">
                <img
                  src="images/teams5.jpg"
                  alt="Bottom Right 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
        </section>

        <section className="px-4 py-8 lg:py-14 lg:px-12 max-w-[1200px] mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8">
            Meet Our Team
          </h2>

          {/* {loading ? (
            <p className="text-center">Loading team members...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : ( */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {members.map((member, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center space-y-3 border p-4 rounded-lg transition transform hover:scale-105 hover:shadow-lg"
                >
                  <img
                    src={
                      member.image ||
                      "https://via.placeholder.com/200x200.png?text=User"
                    }
                    alt={member.name}
                    className="w-40 h-40 object-cover rounded-full mb-2"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                  <div className="flex gap-4 justify-center text-blue-600 mt-2">
                    {member.socials?.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-800"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.socials?.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-800"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          {/* )} */}
        </section>
        <section className="bg-white py-8 lg:py-12">
          <div className="max-w-[1200px] mx-auto px-4 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-2">
              Start your 14 days free trial
            </h2>

            <p className="text-gray-600 max-w-md mx-auto mb-6">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequat.
            </p>

            <button className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition mb-6">
              Try it free now
            </button>

            <div className="flex gap-4 justify-center text-blue-600">
              <a href="#" className="hover:text-blue-800" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>

              <a href="#" className="hover:text-blue-800" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="hover:text-blue-800"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a href="#" className="hover:text-blue-800" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageContent>
  );
}

export default TeamsPage;
