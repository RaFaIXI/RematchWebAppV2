"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Clipboard, Save, Undo, Download, ExternalLink, HomeIcon } from "lucide-react";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function TacticalBoardPage() {
  const [lang, setLang] = useState("en");
  const [players, setPlayers] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [draggedPlayer, setDraggedPlayer] = useState(null);
  const [history, setHistory] = useState([]);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const fieldRef = useRef(null);
  const easterEggTimerRef = useRef(null);
  
  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang === "en" || storedLang === "fr") {
      setLang(storedLang);
    }
    
    // Initialize players
    initializePlayers();

    return () => {
      if (easterEggTimerRef.current) {
        clearTimeout(easterEggTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Check for easter egg pattern after each move
    checkForEasterEgg();
  }, [players]);

  const translations = {
    en: {
      title: "Tactical Board",
      subtitle: "Create and share your football strategies",
      reset: "Reset Board",
      undo: "Undo Last Move",
      downloadImage: "Download Image",
      backToHome: "Back to Home",
      teamA: "Team A",
      teamB: "Team B",
      easterEggMessage: "Cheeky! Keep it classy!"
    },
    fr: {
      title: "Tableau Tactique",
      subtitle: "Créez et partagez vos stratégies de football",
      reset: "Réinitialiser",
      undo: "Annuler",
      downloadImage: "Télécharger",
      backToHome: "Retour à l'Accueil",
      teamA: "Équipe A",
      teamB: "Équipe B",
      easterEggMessage: "Coquin! Restez classe!"
    }
  };

  const t = translations[lang];

  const initializePlayers = () => {
    // Team A (blue)
    const teamA = [
      { id: "a1", team: "a", x: 100, y: 200, color: "#3b82f6" },  // Left back
      { id: "a2", team: "a", x: 200, y: 120, color: "#3b82f6" },  // Left forward
      { id: "a3", team: "a", x: 150, y: 250, color: "#3b82f6" },  // Center back
      { id: "a4", team: "a", x: 200, y: 380, color: "#3b82f6" },  // Right forward
      { id: "a5", team: "a", x: 100, y: 300, color: "#3b82f6" },  // Right back
    ];
    
    // Team B (red)
    const teamB = [
      { id: "b1", team: "b", x: 500, y: 200, color: "#ef4444" },  // Left back
      { id: "b2", team: "b", x: 400, y: 120, color: "#ef4444" },  // Left forward
      { id: "b3", team: "b", x: 450, y: 250, color: "#ef4444" },  // Center back
      { id: "b4", team: "b", x: 400, y: 380, color: "#ef4444" },  // Right forward
      { id: "b5", team: "b", x: 500, y: 300, color: "#ef4444" },  // Right back
    ];
    
    // Ball
    const ball = { id: "ball", team: "ball", x: 300, y: 250, color: "#ffffff" };
    
    setPlayers([...teamA, ...teamB, ball]);
    setHistory([[...teamA, ...teamB, ball]]);
  };

  const handleMouseDown = (playerId, e) => {
    setIsDragging(true);
    setDraggedPlayer(playerId);
    e.stopPropagation();
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !draggedPlayer) return;
    
    const fieldRect = fieldRef.current.getBoundingClientRect();
    const x = e.clientX - fieldRect.left;
    const y = e.clientY - fieldRect.top;
    
    // Don't allow dragging outside the field
    const playerSize = draggedPlayer === "ball" ? 15 : 25;
    const boundedX = Math.max(playerSize, Math.min(fieldRect.width - playerSize, x));
    const boundedY = Math.max(playerSize, Math.min(fieldRect.height - playerSize, y));
    
    setPlayers(players.map(player => 
      player.id === draggedPlayer 
        ? { ...player, x: boundedX, y: boundedY } 
        : player
    ));
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setHistory([...history, [...players]]);
    }
    setIsDragging(false);
    setDraggedPlayer(null);
  };

  const checkForEasterEgg = () => {
    // First find all the available players (excluding the ball)
    const playersOnly = players.filter(p => p.id !== "ball");
    
    // We need to find a pattern where:
    // 1. Two players are positioned close to each other horizontally (the "balls")
    // 2. Three players are positioned in a vertical line above them (the "shaft")
    
    // Step 1: Find all potential pairs that could be the "balls"
    const potentialPairs = [];
    for (let i = 0; i < playersOnly.length; i++) {
      for (let j = i + 1; j < playersOnly.length; j++) {
        const p1 = playersOnly[i];
        const p2 = playersOnly[j];
        
        // Check if they're roughly at the same height (y value)
        if (Math.abs(p1.y - p2.y) < 30) {
          // Check if they're close horizontally but not too close
          const xDistance = Math.abs(p1.x - p2.x);
          if (xDistance > 20 && xDistance < 60) {
            potentialPairs.push([p1, p2]);
          }
        }
      }
    }
    
    // Step 2: For each potential pair, check if there are 3 players forming a vertical line above
    for (const pair of potentialPairs) {
      // Find the center point between the two "balls"
      const centerX = (pair[0].x + pair[1].x) / 2;
      const baseY = Math.min(pair[0].y, pair[1].y);
      
      // Find players that could form the "shaft"
      const shaftCandidates = playersOnly.filter(p => 
        !pair.includes(p) && // Not one of the "balls"
        Math.abs(p.x - centerX) < 30 && // Roughly aligned with the center of the "balls"
        p.y < baseY - 20 // Above the "balls"
      );
      
      // If we have at least 3 candidates for the shaft, sort them by Y position
      if (shaftCandidates.length >= 3) {
        shaftCandidates.sort((a, b) => b.y - a.y); // Sort by Y position (top to bottom)
        
        // Check if the top 3 form a reasonably straight line
        const shaft = shaftCandidates.slice(0, 3);
        let isAligned = true;
        
        for (let i = 0; i < shaft.length; i++) {
          if (Math.abs(shaft[i].x - centerX) > 30) {
            isAligned = false;
            break;
          }
          
          // If not the first element, check vertical spacing with previous
          if (i > 0) {
            const verticalSpacing = shaft[i-1].y - shaft[i].y;
            if (verticalSpacing < 20 || verticalSpacing > 80) {
              isAligned = false;
              break;
            }
          }
        }
        
        if (isAligned) {
          // Pattern detected! Trigger easter egg
          triggerEasterEgg();
          return;
        }
      }
    }
  };

  const triggerEasterEgg = () => {
    if (showEasterEgg) return; // Already showing
    
    setShowEasterEgg(true);
    
    // Hide the easter egg after a few seconds
    if (easterEggTimerRef.current) {
      clearTimeout(easterEggTimerRef.current);
    }
    
    easterEggTimerRef.current = setTimeout(() => {
      setShowEasterEgg(false);
    }, 3000);
  };

  const resetBoard = () => {
    initializePlayers();
    setShowEasterEgg(false);
    if (easterEggTimerRef.current) {
      clearTimeout(easterEggTimerRef.current);
    }
  };

  const undoLastMove = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      setHistory(newHistory);
      setPlayers([...newHistory[newHistory.length - 1]]);
    }
  };

  const downloadImage = () => {
    // Create a hidden canvas element
    const canvas = document.createElement('canvas');
    const field = fieldRef.current;
    const rect = field.getBoundingClientRect();
    
    // Set canvas dimensions to match the field
    canvas.width = rect.width;
    canvas.height = rect.height;
    
    const ctx = canvas.getContext('2d');
    
    // Draw the field background
    ctx.fillStyle = '#16803c'; // Green field color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw field markings
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.lineWidth = 2;
    
    // Center circle
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 64, 0, 2 * Math.PI);
    ctx.stroke();
    
    // Center line
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
    
    // Center dot
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 2, 0, 2 * Math.PI);
    ctx.fill();
    
    // Goal areas
    ctx.strokeRect(0, (canvas.height / 2) - 64, 32, 128);
    ctx.strokeRect(canvas.width - 32, (canvas.height / 2) - 64, 32, 128);
    
    // Draw players and ball
    players.forEach(player => {
      if (player.id === "ball") {
        // Draw ball
        ctx.fillStyle = player.color;
        ctx.strokeStyle = '#666';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(player.x, player.y, 8, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
      } else {
        // Draw player circle
        ctx.fillStyle = player.color;
        ctx.beginPath();
        ctx.arc(player.x, player.y, 12, 0, 2 * Math.PI);
        ctx.fill();
        
        // Draw player number
        ctx.fillStyle = 'white';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(player.id.charAt(1), player.x, player.y);
      }
    });
    
    // Convert canvas to data URL and trigger download
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'tactical-board.png';
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">{t.title}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-2">{t.subtitle}</p>
          </div>
          <div className="flex space-x-4">
            <Link 
              href="/"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition-colors duration-200"
            >
              <HomeIcon size={18} />
              <span>{t.backToHome}</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Control Panel */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{lang === "en" ? "Controls" : "Contrôles"}</h2>
            
            <div className="space-y-4">
              <button 
                onClick={resetBoard}
                className="w-full flex items-center justify-center space-x-2 p-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <Clipboard size={18} />
                <span>{t.reset}</span>
              </button>
              
              <button 
                onClick={undoLastMove}
                className="w-full flex items-center justify-center space-x-2 p-3 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-lg hover:bg-yellow-200 dark:hover:bg-yellow-800 transition-colors"
              >
                <Undo size={18} />
                <span>{t.undo}</span>
              </button>
              
              <button 
                onClick={downloadImage}
                className="w-full flex items-center justify-center space-x-2 p-3 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
              >
                <Download size={18} />
                <span>{t.downloadImage}</span>
              </button>
            </div>
            
            <div className="mt-8">
              <h3 className="font-bold text-gray-800 dark:text-white mb-2">{lang === "en" ? "Teams" : "Équipes"}</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  <span className="text-gray-700 dark:text-gray-300">{t.teamA}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-red-500"></div>
                  <span className="text-gray-700 dark:text-gray-300">{t.teamB}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-white border border-gray-300 dark:border-gray-600"></div>
                  <span className="text-gray-700 dark:text-gray-300">{lang === "en" ? "Ball" : "Ballon"}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tactical Board */}
          <div className="md:col-span-3">
            <div 
              ref={fieldRef}
              className="bg-green-700 dark:bg-green-800 w-full h-[500px] rounded-xl shadow-md relative overflow-hidden"
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {/* Field markings */}
              <div className="absolute inset-0">
                {/* Center circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-white opacity-50 rounded-full"></div>
                
                {/* Center line */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-white opacity-50"></div>
                
                {/* Center dot */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
                
                {/* Team A goal area */}
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-16 h-32 border-2 border-white opacity-50"></div>
                
                {/* Team B goal area */}
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-16 h-32 border-2 border-white opacity-50"></div>
              </div>
              
              {/* Players and ball */}
              {players.map((player) => (
                <div
                  key={player.id}
                  className={`absolute cursor-move ${player.id === "ball" ? "rounded-full border-2 border-gray-400 w-8 h-8 z-20" : "rounded-full w-12 h-12 flex items-center justify-center text-white font-bold z-10"}`}
                  style={{
                    backgroundColor: player.color,
                    left: player.x - (player.id === "ball" ? 4 : 6), // Center the player
                    top: player.y - (player.id === "ball" ? 4 : 6),
                    boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                    userSelect: 'none' // Prevent text selection
                  }}
                  onMouseDown={(e) => handleMouseDown(player.id, e)}
                >
                  {player.id !== "ball" && player.id.charAt(1)}
                </div>
              ))}
              
              {/* Easter Egg Animation with Image */}
              {showEasterEgg && (
                <div className="absolute inset-0 flex items-center justify-center z-30">
                  <div className="bg-black bg-opacity-70 p-6 rounded-lg animate-bounce">
                    <p className="text-2xl text-white font-bold mb-4">{t.easterEggMessage}</p>
                    <div className="flex justify-center">
                      {/* Replace the emoji with the actual image */}
                      <div className="relative w-64 h-64">
                        <Image 
                          src="/images.png" 
                          alt="Easter Egg Image" 
                          layout="fill"
                          objectFit="contain"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center">
              {lang === "en" ? "Drag players and ball to create your tactical setup" : "Faites glisser les joueurs et le ballon pour créer votre configuration tactique"}
            </div>
          </div>
        </div>

        <Footer />

      </div>
    </div>
  );
}