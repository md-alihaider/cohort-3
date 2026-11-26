import { ChatGroq } from "@langchain/groq";
import dotenv from "dotenv";
import rl from "readline/promises";
import { tool, createAgent } from "langchain";
import * as z from "zod";
import { StateGraph, START, END } from "@langchain/langgraph";

dotenv.config();

const events = [];
const createEventTool = tool(
  //first fun
  async function ({ date, title, description }) {
    console.log("Creating event:", { date, title, description });
    events.push({
      date,
      title,
      description,
    });
    return "Event Created.";
  },

  // then fun detail
  {
    name: "createEvent",
    description: "Create a new event with a date, title, and description",
    schema: z.object({
      date: z.string(),
      title: z.string(),
      description: z.string(),
    }),
  },
);

const getEventTool = tool(
  async function ({}) {
    console.log("Retrieving Events: ", events);
    return events;
  },
  {
    name: "getEvents",
    description: "Retrieve all Events",
    schema: z.object({}),
  },
);

const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const model = new ChatGroq({
  model: "openai/gpt-oss-120b",
  apiKey: process.env.GROQ_API_KEY,
});

//-------------------LLM Node--------------------------
const LLMNode = async (state) => {
  console.log("LLMNode state: ", state);

  return {
    messages: [
      ...state.messages,
      {
        role: "assistant",
        content: "Hello, User!",
      },
    ],
  };
};

// first need to tell the state of data to make graph
const graph = new StateGraph(
  z.object({
    messages: z.array(z.any()),
  }),
)
  .addNode("LLMNode", LLMNode)
  .addEdge(START, "LLMNode")
  .addEdge("LLMNode", END)
  .compile();

const graphResult = await graph.invoke({
  messages: [
    {
      role: "user",
      content: "Hell, World!",
    },
  ],
});

console.log("Graph result: ", graphResult);

// ai does not call tool it request and createAgent fun of langchain help with that it call tool and give it response to ai

// const agent = createAgent({
//   model,
//   tools: [createEventTool, getEventTool],
// });

// while (true) {
//   const userInput = await readline.question("Enter your input: ");

//   const stream = await agent.stream(
//     {
//       messages: [
//         {
//           role: "user",
//           content: userInput,
//         },
//       ],
//     },
//     { streamMode: "messages" },
//   );

//   for await (const [chunk] of stream) {
//     process.stdout.write(chunk.content);
//   }

//   process.stdout.write("\n");
// }

// const messages = [];

// while (true) {
//   const userInput = await readline.question("Enter your input: ");
//   messages.push({ role: "user", content: userInput });
//   const stream = await agent.stream({ messages }, { streamMode: "messages" });
//   let aiMessages = "";
//   for await (const [chunk, metadata] of stream) {
//     aiMessages += chunk.content;
//     process.stdout.write(chunk.content);
//   }
//   messages.push({ role: "assistant", content: aiMessages });
//   process.stdout.write("\n");
// }

// const userInput = await readline.question("Enter your input: ");
// const response = await agent.invoke({
//   messages: [{ role: "user", content: userInput }],
// });
// console.log(response);
