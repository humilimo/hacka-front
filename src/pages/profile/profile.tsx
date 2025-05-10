"use client";
import { Menu } from "lucide-react";

export default function Profile() {
  // Sample data based on the image
  const userData = {
    name: "Romena Silva Barreto",
    wasteDisposed: 746,
    capibas: 47,
    pendingCapibas: 0,
    reports: [
      {
        id: "01",
        status: "Validado",
        location: "Rua Rio Solimões, 96",
        date: "20 de março, 2025",
        image: "/garbage-pile-1.jpg",
      },
      {
        id: "02",
        status: "Processando",
        location: "Rua Nova da Moeda",
        date: "28 de março, 2025",
        image: "/garbage-pile-2.jpg",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="relative h-[180px] bg-[#1F8033] flex items-center justify-center">
        <button className="absolute left-6 top-1/2 transform -translate-y-1/2">
          <Menu className="h-6 w-6 text-white" />
        </button>
        <p
          className="text-white text-[15px] font-extrabold"
          style={{ fontFamily: "Public Sans, sans-serif" }}
        >
          Perfil
        </p>
      </div>

      {/* Profile Picture Section */}
      <div className="relative flex justify-center">
        <div className="absolute -top-16 bg-white rounded-full p-1 border-4 border-white">
          <div className="h-32 w-32 rounded-full overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Perfil-WkSZRueiMjmlxCCnLudE7Vcastf6Wr.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Name */}
      <div className="mt-20 text-center">
        <h2
          className="text-2xl font-bold text-black"
          style={{ fontFamily: "Public Sans, sans-serif" }}
        >
          {userData.name}
        </h2>
      </div>

      {/* History Section */}
      <div className="px-4 mt-6">
        <h3 className="text-xl font-semibold text-gray-800">
          Seu histórico no programa
        </h3>

        <div className="flex justify-between mt-4 gap-4">
          {/* Waste Disposed Card */}
          <div className="flex-1 border border-gray-200 rounded-lg p-4 relative overflow-hidden">
            <div className="bg-[#1F8033] absolute bottom-0 left-0 right-0 h-12 rounded-b-lg -mx-4 -mb-4"></div>
            <div className="relative z-10">
              <p className="text-[#1F8033] text-4xl font-bold">
                {userData.wasteDisposed}g
              </p>
              <p className="text-[#1F8033] font-medium">de lixo</p>
              <p className="text-[#1F8033] font-medium">descartados</p>
            </div>
          </div>

          {/* Capibas Card */}
          <div className="flex-1 border border-gray-200 rounded-lg p-4 relative">
            <div className="flex items-center justify-center">
              <p className="text-[#1F8033] text-4xl font-bold">
                {userData.capibas}
              </p>
              <div className="ml-2 relative">
                <img src="/coin.png" alt="Capiba Coin" className="w-10 h-10" />
                <img
                  src="/coin.png"
                  alt="Capiba Coin"
                  className="w-10 h-10 absolute -top-2 -left-2"
                />
              </div>
            </div>
            <p className="text-center text-[#1F8033] font-medium mt-2">
              Capibas
            </p>
          </div>
        </div>

        {/* Pending Capibas */}
        <div className="border border-gray-200 rounded-lg p-4 mt-4 flex justify-between items-center">
          <p className="text-[#1F8033] font-medium">Capibas pendentes:</p>
          <p className="text-[#1F8033] font-medium">
            {userData.pendingCapibas.toString().padStart(2, "0")}
          </p>
        </div>
      </div>

      {/* Reports Section */}
      <div className="px-4 mt-8 pb-8">
        <h3 className="text-xl font-semibold text-gray-800">Suas denúncias</h3>

        <div className="grid grid-cols-2 gap-4 mt-4">
          {userData.reports.map((report) => (
            <div
              key={report.id}
              className="bg-gray-50 rounded-lg overflow-hidden"
            >
              <div className="h-32 overflow-hidden">
                <img
                  src={report.image || "/placeholder.svg"}
                  alt={`Report ${report.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-medium">Registro {report.id}</p>
                  <span
                    className={`text-xs text-white px-2 py-1 rounded-full ${
                      report.status === "Validado"
                        ? "bg-[#1F8033]"
                        : "bg-orange-500"
                    }`}
                  >
                    {report.status}
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-500">LOCALIZAÇÃO</p>
                  <p className="text-sm">{report.location}</p>
                  <p className="text-xs text-gray-500">DATA</p>
                  <p className="text-sm">{report.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
