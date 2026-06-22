"use client";

import { useState, useEffect, useRef } from "react";
import "./VerbattleChat.css";

const BotIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <path d="M12 3a2 2 0 0 1 2 2v2H10V5a2 2 0 0 1 2-2z" />
    <circle cx="9" cy="16" r="1" fill="currentColor" />
    <circle cx="15" cy="16" r="1" fill="currentColor" />
    <path d="M8 11V8m8 3V8" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);

const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

const HOBBIES = ["Reading", "Sports", "Music", "Art", "Coding", "Dance", "Travel", "Cooking", "Gaming", "Photography"];

const FORM_STEPS = [
  {
    id: "name",
    type: "text",
    ask: () => "Welcome to the Verbattle website. I am your live assistant.\n\nTo start the conversation, say hi or tap a greeting below. What is your full name?",
    placeholder: "e.g. Riya Sharma",
    validate: (v) => (v.trim().length < 2 ? "Please enter your full name." : null),
  },
  {
    id: "mobile",
    type: "text",
    ask: (d) => `Nice to meet you, ${d.name}. Please share your 10-digit mobile number.`,
    placeholder: "e.g. 9876543210",
    validate: (v) => (/^[6-9]\d{9}$/.test(v.trim()) ? null : "Enter a valid 10-digit Indian mobile number."),
  },
  {
    id: "email",
    type: "text",
    ask: () => "What is your email address? We will use it for registration details.",
    placeholder: "e.g. riya@gmail.com",
    validate: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? null : "Please enter a valid email address."),
  },
  {
    id: "school",
    type: "text",
    ask: () => "Which school or institution are you currently studying at?",
    placeholder: "e.g. National Public School, Bengaluru",
    validate: (v) => (v.trim().length < 3 ? "Please enter your school name." : null),
  },
  {
    id: "class",
    type: "chips",
    ask: () => "What class or grade are you in right now?",
    chips: ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
    validate: (v) => (v.trim().length < 1 ? "Please select your class." : null),
  },
  {
    id: "mentor",
    type: "text",
    ask: () => "Who is your mentor? This can be a teacher or a parent guiding you.",
    placeholder: "e.g. Mr. Arun Kumar",
    validate: (v) => (v.trim().length < 2 ? "Please enter your mentor's name." : null),
  },
  {
    id: "address",
    type: "text",
    ask: () => "What is your complete address? Please include your area, city, and 6-digit PIN code.",
    placeholder: "e.g. 12, MG Road, Bengaluru - 560001",
    validate: (v) => {
      if (v.trim().length < 10) return "Please enter your complete address.";
      if (!/\d{6}/.test(v)) return "Address must include a 6-digit PIN code.";
      return null;
    },
  },
  {
    id: "chess",
    type: "yesno",
    ask: () => "Do you enjoy playing chess?",
  },
  {
    id: "debate_exp",
    type: "yesno",
    ask: () => "Have you participated in any debate competition before?",
  },
  {
    id: "hobbies",
    type: "hobbies",
    ask: () => "Almost done. Select your hobbies from the options below. You can pick multiple.",
  },
];

const INTRO_STEP = {
  id: "greeting",
  type: "greeting",
  ask: () => "To start the conversation, choose a greeting below.",
};

function getIndianGreeting() {
  const hour = Number(
    new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "numeric",
      hour12: false,
    })
      .formatToParts(new Date())
      .find((part) => part.type === "hour")?.value ?? 0,
  );

  if (hour >= 5 && hour < 12) return "Good morning";
  if (hour >= 12 && hour < 17) return "Good afternoon";
  return "Good evening";
}

function getGreetingOptions() {
  return ["Hi", "Hello", getIndianGreeting()];
}

export default function VerbattleChat() {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState([]);
  const [data, setData] = useState({});
  const [step, setStep] = useState(0);
  const [inputVal, setInputVal] = useState("");
  const [error, setError] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [waitingInput, setWaitingInput] = useState(false);
  const [greetingOptions, setGreetingOptions] = useState(() => getGreetingOptions());
  const msgsRef = useRef(null);
  const inputRef = useRef(null);
  const chatSteps = [INTRO_STEP, ...FORM_STEPS];
  const currentStep = chatSteps[step];

  const scrollToBottom = () => {
    setTimeout(() => {
      if (msgsRef.current) msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
    }, 60);
  };

  const addBotMsg = (text, extra) => {
    setMessages((prev) => [...prev, { role: "bot", text, extra }]);
    scrollToBottom();
  };

  const addUserMsg = (text) => {
    setMessages((prev) => [...prev, { role: "user", text }]);
    scrollToBottom();
  };

  const askStep = (idx, updatedData) => {
    const s = chatSteps[idx];
    const q = typeof s.ask === "function" ? s.ask(updatedData || data) : s.ask;
    setIsTyping(true);
    setWaitingInput(false);
    setTimeout(() => {
      setIsTyping(false);
      addBotMsg(q, { stepIdx: idx });
      setWaitingInput(true);
      if (s.type === "text") setTimeout(() => inputRef.current?.focus(), 100);
    }, 700);
  };

  useEffect(() => {
    askStep(0, {});
  }, []);

  useEffect(() => {
    const updateGreeting = () => {
      const nextGreeting = getIndianGreeting();
      setGreetingOptions(["Hi", "Hello", nextGreeting]);
    };
    updateGreeting();
    const timer = window.setInterval(updateGreeting, 60000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isOpen && waitingInput && currentStep?.type === "text") {
      setTimeout(() => inputRef.current?.focus(), 120);
    }
  }, [currentStep?.type, isOpen, waitingInput]);

  const progress = Math.round((step / Math.max(chatSteps.length - 1, 1)) * 100);

  const goToNextStep = (next, updated) => {
    setStep(next);
    if (next >= chatSteps.length) {
      showSummary(updated);
    } else {
      askStep(next, updated);
    }
  };

  const handleSend = () => {
    if (isDone || !waitingInput) return;
    const s = chatSteps[step];
    if (s.type !== "text" && s.type !== "chips") return;
    const val = inputVal.trim();
    const err = s.validate ? s.validate(val) : null;
    if (err) {
      setError(err);
      return;
    }
    setError("");
    addUserMsg(val);
    const updated = { ...data, [s.id]: val };
    setData(updated);
    setInputVal("");
    goToNextStep(step + 1, updated);
  };

  const handleChip = (val) => {
    if (!waitingInput) return;
    setError("");
    addUserMsg(val);
    const s = chatSteps[step];
    const updated = { ...data, [s.id]: val };
    setData(updated);
    goToNextStep(step + 1, updated);
  };

  const handleYesNo = (val) => {
    if (!waitingInput) return;
    addUserMsg(val);
    const s = chatSteps[step];
    const updated = { ...data, [s.id]: val };
    setData(updated);
    goToNextStep(step + 1, updated);
  };

  const handleGreeting = (val) => {
    if (!waitingInput) return;
    addUserMsg(val);
    const updated = { ...data, greeting: val };
    setData(updated);
    goToNextStep(1, updated);
  };

  const toggleHobby = (h) => {
    setSelectedHobbies((prev) => (prev.includes(h) ? prev.filter((x) => x !== h) : [...prev, h]));
  };

  const confirmHobbies = () => {
    if (!waitingInput) return;
    const val = selectedHobbies.length > 0 ? selectedHobbies.join(", ") : "None selected";
    addUserMsg(val);
    const updated = { ...data, hobbies: val };
    setData(updated);
    goToNextStep(step + 1, updated);
  };

  const showSummary = (finalData) => {
    setIsTyping(true);
    setWaitingInput(false);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "You are all set. Here is your registration summary:", extra: { summary: finalData } },
      ]);
      scrollToBottom();
      setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          addBotMsg(`Thank you, ${finalData.name}. Our Verbattle team will contact you at ${finalData.email} soon.`);
          setIsDone(true);
        }, 900);
      }, 700);
    }, 900);
  };

  return (
    <div className={`vb-live-assistant${isOpen ? " is-open" : " is-closed"}`}>
      {isOpen ? (
        <div className="vb-root">
          <div className="vb-header">
            <div className="vb-header-avatar">
              <BotIcon />
            </div>
            <div className="vb-header-text">
              <h1>Verbattle Live Assistant</h1>
              <p><span className="vb-status-dot" /> Online · Ask your queries</p>
            </div>
            <button className="vb-close-btn" onClick={() => setIsOpen(false)} aria-label="Close live assistant">
              <CloseIcon />
            </button>
          </div>

          <div className="vb-progress-track">
            <div className="vb-progress-fill" style={{ width: `${progress}%` }} />
          </div>

          <div className="vb-messages" ref={msgsRef}>
            {messages.map((msg, i) => {
              if (msg.extra?.summary) {
                const d = msg.extra.summary;
                return (
                  <div key={i} className="vb-msg-row bot">
                    <div className="vb-avatar bot"><BotIcon /></div>
                    <div>
                      <div className="vb-bubble bot" style={{ marginBottom: 8 }}>{msg.text}</div>
                      <div className="vb-summary">
                        <div className="vb-summary-title">Registration Summary</div>
                        {[
                          ["Name", d.name], ["Mobile", d.mobile], ["Email", d.email],
                          ["School", d.school], ["Class", d.class], ["Mentor", d.mentor],
                          ["Address", d.address], ["Plays Chess", d.chess],
                          ["Debate Exp.", d.debate_exp], ["Hobbies", d.hobbies],
                        ].map(([label, val]) => (
                          <div className="vb-summary-row" key={label}>
                            <span className="vb-summary-label">{label}</span>
                            <span className="vb-summary-val">{val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              if (msg.role === "bot") {
                return (
                  <div key={i}>
                    <div className="vb-msg-row bot">
                      <div className="vb-avatar bot"><BotIcon /></div>
                      <div className="vb-bubble bot" style={{ whiteSpace: "pre-line" }}>{msg.text}</div>
                    </div>
                    {msg.extra?.stepIdx === step && waitingInput && (
                      <>
                        {currentStep?.type === "greeting" && (
                          <div className="vb-greeting-chips">
                            {greetingOptions.map((option) => (
                              <button
                                key={option}
                                className="vb-chip vb-greeting-chip"
                                onClick={() => handleGreeting(option)}
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        )}
                        {currentStep?.type === "chips" && (
                          <div className="vb-chips">
                            {currentStep.chips.map((c) => (
                              <button key={c} className="vb-chip" onClick={() => handleChip(c)}>{c}</button>
                            ))}
                          </div>
                        )}
                        {currentStep?.type === "yesno" && (
                          <div className="vb-yesno">
                            <button className="vb-yesno-btn yes" onClick={() => handleYesNo("Yes")}>Yes</button>
                            <button className="vb-yesno-btn no" onClick={() => handleYesNo("No")}>No</button>
                          </div>
                        )}
                        {currentStep?.type === "hobbies" && (
                          <>
                            <div className="vb-hobbies-grid">
                              {HOBBIES.map((h) => (
                                <button
                                  key={h}
                                  className={`vb-hobby-chip${selectedHobbies.includes(h) ? " selected" : ""}`}
                                  onClick={() => toggleHobby(h)}
                                >
                                  {h}
                                </button>
                              ))}
                            </div>
                            <div className="vb-hobby-confirm">
                              <button onClick={confirmHobbies}>Confirm selection</button>
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </div>
                );
              }

              return (
                <div key={i} className="vb-msg-row user">
                  <div className="vb-avatar user"><UserIcon /></div>
                  <div className="vb-bubble user">{msg.text}</div>
                </div>
              );
            })}

            {isTyping && (
              <div className="vb-msg-row bot">
                <div className="vb-avatar bot"><BotIcon /></div>
                <div className="vb-typing">
                  <div className="vb-typing-dot" />
                  <div className="vb-typing-dot" />
                  <div className="vb-typing-dot" />
                </div>
              </div>
            )}
          </div>

          <div className="vb-input-area">
            <div style={{ flex: 1 }}>
              <input
                ref={inputRef}
                className="vb-input"
                value={inputVal}
                onChange={(e) => {
                  setInputVal(e.target.value);
                  setError("");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSend();
                }}
                placeholder={
                  isDone
                    ? "Registration complete!"
                    : currentStep?.type === "text"
                      ? currentStep.placeholder || "Type your answer..."
                      : "Use the options above..."
                }
                disabled={isDone || currentStep?.type !== "text"}
              />
              {error && <div className="vb-err">{error}</div>}
            </div>
            <button
              className="vb-send-btn"
              onClick={handleSend}
              disabled={isDone || currentStep?.type !== "text"}
              aria-label="Send"
            >
              <SendIcon />
            </button>
          </div>
        </div>
      ) : (
        <button className="vb-launcher" onClick={() => setIsOpen(true)} aria-label="Open live assistant">
          <BotIcon />
          <span className="vb-launcher-ping" />
        </button>
      )}
    </div>
  );
}
