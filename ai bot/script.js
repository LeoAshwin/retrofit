const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userResponses = {};
let currentStep = 0;

const steps = [
    { question: "What is your gender?", key: "gender" },
    { question: "How old are you?", key: "age" },
    { question: "Please tell me about your medical history.", key: "medicalHistory" },
    { question: "What foods do you dislike?", key: "dislikedFoods" },
];

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    chatLi.innerHTML = `<p>${message}</p>`;
    return chatLi;
};

const sendToGeminiAI = async (userData) => {
    const API_KEY =  "AIzaSyBsWazU0SPSoiViFSshuDdilt-clpmpH5w"; // Replace with your actual API key
    const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: [
                {
                    role: "user",
                    parts: [{ text: `Create a customized diet plan for a ${userData.age}-year-old ${userData.gender}. They have a medical history of ${userData.medicalHistory} and dislike ${userData.dislikedFoods}.` }]
                }
            ],
        }),
    };

    try {
        const response = await fetch(API_URL, requestOptions);
        const data = await response.json();
        if (!response.ok) throw new Error(data.error.message);
        return data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, '$1');
    } catch (error) {
        console.error("Error:", error);
        return "Sorry, I couldn't generate a diet plan right now.";
    }
};

const handleChat = async () => {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    // Clear the input
    chatInput.value = "";

    // Append user's message
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    // Store the response
    userResponses[steps[currentStep].key] = userMessage;
    currentStep++;

    // Check if there are more questions
    if (currentStep < steps.length) {
        setTimeout(() => {
            chatbox.appendChild(createChatLi(steps[currentStep].question, "incoming"));
            chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 600);
    } else {
        // All questions have been answered, now generate the diet plan
        setTimeout(async () => {
            const dietPlan = await sendToGeminiAI(userResponses);
            chatbox.appendChild(createChatLi("Thank you for the information! Here is your customized diet plan:\n\n" + dietPlan, "incoming"));
            chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 600);
    }
};

// Event Listeners
sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));

// Adjust textarea height
chatInput.addEventListener("input", () => {
    chatInput.style.height = 'auto'; // Reset height
    chatInput.style.height = `${chatInput.scrollHeight}px`; // Set to new height
});
