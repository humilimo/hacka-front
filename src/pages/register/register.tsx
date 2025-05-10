import React, { useState } from 'react';

const bin =  { id: 1, name: 'Lixeira Nº 023 - Bairro Boa Vista' }

export default function RecolheFlow() {
  const [step, setStep] = useState(0);
  const [selectedBin, setSelectedBin] = useState(bin.id);
  const [binConfirmed, setBinConfirmed] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [weight, setWeight] = useState(746); // Placeholder value
  const [coins, setCoins] = useState(10); // Placeholder value

  // Handlers
  const handleContinue = () => setStep(0);
  const handleConfirmBin = () => setStep(1);
  const handleFinishDeposit = () => {
    setStep(2);
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      setStep(3);
    }, 1500); // Simulate calculation
  };
  const handleViewBalance = () => {
    // Implement navigation to balance page if needed
  };

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
      <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-8 flex flex-col items-center">
        {/* Step 1: Select Bin & Confirm */}
        {step === 0 && (
          <>
            <p className="text-black text-center font-bold mb-2">Parabéns pela iniciativa! <span role="img" aria-label="celebrate">👏</span></p>
            <p className="text-black text-center font-light mb-6 text-sm" style={{ fontFamily: 'Public Sans, sans-serif', fontSize: 16, color: '#000000' }}>
              Seu gesto ajuda a tornar Recife uma cidade mais limpa, consciente e sustentável.
            </p>
            <div className='w-full h-[1px] bg-[#1F8033] mb-8'/>
            <div className="w-full mb-4">
              <label className="block text-gray-700 font-sm font-semibold mb-1">
                1. Confirme o número da lixeira que você irá utilizar
              </label>
              <span className="block text-xs text-gray-500 mb-2">
                Encontre essa identificação do lado do QR Code que você usou.
              </span>
              <div className="flex flex-col items-center mt-2">
                <p className="text-center mb-6 text-sm" 
                  style={{ fontFamily: 'Public Sans, sans-serif', fontWeight: 600, fontSize: 16, color: '#000000' }}>
                {bin.name}
                </p>
                <a href="#" style={{ color: '#1F8033', textDecoration: 'underline', fontStyle: 'italic'}} className="text-xs underline inline-block">Essa não é a lixeira?</a>
                <div className="flex items-center mt-2">
                    <input
                    id="confirm-bin"
                    type="checkbox"
                    checked={binConfirmed}
                    onChange={e => setBinConfirmed(e.target.checked)}
                    className="mr-2 accent-[#1F8033]"
                    />
                    <label htmlFor="confirm-bin" className="text-sm text-[#1F8033]">
                        Confirmo que esta é a lixeira correta
                    </label>
                </div>
              </div>
            </div>
            <button
              style={{
                backgroundColor: binConfirmed ? "#1F8033" : "#e5e7eb",
                color: binConfirmed ? "#FAFAFA" : "#9ca3af",
                cursor: binConfirmed ? "pointer" : "not-allowed",
              }}
              className="w-full py-3 border border-[#1F8033] rounded-lg font-semibold mt-4 transition"
              onClick={handleConfirmBin}
              disabled={!binConfirmed}
            >
              Continuar
            </button>
          </>
        )}
        {/* Step 2: Deposit Trash */}
        {step === 1 && (
          <>
            <p className="text-black text-center font-semibold mb-2">Parabéns pela iniciativa! <span role="img" aria-label="celebrate">👏</span></p>
            <p className="text-black text-center font-light mb-6 text-sm" style={{ fontFamily: 'Public Sans, sans-serif', fontSize: 16, color: '#000000' }}>
              Seu gesto ajuda a tornar Recife uma cidade mais limpa, consciente e sustentável.
            </p>
            <div className='w-full h-[1px] bg-[#1F8033] mb-8'/>
            <div className="w-full mb-6">
              <label className="block text-gray-700 font-sm font-semibold mb-2">
                2. Agora deposite seu lixo na lixeira e aperte o botão abaixo para confirmar o descarte.
              </label>
              <div className="flex justify-center my-4">
                <img src="src/assets/dumpster.png" alt="Lixeira" className="h-32" />
              </div>
            </div>
            <button
            style={{
              backgroundColor: binConfirmed ? "#1F8033" : "#e5e7eb",
              color: binConfirmed ? "#FAFAFA" : "#9ca3af",
              cursor: binConfirmed ? "pointer" : "not-allowed",
            }}
              className="w-full py-3 rounded-lg font-semibold mt-4 transition"
              onClick={handleFinishDeposit}
            >
              Terminei de descartar
            </button>
          </>
        )}
        {/* Step 3: Calculating */}
        {step === 2 && (
          <>
            <p className="text-center text-[#1F8033] font-sm font-semibold mb-6">
              Aguarde um momento enquanto calculamos a quantidade do lixo descartado
            </p>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 rounded-full p-6 mb-4">
                <svg className="h-12 w-12 text-green-700 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth="4" className="opacity-25" />
                  <path d="M4 12a8 8 0 018-8" strokeWidth="4" className="opacity-75" />
                </svg>
              </div>
              <span className="text-green-700 font-semibold">Calculando.</span>
            </div>
          </>
        )}
        {/* Step 4: Result */}
        {step === 3 && (
          <>
            <p className="text-center text-gray-700 mb-4">Você descartou</p>
            <div className="flex flex-col items-center mb-4">
              <span className="text-4xl font-bold text-green-700">{weight}g</span>
              <span className="text-green-700 font-semibold">de lixo</span>
            </div>
            <p className="text-center text-gray-700 mb-2">e ganhou:</p>
            <div className="flex flex-col items-center mb-6">
              <div className="flex items-center space-x-2">
                <img src="/coin.png" alt="Moeda Capibas" className="h-8 w-8" />
                <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full font-semibold text-sm">+{coins} moedas Capibas!</span>
              </div>
            </div>
            <button
              style={{
                backgroundColor: binConfirmed ? "#1F8033" : "#e5e7eb",
                color: binConfirmed ? "#FAFAFA" : "#9ca3af",
                cursor: binConfirmed ? "pointer" : "not-allowed",
              }}
              className="w-full py-3 rounded-lg font-semibold mt-4 transition"
              onClick={handleViewBalance}
            >
              Ver saldo
            </button>
          </>
        )}
      </div>
    </div>
  );
}