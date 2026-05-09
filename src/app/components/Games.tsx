import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { motion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';
import { Calculator, Shuffle, Trophy, RefreshCw, Play, Minus, Plus, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';

type GameMode = 'addition' | 'subtraction' | 'mixed';

type Question = {
  a: number;
  b: number;
  op: '+' | '-';
  answer: number;
};

function makeQuestion(mode: GameMode): Question {
  const a = Math.floor(Math.random() * 90) + 10;
  const b = Math.floor(Math.random() * 90) + 10;
  if (mode === 'addition') {
    return { a, b, op: '+', answer: a + b };
  }
  if (mode === 'subtraction') {
    const left = Math.max(a, b);
    const right = Math.min(a, b);
    return { a: left, b: right, op: '-', answer: left - right };
  }
  const isAddition = Math.random() > 0.5;
  if (isAddition) {
    return { a, b, op: '+', answer: a + b };
  }
  const left = Math.max(a, b);
  const right = Math.min(a, b);
  return { a: left, b: right, op: '-', answer: left - right };
}

export function Games() {
  return <GamesInner embedded={false} />;
}

export function GamesInner({ embedded = false }: { embedded?: boolean }) {
  const [mode, setMode] = useState<GameMode>('mixed');
  const [question, setQuestion] = useState<Question>(() => makeQuestion('mixed'));
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [started, setStarted] = useState(false);
  const [feedback, setFeedback] = useState('Pick a mode and start the game.');

  useEffect(() => {
    if (!started || timeLeft <= 0) return;
    const timer = window.setInterval(() => {
      setTimeLeft((current) => current - 1);
    }, 1000);
    return () => window.clearInterval(timer);
  }, [started, timeLeft]);

  useEffect(() => {
    if (timeLeft > 0) return;
    setStarted(false);
    setFeedback(`Time is up. Final score: ${score}`);
  }, [score, timeLeft]);

  const modeMeta = useMemo(
    () => ({
      addition: {
        title: 'Quick Sum',
        description: 'Race through addition questions and build speed',
        icon: Plus,
      },
      subtraction: {
        title: 'Quick Subtract',
        description: 'Sharpen your subtraction reflexes with clean, fast rounds',
        icon: Minus,
      },
      mixed: {
        title: 'Mixed Blitz',
        description: 'A fast mix of sum and subtract questions for extra challenge',
        icon: Shuffle,
      },
    }),
    [],
  );

  const startGame = (nextMode: GameMode) => {
    setMode(nextMode);
    setQuestion(makeQuestion(nextMode));
    setAnswer('');
    setScore(0);
    setStreak(0);
    setTimeLeft(60);
    setStarted(true);
    setFeedback(`Game started: ${modeMeta[nextMode].title}`);
  };

  const nextQuestion = () => {
    setQuestion(makeQuestion(mode));
    setAnswer('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!started || timeLeft <= 0) return;

    const parsed = Number(answer);
    if (Number.isNaN(parsed)) {
      setFeedback('Please enter a valid number');
      return;
    }

    if (parsed === question.answer) {
      const nextStreak = streak + 1;
      setScore((current) => current + 10 + Math.min(nextStreak, 10));
      setStreak(nextStreak);
      setBestStreak((current) => Math.max(current, nextStreak));
      setFeedback('Correct! Nice speed');
      nextQuestion();
      return;
    }

    setStreak(0);
    setScore((current) => Math.max(0, current - 2));
    setFeedback(`Not quite. The answer was ${question.answer}`);
    nextQuestion();
  };

  const restart = () => startGame(mode);

  const shellClassName = embedded ? 'relative' : 'min-h-screen bg-black';
  const mainClassName = embedded ? 'relative py-8 px-4' : 'relative pt-28 pb-16 px-4';
  const ContentTag = embedded ? 'div' : 'main';

  return (
    <div className={shellClassName}>
      {!embedded && <Navigation />}

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-10 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-36 right-10 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <ContentTag className={mainClassName}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-600/20 backdrop-blur-sm border border-pink-500/30 mb-5">
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="text-sm text-white font-semibold">Quick Games</span>
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-7xl text-white font-black mb-4">
              Sum and Subtract
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Play quick arithmetic rounds, chase a high score, and warm up your brain anytime
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border-2 border-pink-500/30 lg:col-span-1">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center mb-4 shadow-lg">
                  <Calculator className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-white text-2xl font-bold">Game Modes</CardTitle>
                <CardDescription className="text-slate-400">
                  Pick a style, then jump into a 60-second round
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {(Object.keys(modeMeta) as GameMode[]).map((item) => {
                  const MetaIcon = modeMeta[item].icon;
                  const active = mode === item;
                  return (
                    <button
                      key={item}
                      onClick={() => startGame(item)}
                      className={`w-full text-left rounded-2xl border p-4 transition-all duration-200 ${active
                          ? 'border-pink-400/50 bg-pink-500/15 shadow-lg shadow-pink-500/10'
                          : 'border-white/10 bg-white/5 hover:bg-white/10'
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shrink-0">
                          <MetaIcon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">{modeMeta[item].title}</p>
                          <p className="text-sm text-slate-400">{modeMeta[item].description}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="rounded-2xl bg-black/30 border border-white/10 p-4">
                    <p className="text-slate-400 text-xs uppercase tracking-wide">Score</p>
                    <p className="text-white text-2xl font-black">{score}</p>
                  </div>
                  <div className="rounded-2xl bg-black/30 border border-white/10 p-4">
                    <p className="text-slate-400 text-xs uppercase tracking-wide">Time</p>
                    <p className="text-white text-2xl font-black">{timeLeft}s</p>
                  </div>
                  <div className="rounded-2xl bg-black/30 border border-white/10 p-4">
                    <p className="text-slate-400 text-xs uppercase tracking-wide">Streak</p>
                    <p className="text-white text-2xl font-black">{streak}</p>
                  </div>
                  <div className="rounded-2xl bg-black/30 border border-white/10 p-4">
                    <p className="text-slate-400 text-xs uppercase tracking-wide">Best</p>
                    <p className="text-white text-2xl font-black">{bestStreak}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border-2 border-purple-500/30 lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-white text-3xl font-black flex items-center gap-3 flex-wrap">
                  <span>{modeMeta[mode].title}</span>
                  <Play className="w-7 h-7 text-pink-400" />
                </CardTitle>
                <CardDescription className="text-slate-400 text-base">
                  {modeMeta[mode].description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-3xl border border-white/10 bg-black/30 p-6 md:p-8">
                  <p className="text-slate-400 text-sm uppercase tracking-[0.3em] mb-4">
                    Your Question
                  </p>
                  <div className="flex items-center justify-center gap-4 flex-wrap text-5xl md:text-7xl font-black text-white">
                    <span>{question.a}</span>
                    <span className="text-pink-400">{question.op}</span>
                    <span>{question.b}</span>
                    <span className="text-pink-400">=</span>
                    <span className="text-slate-500">?</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-3">
                    <Input
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      placeholder="Type your answer"
                      inputMode="numeric"
                      className="h-14 bg-black/50 border-pink-500/30 text-white placeholder:text-slate-500 text-lg"
                    />
                    <Button
                      type="submit"
                      className="h-14 px-6 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-400 hover:via-pink-400 hover:to-purple-500 text-white"
                      disabled={!started || timeLeft <= 0}
                    >
                      Submit
                    </Button>
                  </div>
                </form>

                <div className="flex flex-col md:flex-row gap-3">
                  <Button
                    type="button"
                    className="bg-black/40 border border-pink-500/30 text-white hover:bg-black/60 shadow-lg shadow-pink-500/10"
                    onClick={restart}
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Restart
                  </Button>
                  <Button
                    type="button"
                    className="bg-white/10 text-white hover:bg-white/20 border border-white/10"
                    onClick={() => startGame(mode)}
                  >
                    <Shuffle className="w-4 h-4 mr-2" />
                    New Question
                  </Button>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-slate-200">{feedback}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </ContentTag>

      {!embedded && <Footer />}
    </div>
  );
}
