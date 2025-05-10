import React, { useState } from 'react';

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
    {/* Header */}
    <div className="w-full relative flex justify-center items-center">
      <div className="relative h-[303px] w-full">
        <img
          src="src/assets/header-picture.png"
          alt="Foto da Header"
          className="absolute top-0 left-0 h-[300px] w-full object-cover z-0"
        />
        <img
          src="src/assets/green-background-bigger.png"
          alt="Recife Logo"
          className="absolute top-0 left-0 h-[303px] w-full object-cover opacity-100 z-10"
        />
      </div>
      <h1
        className="text-4xl font-bold text-[#1F8033] text-center absolute z-10 top-[265px]"
        style={{
          fontFamily: "Londrina Solid, sans-serif",
          fontWeight: 700,
          textShadow:
            "-5px -5px 0 #FFFFFF, 5px -5px 0 #FFFFFF, -5px 5px 0 #FFFFFF, 5px 5px 0 #FFFFFF, 0px 5px 0 #FFFFFF, 0px -5px 0 #FFFFFF, 5px 0px 0 #FFFFFF, -5px 0px 0 #FFFFFF",
          letterSpacing: "1px",
        }}
      >
        ReColhe
      </h1>
    </div>
    {/* Main Card */}
    <div className="bg-white shadow-lg rounded-xl w-full max-w-md pt-8 pb-8 pl-4 pr-4 flex flex-col items-center">
        <>
          <p className="text-black text-left font-light mb-6 text-sm" style={{ fontFamily: 'Public Sans, sans-serif', fontSize: 14, color: '#000000' }}>
          O ReColhe é uma iniciativa da Prefeitura do Recife que une tecnologia, cidadania e sustentabilidade.
          </p>
          <p className="text-black text-left font-light mb-6 text-sm" style={{ fontFamily: 'Public Sans, sans-serif', fontSize: 14, color: '#000000' }}>
          Ao descartar corretamente seu lixo nas lixeiras inteligentes da cidade ou denunciar locais de descarte irregular, você acumula moedas Capibas e pode trocá-las por benefícios e recompensas reais!
          </p>
          <div className='w-full h-[1px] bg-[#1F8033] mb-8'/>
            
          <div className="w-full mb-4">
            <div className="bg-[#3D905E] rounded-4xl pt-0 pb-6 pl-0 pr-0 flex flex-col justify-start" style={{ alignItems: 'center' }}>
              <h1
                  className="text-4xl font-bold text-[#FFFFFF] text-center"
                  style={{
                  fontFamily: "Londrina Solid, sans-serif",
                  fontWeight: 600,
                  fontSize: 46,
                  textShadow:
                      "-4px -4px 0 #3D905E, 4px -4px 0 #3D905E, -4px 4px 0 #3D905E, 4px 4px 0 #3D905E, 0px 4px 0 #3D905E, 0px -4px 0 #3D905E, 4px 0px 0 #3D905E, -4px 0px 0 #3D905E",
                  letterSpacing: "1px",
                  color: "#FFFFFF",
                  marginBottom: "8px",
                  marginTop: "-22px"
                  }}
              >
                  Como Funciona
              </h1>

              <p className="text-white text-left font-extralight pl-4 mb-4 text-sm" style={{ fontFamily: 'Public Sans, sans-serif' }}>
                1. Descarte resíduos nas lixeiras inteligentes usando o QR Code presente na caçamba;
              </p>
              <p className="text-white text-left font-extralight pl-4 mb-4 text-sm" style={{ fontFamily: 'Public Sans, sans-serif' }}>
                2. Ganhe moedas Capibas de acordo com a quantidade de lixo que descartou!
              </p>
            </div>
          </div>

          <h1
            className="text-4xl font-bold text-[#8E6018] text-center"
            style={{
            fontFamily: "Londrina Solid, sans-serif",
            fontWeight: 600,
            fontSize: '20px', 
            letterSpacing: "1px",
            marginBottom: "8px",
            }}
          >
            E para que servem as Capibas?
          </h1>

          <div className='flex flex-row flex-start mr-auto'>
            <p className="text-[#8E6018] text-left font-light mb- ml-0  " style={{ fontFamily: 'Public Sans, sans-serif', fontSize: 14 }}>
              Economia circular é sobre retorno.
            </p>
          </div>

          <div className='flex flex-row flex-start mr-auto'>
            <p className="text-[#8E6018] text-left font-light mb- ml-0  " style={{ fontFamily: 'Public Sans, sans-serif', fontSize: 14 }}>
            Com seus Capibas, você poderá ter:
            </p>
          </div>
          
          <div className='flex flex-row flex-start mr-auto'>
            <p className="text-[#8E6018] text-left font-light mb- ml-0  " style={{ fontFamily: 'Public Sans, sans-serif', fontSize: 14 }}>
              Créditos do VEM
            </p>
          </div>
          
          <div className='flex flex-row flex-start mr-auto'>
            <p className="text-[#8E6018] text-left font-light mb- ml-0  " style={{ fontFamily: 'Public Sans, sans-serif', fontSize: 14 }}>
              Cupons em apps de transporte
            </p>
          </div>
          
          <div className='flex flex-row flex-start mr-auto'>
            <p className="text-[#8E6018] text-left font-light mb- ml-0  " style={{ fontFamily: 'Public Sans, sans-serif', fontSize: 14 }}>
              Vale compras
            </p>
          </div>
          
          <div className='flex flex-row flex-start mr-auto'>
            <p className="text-[#8E6018] text-left font-light mb- ml-0  " style={{ fontFamily: 'Public Sans, sans-serif', fontSize: 14 }}>
              Ingressos para eventos
            </p>
          </div>
         
          <p className="text-[#8E6018] text-left font-light mb- ml-0  " style={{ fontFamily: 'Public Sans, sans-serif', fontSize: 14, fontWeight: 'bolder' }}>
            ...E muito mais!
          </p>

          {/* <button
            style={{
              backgroundColor: "#1F8033",
              color: "#9ca3af",
              cursor:  "not-allowed",
            }}
            className="w-full py-3 border border-[#1F8033] rounded-lg font-semibold mt-4 transition"
            onClick={handleConfirmBin}
            disabled={!binConfirmed}
          >
            Continuar
          </button> */}
        </>
    </div>
  </div>
  );
}