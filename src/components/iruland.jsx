import React, { useState, useCallback, useMemo } from 'react';

// The API key is provided by the canvas environment.
const apiKey = "";
const apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent";

// --- API Utility Function with Exponential Backoff ---
/**
 * Calls the Gemini API with retry logic.
 */
const callGeminiAPI = async (payload, retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(`${apiUrl}?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      const candidate = result.candidates?.[0];

      if (candidate && candidate.content?.parts?.[0]?.text) {
        return candidate.content.parts[0].text;
      }
      return null;
    } catch (error) {
      console.error(`Attempt ${i + 1} failed:`, error);
      if (i < retries - 1) {
        // Exponential backoff: 1s, 2s, 4s delay
        const delay = Math.pow(2, i) * 1000;
        await new Promise(resolve => setTimeout(resolve, delay));
      } else {
        throw new Error("Failed to call Gemini API after multiple retries.");
      }
    }
  }
};

// --- Structured Quiz Schema for Gemini API ---
const quizSchema = {
  type: "ARRAY",
  items: {
    type: "OBJECT",
    properties: {
      question: { type: "STRING" },
      options: {
        type: "ARRAY",
        items: { type: "STRING" },
      },
      correctAnswer: { type: "STRING" },
    },
    propertyOrdering: ["question", "options", "correctAnswer"],
  },
};

// --- Placeholder Component for Media ---
/**
 * A responsive component to reserve space for images or videos.
 */
const MediaPlaceholder = ({ type, title, description, imageUrl, videoUrl }) => (
  <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
    {/* Media Box */}
    <div className="h-48 bg-gray-700 flex items-center justify-center rounded-lg mb-4">
      {type === 'photo' && (
        <svg className="w-12 h-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 16m-2-2v4m-2-4h4m-4 0v4m-2-4v4m-4-4h4" />
        </svg>
      )}
      {type === 'video' && (
        <svg className="w-12 h-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.55 2.275a.5.5 0 010 .89L15 16V10zm-3 8v-2m-4 2v-2m4-8V6m-4 0v2m4 4h2m-4 0h-2m8-4h-2m-4 0h-2m-4 4h2m0-4H6m4 0h-2m4 0h-2m4 4h2m-4-4h-2m-4-4h-2m4 0h2m-4-4v-2m4 0v-2" />
        </svg>
      )}
    </div>
    {/* Media Details */}
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
    {imageUrl && <p className="mt-2 text-xs text-blue-400 truncate">Placeholder URL: {imageUrl}</p>}
    {videoUrl && <p className="mt-2 text-xs text-blue-400 truncate">Placeholder URL: {videoUrl}</p>}
  </div>
);

// --- Modal Component for API Output ---
const ResultModal = ({ title, content, onClose, isQuiz, quizData }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (qIndex, option) => {
    if (!showResults) {
      setSelectedAnswers(prev => ({ ...prev, [qIndex]: option }));
    }
  };

  const scoreQuiz = () => {
    let score = 0;
    quizData.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="p-6 border-b border-gray-700 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition duration-200 text-3xl font-light leading-none">
            &times;
          </button>
        </div>

        <div className="p-6">
          {isQuiz ? (
            <div className="space-y-6">
              {quizData.map((q, qIndex) => (
                <div key={qIndex} className="bg-gray-700 p-4 rounded-lg shadow-md">
                  <p className="text-lg font-semibold text-blue-300 mb-3">{qIndex + 1}. {q.question}</p>
                  <div className="space-y-2">
                    {q.options.map((option, oIndex) => {
                      const isSelected = selectedAnswers[qIndex] === option;
                      const isCorrect = showResults && option === q.correctAnswer;
                      const isWrong = showResults && isSelected && !isCorrect;

                      let bgColor = 'bg-gray-600 hover:bg-gray-500';
                      if (showResults) {
                        if (isCorrect) bgColor = 'bg-green-700';
                        else if (isWrong) bgColor = 'bg-red-700';
                        else if (isSelected) bgColor = 'bg-gray-600'; // Selected but not correct
                      } else if (isSelected) {
                        bgColor = 'bg-blue-600';
                      }

                      return (
                        <button
                          key={oIndex}
                          onClick={() => handleSelect(qIndex, option)}
                          className={`w-full text-left p-3 rounded-md text-white transition duration-200 ${bgColor}`}
                          disabled={showResults}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                  {showResults && (
                    <p className="mt-2 text-sm text-green-300">
                      {isCorrect ? 'Correct!' : `Correct Answer: ${q.correctAnswer}`}
                    </p>
                  )}
                </div>
              ))}
              <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                {!showResults ? (
                  <button
                    onClick={() => setShowResults(true)}
                    disabled={Object.keys(selectedAnswers).length < quizData.length}
                    className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 disabled:bg-gray-600 transition duration-200"
                  >
                    Submit Quiz
                  </button>
                ) : (
                  <div className="text-xl font-bold text-white">
                    Your Score: <span className="text-yellow-400">{scoreQuiz()} / {quizData.length}</span>
                  </div>
                )}
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <p className="whitespace-pre-wrap text-gray-300">{content}</p>
          )}
        </div>
      </div>
    </div>
  );
};


// --- Content Section Component ---
const ContentSection = ({ title, children, mediaTitle, mediaDescription, mediaType, mediaUrl, onDefineTerm }) => {
  const terms = useMemo(() => {
    // Basic extraction of bolded terms in the text content
    const text = React.Children.toArray(children).map(child =>
      typeof child === 'string' ? child : child.props.children || ''
    ).join(' ');
    const matches = [...text.matchAll(/\*\*(.*?)\*\*/g)].map(match => match[1]).filter((v, i, a) => a.indexOf(v) === i);
    return matches;
  }, [children]);

  return (
    <section className="py-10 border-b border-gray-700 last:border-b-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-400 border-l-4 border-blue-400 pl-4 mb-4 sm:mb-0">
            {title}
          </h2>
          {terms.length > 0 && (
            <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition duration-200 shadow-md">
                <span>✨ Term Explorer</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-gray-700 rounded-lg shadow-xl z-20 hidden group-hover:block">
                {terms.map(term => (
                  <button
                    key={term}
                    onClick={() => onDefineTerm(term)}
                    className="block w-full text-left px-4 py-2 text-gray-200 hover:bg-gray-600 transition duration-150 rounded-md"
                  >
                    Define: "{term}"
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Media Column */}
          {mediaTitle && (
            <div className="lg:col-span-1 order-1 lg:order-none">
              <MediaPlaceholder
                type={mediaType}
                title={mediaTitle}
                description={mediaDescription}
                imageUrl={mediaType === 'photo' ? mediaUrl : null}
                videoUrl={mediaType === 'video' ? mediaUrl : null}
              />
            </div>
          )}
          {/* Text Column */}
          <div className={`text-gray-300 space-y-6 text-lg leading-relaxed ${mediaTitle ? 'lg:col-span-2 order-2 lg:order-none' : 'lg:col-span-3'}`}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};


// --- Main Application Component ---
const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiOutput, setApiOutput] = useState(null);
  const [quizData, setQuizData] = useState(null);
  const [activeModal, setActiveModal] = useState(null); // 'glossary', 'quiz', null

  // Collect all text for the Quiz Generator feature
  const fullText = `
    Iru Kingdom: Center of Eti-Osa. The Kingdom of Iru is one of the earliest settlements in the Eti-Osa area of Lagos. Presently located at modern Victoria Island as the epicenter of its traditional government, Iru Kingdom is bounded in the south by the Atlantic and the popular Five Cowries Creek estuary, where it shares boundary with Onisiwo at Itomaro. To the west, it is bounded by Ikoyi with a stretch of land covering Onikan, Odo Elegushi, Igboshoju-Oloja (Oyinkan Abayomi Drive) and Ilado creek, among others. To the northeast, Iru land shares boundaries with Ikateland at Okun Alaguntan.

    The First Oniru and Awori Origins. Tradition relating to the migration to this Awori settlement indicates that the first Oniru, Onigefon, first settled at the Marina, where the present Christ Church Cathedral, Lagos is located. He was noted for his fishing adventure which enabled him take control over a stretch of land that included present-day Tafawa Balewa square, Yoruba Tennis and Island clubs, and the Independence building. The Oniru established suzerainty over about 13 villages. The antiquity of Iru as one of the settlements founded by one of those later known as Idejo would seem to belong to Barker's "remote past," a period that probably predated the establishment of Benin's influence over Lagos. Iru land, like many other Awori settlements, could not be established earlier than the sixteenth century.

    The Benin Influence and Idejo Chiefs. The invasion of Lagos by the Benin became a major event that jolted the Awori indigenous elements together. These family heads fell under the suzerainty of the emergent kingdom established by the Benin in Lagos, later becoming recognized as the Idejo chiefs. This context may explain why the Oniru was considered a chief under the Kingdom of Lagos, but also referred to as Oba Imahin. The Idejo chiefs, including Oluwa (who is also an Olu-iwa - king of Iwa), and Onisiwo, all came under the Kingdom of Eko, which remained their suzerain until they transformed into kingdoms over time since 1993.

    The Mahin Identity: Origin of Oba Imahin. It is necessary to discuss the reference to the Oniru as Oba Imahin to establish the family's origin. Mahin is an Ilaje kingdom situated in the present Ondo State of Nigeria, as well as in the Benin Republic, implying two major Mahin settlements. The people of Mahin, being a coastal settlement, were renowned for their main occupation: fishing (both lagoon and deep seafishing). The Mahin men were noted for deep sea fishing, while the women and young ones practiced lagoon fishing. These migrating fishermen established settlements, intermarried, and were integrated into the local politics and culture of their host communities, with their activities extending as far as Porto Novo.

    Integration, Conquest, and Legacy. Mahin settlements in Lagos are widespread, found in areas like Epe, Ipe, Modu near Lekki, Ijaiye, Moba, Irewe, and Apa. The Mahin were noted for their major occupation of fishing and farming. The earliest Idejo prior to Benin's conquest were Akinsemoyin, Elegushi, Ojomu, and Ojora; the Oniru was not among this group. Following the Benin conquest, traditional administration incorporated some of the earliest communities under the authority of the emergent kingdom. The term "Oba Imahin" is suggested to be a corrupt pronunciation of Oba Ilaje/Mahin dialect of Udun, linking the Oniru to an early Mahin affiliation. The Mahin connection, particularly through fishing resources and possible military support during the Benin invasion, remains a significant part of the historical narrative.
  `;

  const handleDefineTerm = useCallback(async (term) => {
    setIsLoading(true);
    setActiveModal('glossary');
    setApiOutput(`Generating definition for "${term}"...`);

    const systemPrompt = "Act as a concise historical tutor. Based *only* on the provided text about the Iru Kingdom, define the given term in one short, clear paragraph, focusing on its relevance to the Iru Kingdom's history.";
    const userQuery = `Define the term: "${term}". Historical Text provided: \n---\n${fullText}`;

    const payload = {
      contents: [{ parts: [{ text: userQuery }] }],
      systemInstruction: { parts: [{ text: systemPrompt }] },
    };

    try {
      const responseText = await callGeminiAPI(payload);
      setApiOutput(responseText || "Could not find a definition for that term in the text.");
    } catch (e) {
      console.error(e);
      setApiOutput("Error fetching definition. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [fullText]);

  const handleGenerateQuiz = useCallback(async () => {
    setIsLoading(true);
    setActiveModal('quiz');
    setQuizData(null);
    setApiOutput("Generating 3 multiple-choice quiz questions...");

    const userQuery = `Generate a 3-question multiple-choice quiz based on the following historical text about the Iru Kingdom. Ensure each question has exactly 4 options and one correct answer. Text: \n---\n${fullText}`;

    const payload = {
      contents: [{ parts: [{ text: userQuery }] }],
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: quizSchema
      }
    };

    try {
      const responseText = await callGeminiAPI(payload);
      const parsedJson = JSON.parse(responseText);
      setQuizData(parsedJson);
    } catch (e) {
      console.error(e);
      setApiOutput("Error generating quiz. The API returned an invalid format. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [fullText]);

  const closeModal = () => {
    setActiveModal(null);
    setApiOutput(null);
    setQuizData(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 font-sans text-gray-100">
      {/* Header */}
      <header className="bg-gray-800 shadow-xl sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-wider text-center">
            The History of Iru Kingdom
          </h1>
          <p className="text-center text-blue-400 mt-2 text-lg italic">
            Tradition of Migration, Sovereignty, and Cultural Heritage
          </p>
        </div>
      </header>

      <main className="pb-16">
        {/* Section 1: Overview and Geography */}
        <ContentSection
          title="I. Iru Kingdom: Center of Eti-Osa"
          mediaTitle="Lagos Coastal View"
          mediaDescription="A panoramic view of the Five Cowries Creek or the Atlantic border of Iru, showcasing the geography."
          mediaType="photo"
          mediaUrl="https://placehold.co/800x450/1e293b/a8a29e?text=Coastal+View+Photo"
          onDefineTerm={handleDefineTerm}
        >
          <p>
            The **Kingdom of Iru** is one of the earliest settlements in the Eti-Osa area of Lagos. Presently located at modern **Victoria Island** as the epicenter of its traditional government, Iru Kingdom is bounded in the south by the Atlantic and the popular **Five Cowries Creek estuary**, where it shares boundary with Onisiwo at Itomaro.
          </p>
          <p>
            To the west, it is bounded by Ikoyi with a stretch of land covering Onikan, Odo Elegushi, Igboshoju-Oloja (Oyinkan Abayomi Drive) and Ilado creek, among others. To the northeast, Iru land shares boundaries with **Ikateland** at Okun Alaguntan.
          </p>
        </ContentSection>

        {/* Section 2: Early Settlement and Founding Oba */}
        <ContentSection
          title="II. The First Oniru and Awori Origins"
          mediaTitle="Historical Marina Sites"
          mediaDescription="Historical photos or video footage of the Marina area, Christ Church Cathedral, or Tafawa Balewa Square mentioned in the text."
          mediaType="video"
          mediaUrl="https://placehold.co/800x450/1e293b/a8a29e?text=Historical+Site+Video"
          onDefineTerm={handleDefineTerm}
        >
          <p>
            Tradition relating to the migration to this **Awori** settlement indicates that the first **Oniru, Onigefon**, first settled at the **Marina**, where the present Christ Church Cathedral, Lagos is located. He was noted for his fishing adventure which enabled him take control over a stretch of land that included present-day **Tafawa Balewa square**, Yoruba Tennis and Island clubs, and the Independence building.
          </p>
          <p>
            The Oniru established suzerainty over about 13 villages. The antiquity of Iru as one of the settlements founded by one of those later known as **Idejo** would seem to belong to Barker's "remote past," a period that probably predated the establishment of Benin's influence over Lagos. Iru land, like many other Awori settlements, could not be established earlier than the sixteenth century.
          </p>
        </ContentSection>

        {/* Section 3: The Benin Influence and Idejo Chiefs */}
        <ContentSection
          title="III. Benin's Conquest and the Idejo Chiefs"
          mediaTitle="Diagram: Structure of Eko Kingdom"
          mediaDescription="A visual chart explaining the hierarchy of the Idejo chiefs and their relationship with the Lagos Monarch (Oba) and Benin suzerainty."
          mediaType="photo"
          mediaUrl="https://placehold.co/800x450/1e293b/a8a29e?text=Idejo+Hierarchy+Chart"
          onDefineTerm={handleDefineTerm}
        >
          <p>
            The invasion of Lagos by the **Benin** became a major event that jolted the Awori indigenous elements together. These family heads fell under the suzerainty of the emergent kingdom established by the Benin in Lagos, later becoming recognized as the **Idejo chiefs**.
          </p>
          <p>
            This context may explain why the Oniru was considered a chief under the Kingdom of Lagos, but also referred to as **Oba Imahin**. The Idejo chiefs, including **Oluwa** (who is also an Olu-iwa - king of Iwa), and **Onisiwo**, all came under the Kingdom of **Eko**, which remained their suzerain until they transformed into kingdoms over time since 1993.
          </p>
        </ContentSection>

        {/* Section 4: The Mahin (Ilaje) Connection */}
        <ContentSection
          title="IV. The Mahin Identity: Origin of Oba Imahin"
          mediaTitle="Mahin Region Map"
          mediaDescription="A map highlighting the Mahin (Ilaje) kingdom in Ondo State, Nigeria, and its geographical connection to Lagos."
          mediaType="photo"
          mediaUrl="https://placehold.co/800x450/1e293b/a8a29e?text=Regional+Map+Photo"
          onDefineTerm={handleDefineTerm}
        >
          <p>
            It is necessary to discuss the reference to the Oniru as **Oba Imahin** to establish the family's origin. **Mahin** is an **Ilaje** kingdom situated in the present **Ondo State** of Nigeria, as well as in the Benin Republic, implying two major Mahin settlements.
          </p>
          <p>
            The people of Mahin, being a coastal settlement, were renowned for their main occupation: **fishing** (both lagoon and deep seafishing). The Mahin men were noted for deep sea fishing, while the women and young ones practiced lagoon fishing.
          </p>
          <p>
            These migrating fishermen established settlements, intermarried, and were integrated into the local politics and culture of their host communities, with their activities extending as far as Porto Novo.
          </p>
        </ContentSection>

        {/* Section 5: Mahin Integration and Later Developments */}
        <ContentSection
          title="V. Integration, Conquest, and Legacy"
          mediaTitle="Footage of Epe or Lekki Pockets"
          mediaDescription="Aerial footage or photos of Mahin settlement pockets in areas like Epe, Modu near Lekki, or Ijaiye."
          mediaType="video"
          mediaUrl="https://placehold.co/800x450/1e293b/a8a29e?text=Settlement+Footage+Video"
          onDefineTerm={handleDefineTerm}
        >
          <p>
            **Mahin** settlements in Lagos are widespread, found in areas like **Epe**, **Ipe**, **Modu** near Lekki, **Ijaiye**, **Moba**, **Irewe**, and **Apa**. The Mahin were noted for their major occupation of fishing and farming.
          </p>
          <p>
            The earliest Idejo prior to Benin's conquest were **Akinsemoyin, Elegushi, Ojomu, and Ojora**; the Oniru was not among this group. Following the Benin conquest, traditional administration incorporated some of the earliest communities under the authority of the emergent kingdom.
          </p>
          <p>
            The term **"Oba Imahin"** is suggested to be a corrupt pronunciation of **Oba Ilaje/Mahin** dialect of **Udun**, linking the Oniru to an early Mahin affiliation. The Mahin connection, particularly through fishing resources and possible military support during the Benin invasion, remains a significant part of the historical narrative.
          </p>
        </ContentSection>

        {/* Quiz Generator Section */}
        <section className="py-10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Test Your Knowledge
            </h2>
            <p className="text-gray-400 mb-6">
              Use the Gemini API to generate a multiple-choice quiz based on the full text above.
            </p>
            <button
              onClick={handleGenerateQuiz}
              disabled={isLoading}
              className="px-8 py-3 bg-green-500 text-white font-extrabold rounded-full shadow-lg hover:bg-green-600 transition duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed transform hover:scale-105"
            >
              {isLoading && activeModal === 'quiz' ? 'Generating Quiz...' : '✨ Generate Quiz'}
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 mt-10 py-6">
          <div className="container mx-auto px-4 text-center text-gray-500">
            <p className="text-sm">&copy; {new Date().getFullYear()} Iru Kingdom Historical Review. All Rights Reserved.</p>
            <p className="text-xs mt-1">Content compiled from historical documentation on the Iru Kingdom and Mahin settlements.</p>
          </div>
        </footer>
      </main>

      {/* API Result Modal */}
      {(activeModal === 'glossary' || (activeModal === 'quiz' && (apiOutput || quizData))) && (
        <ResultModal
          title={activeModal === 'glossary' ? 'Term Definition' : 'Iru Kingdom Quiz'}
          content={apiOutput}
          onClose={closeModal}
          isQuiz={activeModal === 'quiz'}
          quizData={quizData}
        />
      )}

      {/* Global Loading Spinner */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60]">
          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-xl">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-t-4 border-t-blue-500 border-gray-600 mb-3"></div>
            <p className="text-white text-lg">Loading...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
