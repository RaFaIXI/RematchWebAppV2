"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { 
  Timer, 
  Calendar, 
  CheckCircle, 
  Zap,
  X,
  Trophy
} from "lucide-react";
import Footer from "@/components/Footer";

export default function Routines() {
  const [lang, setLang] = useState<"en" | "fr">("en");
  const [activeTab, setActiveTab] = useState<"beginner" | "intermediate" | "advanced">("beginner");
  const [completedRoutines, setCompletedRoutines] = useState<string[]>([]);
  const [streakDays, setStreakDays] = useState<number>(0);
  const [lastActiveDate, setLastActiveDate] = useState<string>("");
  const [videoModal, setVideoModal] = useState({
    isOpen: false,
    videoUrl: "",
    title: ""
  });
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang) {
      setLang(storedLang as "en" | "fr");
    }

    // Check and update daily reset of routines
    const today = new Date().toDateString();
    const storedLastActiveDate = localStorage.getItem("lastActiveDate");
    
    if (storedLastActiveDate) {
      setLastActiveDate(storedLastActiveDate);
      
      // Calculate the time difference between the last active date and today
      const lastActive = new Date(storedLastActiveDate);
      const currentDate = new Date(today);
      const timeDiff = currentDate.getTime() - lastActive.getTime();
      const dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
      
      if (dayDiff === 1) {
        // User returned the next day - maintain streak
        const storedStreak = localStorage.getItem("streakDays");
        const newStreak = storedStreak ? parseInt(storedStreak) + 1 : 1;
        setStreakDays(newStreak);
        localStorage.setItem("streakDays", newStreak.toString());
      } else if (dayDiff > 1) {
        // User skipped a day - reset streak
        setStreakDays(1);
        localStorage.setItem("streakDays", "1");
      } else {
        // Same day - maintain current streak
        const storedStreak = localStorage.getItem("streakDays");
        if (storedStreak) {
          setStreakDays(parseInt(storedStreak));
        }
      }
      
      // If it's a new day, reset completed routines
      if (storedLastActiveDate !== today) {
        setCompletedRoutines([]);
        localStorage.removeItem("completedRoutines");
      } else {
        // Same day, load completed routines
        const storedCompleted = localStorage.getItem("completedRoutines");
        if (storedCompleted) {
          setCompletedRoutines(JSON.parse(storedCompleted));
        }
      }
    } else {
      // First visit
      setStreakDays(1);
      localStorage.setItem("streakDays", "1");
    }
    
    // Update last active date to today
    setLastActiveDate(today);
    localStorage.setItem("lastActiveDate", today);
  }, []);

  // Effect to handle autoplay when video modal opens
  useEffect(() => {
    if (videoModal.isOpen && videoRef.current) {
      // Attempt to play the video when modal is opened
      const playPromise = videoRef.current.play();
      
      // Handle potential play() rejection (browser policy might prevent autoplay)
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Autoplay prevented:', error);
          // You might want to show a UI element indicating the user needs to click play
        });
      }
    }
  }, [videoModal.isOpen]);

  const markAsCompleted = (routineId: string) => {
    const newCompletedRoutines = [...completedRoutines];
    
    if (completedRoutines.includes(routineId)) {
      // Remove if already completed
      const index = newCompletedRoutines.indexOf(routineId);
      newCompletedRoutines.splice(index, 1);
    } else {
      // Add to completed
      newCompletedRoutines.push(routineId);
    }
    
    setCompletedRoutines(newCompletedRoutines);
    localStorage.setItem("completedRoutines", JSON.stringify(newCompletedRoutines));
  };

  const openVideoModal = (id: string, title: string) => {
    // Map routine ID to a video URL
    // In a real application, these would be actual video URLs
    const videoUrls = {
      "beginner-1": "/video/Routines/pushballandscanroutine.mp4",
      "intermediate-1": "/video/Routines/shootandcrossroutine.mp4",
      "advanced-1": "/video/Routines/passroutine.mp4",
    };

    setVideoModal({
      isOpen: true,
      videoUrl: videoUrls[id] || "",
      title: title
    });
  };

  const closeVideoModal = () => {
    // Pause the video when modal is closed
    if (videoRef.current) {
      videoRef.current.pause();
    }
    
    setVideoModal({
      isOpen: false,
      videoUrl: "",
      title: ""
    });
  };

  const translations = {
    en: {
      pageTitle: "Training Routines",
      pageDescription: "Improve your skills with gamified training routines for all levels",
      routinesDescription: "Track your progress and complete daily exercises to build your training streak",
      startButton: "Watch Routine",
      levelTitle: "Difficulty Levels",
      beginnerTab: "Beginner",
      intermediateTab: "Intermediate",
      advancedTab: "Advanced",
      completeButton: "Mark Complete",
      completedButton: "Completed ✓",
      statsTitle: "Your Progress",
      routinesCompleted: "Routines Completed",
      streakDays: "Day Streak",
      points: "XP Points",
      closeButton: "Close",
      watchingRoutine: "Watching Routine:",
      playerRank: "Player Rank",
      nextRank: "Next Rank",
      xpToNext: "XP to Next Rank",

      // Beginner Routines
      beginner1Title: "Basic Ball Control",
      beginner1Desc: "Master fundamental of push ball and control exercises",
      beginner1Duration: "7 minutes",
      beginner1Points: "50 XP",
      

      // Intermediate Routines
      intermediate1Title: "Cross and Shoot Circuit",
      intermediate1Desc: "Train your shooting and crossing skills while and while not moving",
      intermediate1Duration: "10 minutes",
      intermediate1Points: "150 XP",
      

      // Advanced Routines
      advanced1Title: "Advanced Passing Circuit",
      advanced1Desc: "Combine passing skills and shooting in a high-intensity circuit, your passes will be more precise",
      advanced1Duration: "10 minutes",
      advanced1Points: "250 XP",
      
    },
    fr: {
      pageTitle: "Routines d'Entraînement",
      pageDescription: "Améliorez vos compétences avec des routines d'entraînement ludiques pour tous les niveaux",
      routinesDescription: "Suivez vos progrès et complétez des exercices quotidiens pour construire votre série d'entraînement",
      startButton: "Voir la Routine",
      levelTitle: "Niveaux de Difficulté",
      beginnerTab: "Débutant",
      intermediateTab: "Intermédiaire",
      advancedTab: "Avancé",
      completeButton: "Marquer comme Terminé",
      completedButton: "Terminé ✓",
      statsTitle: "Votre Progression",
      routinesCompleted: "Routines Terminées",
      streakDays: "Jours Consécutifs",
      points: "Points XP",
      closeButton: "Fermer",
      watchingRoutine: "Visionnage de la Routine:",
      playerRank: "Grade du Joueur",
      nextRank: "Prochain Grade",
      xpToNext: "XP pour Prochain Grade",

      // Routines Débutant
      beginner1Title: "Contrôle de Balle de Base",
      beginner1Desc: "Maîtrise les fondamentaux du contrôle de balle et des exercices de poussée",
      beginner1Duration: "7 minutes",
      beginner1Points: "50 XP",

      // Routines Intermédiaire
      intermediate1Title: "Circuit de Centres et Tirs",
      intermediate1Desc: "Entraîne-toi aux tirs et aux centres en mouvement et à l'arrêt",
      intermediate1Duration: "10 minutes",
      intermediate1Points: "150 XP",

      // Routines Avancé
      advanced1Title: "Circuit de Passes Avancé",
      advanced1Desc: "Combine les passes et les tirs dans un circuit à haute intensité, tes passes seront plus précises",
      advanced1Duration: "10 minutes",
      advanced1Points: "250 XP",
    },
  };

  // Define XP points for each routine
  const routineXP = {
    "beginner-1": 50,
    "intermediate-1": 150,
    "advanced-1": 250
  };

  // Define routines data structure
  const routinesByLevel = {
    beginner: [
      {
        id: "beginner-1",
        titleKey: "beginner1Title",
        descKey: "beginner1Desc",
        durationKey: "beginner1Duration",
        pointsKey: "beginner1Points"
      },
      
    ],
    intermediate: [
      {
        id: "intermediate-1",
        titleKey: "intermediate1Title",
        descKey: "intermediate1Desc",
        durationKey: "intermediate1Duration",
        pointsKey: "intermediate1Points"
      },
    ],
    advanced: [
      {
        id: "advanced-1",
        titleKey: "advanced1Title",
        descKey: "advanced1Desc",
        durationKey: "advanced1Duration",
        pointsKey: "advanced1Points"
      },
    ]
  };

  const t = translations[lang];

  // Calculate stats
  const totalCompleted = completedRoutines.length;
  
  // Fixed XP calculation
  const totalXP = completedRoutines.reduce((acc, routineId) => {
    // Use the routineXP lookup object instead of trying to parse from translations
    return acc + (routineXP[routineId] || 0);
  }, 0);

  // Define player ranks and XP thresholds
  const playerRanks = [
    { title: "Rookie", threshold: 10 },
    { title: "Trainee", threshold: 2000 },
    { title: "Local Hero", threshold: 5000 },
    { title: "Academy Pro", threshold: 10000 },
    { title: "Street Legend", threshold: 20000 }
  ];

  // Determine current rank
  const currentRankIndex = playerRanks.reduce((highest, rank, index) => {
    if (totalXP >= rank.threshold && index > highest) {
      return index;
    }
    return highest;
  }, 0);
  
  const currentRank = playerRanks[currentRankIndex];
  const nextRank = playerRanks[currentRankIndex + 1];
  
  // Calculate progress to next rank
  let progressPercent = 100;
  let xpToNext = 0;
  
  if (nextRank) {
    const rangeSize = nextRank.threshold - currentRank.threshold;
    const progress = totalXP - currentRank.threshold;
    progressPercent = Math.min(Math.floor((progress / rangeSize) * 100), 100);
    xpToNext = nextRank.threshold - totalXP;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  {t.pageTitle}
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  {t.pageDescription}
                </p>
                <p className="mx-auto max-w-[800px] text-gray-500 md:text-lg dark:text-gray-400 mt-4">
                  {t.routinesDescription}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-3 lg:gap-12">
              {/* Stats Panel */}
              <div className="md:col-span-1">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">{t.statsTitle}</h3>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-md">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-sm text-gray-500 dark:text-gray-400">{t.routinesCompleted}</span>
                      </div>
                      <p className="text-2xl font-bold mt-1">{totalCompleted}</p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-md">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-5 w-5 text-blue-500" />
                        <span className="text-sm text-gray-500 dark:text-gray-400">{t.streakDays}</span>
                      </div>
                      <p className="text-2xl font-bold mt-1">{streakDays}</p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-md">
                      <div className="flex items-center space-x-2">
                        <Zap className="h-5 w-5 text-purple-500" />
                        <span className="text-sm text-gray-500 dark:text-gray-400">{t.points}</span>
                      </div>
                      <p className="text-2xl font-bold mt-1">{totalXP}</p>
                    </div>
                  </div>
                  
                  {/* Player Rank Section */}
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-md mb-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <Trophy className="h-5 w-5 text-yellow-500" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">{t.playerRank}</span>
                    </div>
                    <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">{currentRank.title}</p>
                    
                    {nextRank && (
                      <>
                        <div className="flex justify-between items-center text-sm mb-1">
                          <span>{t.nextRank}: {nextRank.title}</span>
                          <span>{xpToNext} {t.xpToNext}</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                          <div 
                            className="bg-yellow-500 h-2.5 rounded-full" 
                            style={{ width: `${progressPercent}%` }}
                          ></div>
                        </div>
                      </>
                    )}
                  </div>
                  
                  {/* Full Player Rank Progression */}
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-md">
                    <h4 className="font-medium mb-3">Rank Progression</h4>
                    <div className="space-y-3">
                      {playerRanks.map((rank, index) => (
                        <div key={rank.title} className="flex items-center">
                          <div 
                            className={`w-4 h-4 rounded-full mr-3 ${
                              currentRankIndex >= index ? 'bg-yellow-500' : 'bg-gray-300 dark:bg-gray-600'
                            }`}
                          ></div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <span 
                                className={`font-medium ${
                                  currentRankIndex === index ? 'text-yellow-600 dark:text-yellow-400' : ''
                                }`}
                              >
                                {rank.title}
                              </span>
                              <span className="text-sm text-gray-500">{rank.threshold} XP</span>
                            </div>
                            {index < playerRanks.length - 1 && (
                              <div className="w-0.5 h-4 bg-gray-300 dark:bg-gray-600 ml-2"></div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Routines Panel */}
              <div className="md:col-span-2">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-6">{t.levelTitle}</h3>
                  
                  {/* Level tabs */}
                  <div className="flex space-x-2 mb-6">
                    <Button 
                      onClick={() => setActiveTab("beginner")}
                      variant={activeTab === "beginner" ? "default" : "outline"}
                      className={activeTab === "beginner" ? "bg-green-600" : ""}
                    >
                      {t.beginnerTab}
                    </Button>
                    <Button 
                      onClick={() => setActiveTab("intermediate")}
                      variant={activeTab === "intermediate" ? "default" : "outline"}
                      className={activeTab === "intermediate" ? "bg-blue-600" : ""}
                    >
                      {t.intermediateTab}
                    </Button>
                    <Button 
                      onClick={() => setActiveTab("advanced")}
                      variant={activeTab === "advanced" ? "default" : "outline"}
                      className={activeTab === "advanced" ? "bg-red-600" : ""}
                    >
                      {t.advancedTab}
                    </Button>
                  </div>
                  
                  {/* Dynamically render routines based on active tab */}
                  <div className="space-y-4">
                    {routinesByLevel[activeTab].map((routine) => (
                      <RoutineCard
                        key={routine.id}
                        id={routine.id}
                        title={t[routine.titleKey]}
                        description={t[routine.descKey]}
                        duration={t[routine.durationKey]}
                        points={t[routine.pointsKey]}
                        startButtonText={t.startButton}
                        completeButtonText={completedRoutines.includes(routine.id) ? t.completedButton : t.completeButton}
                        isCompleted={completedRoutines.includes(routine.id)}
                        onComplete={() => markAsCompleted(routine.id)}
                        onWatch={() => openVideoModal(routine.id, t[routine.titleKey])}
                      />
                    ))}
                  </div>
                  
                </div>
                  {/* Ronaldo Quote */}
                  <br />
  <p className="text-center italic text-gray-500 dark:text-gray-400 mb-6">
    "Training makes Perfect" - Cristiano Ronaldo
  </p>
              </div>
              
              
            </div>
          </div>
        </section>
      </main>

      {/* Video Modal */}
      {videoModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-4xl mx-4">
            <div className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold">{t.watchingRoutine} {videoModal.title}</h3>
              <Button variant="ghost" size="icon" onClick={closeVideoModal}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-4">
              <div className="w-full aspect-video bg-black rounded-md">
                <video 
                  ref={videoRef}
                  className="w-full h-full" 
                  controls
                  autoPlay
                  poster="/api/placeholder/840/472"
                >
                  <source src={videoModal.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex justify-end">
              <Button variant="outline" onClick={closeVideoModal}>
                {t.closeButton}
              </Button>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}

// Reusable RoutineCard component
function RoutineCard({ 
  id,
  title, 
  description, 
  duration, 
  points, 
  startButtonText,
  completeButtonText,
  isCompleted,
  onComplete,
  onWatch
}: { 
  id: string;
  title: string; 
  description: string;
  duration: string;
  points: string;
  startButtonText: string;
  completeButtonText: string;
  isCompleted: boolean;
  onComplete: () => void;
  onWatch: () => void;
}) {
  return (
    <div className={`bg-white dark:bg-gray-700 rounded-lg p-5 shadow-sm border-l-4 ${isCompleted ? 'border-green-500' : 'border-gray-300'}`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="space-y-2 mb-4 md:mb-0">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <Timer className="h-4 w-4 mr-1" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center">
              <Zap className="h-4 w-4 mr-1 text-purple-500" />
              <span className="text-purple-500 font-medium">{points}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
          <Button 
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700"
            onClick={onWatch}
          >
            {startButtonText}
          </Button>
          <Button 
            variant={isCompleted ? "outline" : "default"}
            className={`w-full md:w-auto ${isCompleted ? 'border-green-500 text-green-500' : 'bg-green-600 hover:bg-green-700'}`}
            onClick={onComplete}
          >
            {completeButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
}