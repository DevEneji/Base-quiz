const express = require("express");
const router = express.Router();

// Define the /api/questions endpoint
router.get("/questions", (req, res) => {
  const questions = [
    {
      id: 1,
      question: "What is Base?",
      options: ["A Layer 2 Ethereum network", "A Game"],
      answer: "A Layer 2 Ethereum network",
    },
    {
      id: 2,
      question: "What is Base primarily designed for?",
      options: [
        "Centralized finance solutions",
        "Decentralized applications (dApps)",
        "Cryptocurrency trading only",
        "Traditional banking services",
      ],
      answer: "Decentralized applications (dApps)",
    },
    {
      id: 3,
      question:
        "Which technology does Base utilize to enhance its scalability and efficiency?",
      options: [
        "Proof of Work",
        "Optimistic Rollups",
        "Proof of Stake",
        "Sidechains",
      ],
      answer: "Optimistic Rollups",
    },
    {
      id: 4,
      question: "What is a key feature of Base that benefits developers?",
      options: [
        "High transaction fees",
        "Limited interoperability",
        "Full EVM compatibility at low costs",
        "Proprietary token requirements",
      ],
      answer: "Full EVM compatibility at low costs",
    },
    {
      id: 5,
      question: "How does Base ensure security for its transactions?",
      options: [
        "By using a centralized database",
        "By relying solely on user verification",
        "By leveraging the underlying security of Ethereum",
        "By using a different blockchain protocol",
      ],
      answer: "By leveraging the underlying security of Ethereum",
    },
    {
      id: 6,
      question: "What is the primary goal of Base as stated by its developers?",
      options: [
        "To replace Ethereum entirely",
        "To usher in the next million builders and a billion users on-chain",
        "To create a new cryptocurrency token",
        "To limit access to decentralized finance",
      ],
      answer:
        "To usher in the next million builders and a billion users on-chain",
    },
    {
      id: 7,
      question: "When was the mainnet for Base opened to all users?",
      options: [
        "July 1, 2023",
        "August 9, 2023",
        "September 15, 2023",
        "December 12, 2023",
      ],
      answer: "August 9, 2023",
    },
    {
      id: 8,
      question: "Which company developed Base?",
      options: ["Binance", "Coinbase", "Kraken", "Bitfinex"],
      answer: "Coinbase",
    },
  ];
  res.json(questions);
});

module.exports = router;
