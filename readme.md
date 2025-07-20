# ELIZA

> A Digital Psychotherapist from the 1960s

[![fount character](https://steve02081504.github.io/fount/badges/fount_character.svg)](https://github.com/topics/fount-character)

![repo preview](https://repository-images.githubusercontent.com/951040902/30e2c4e9-49e1-444f-99fb-eccfe939376f)

Eliza is a program that simulates a Rogerian psychotherapist, engaging in conversation by using pattern matching and reflection techniques. This digital companion offers a glimpse into the early days of natural language processing and artificial intelligence.

Original code and concept from: [ELIZA on Wikipedia](https://en.wikipedia.org/wiki/ELIZA)

This repo has rebuilt the original code to modern JavaScript with some data and function extensions.

## Introduction to ELIZA

ELIZA is a pioneering natural language processing computer program created by Joseph Weizenbaum at MIT from 1964 to 1967.  Designed as an experiment to explore human-machine communication, ELIZA operates using a clever pattern-matching and substitution methodology. This approach gives users the *illusion* of understanding, even though the program itself doesn't truly comprehend the meaning of the conversation.

The most famous ELIZA script, **DOCTOR**, simulates a psychotherapist practicing Rogerian psychotherapy. It responds to user inputs with non-directional questions and reflections, often mirroring back the user's own statements. This script made ELIZA one of the earliest examples of a chatbot and a program capable of attempting the Turing Test.

## Project History

ELIZA was developed during a time of significant advancement in computing and artificial intelligence research.  Here's a glimpse into its historical context:

* **Development Period:** 1964 - 1967 at MIT (Massachusetts Institute of Technology).
* **Creator:** Joseph Weizenbaum, a professor of computer science.
* **Programming Language:** Originally written in MAD-SLIP, a list-processing language. The pattern-matching rules were defined in separate "scripts" using a Lisp-like representation.
* **Purpose:** To explore the possibilities of communication between humans and machines and to demonstrate the superficiality of such interactions. Weizenbaum aimed to show that computers could *simulate* understanding without possessing genuine comprehension.
* **DOCTOR Script:**  The most renowned script, DOCTOR, simulated a Rogerian psychotherapist. This choice was deliberate, as it allowed the program to function without needing a vast database of real-world knowledge. By reflecting user statements back, ELIZA could maintain a seemingly coherent conversation.
* **Unexpected Reactions:**  Weizenbaum was surprised by the strong emotional responses ELIZA evoked in some users, including his own secretary, who began to treat the program as a confidante. This phenomenon, known as the "ELIZA effect," highlighted the tendency of humans to anthropomorphize even simple computer programs.
* **Legacy:** Despite its simplicity by today's standards, ELIZA is a landmark achievement in the history of AI and natural language processing. It paved the way for modern chatbots and sparked important discussions about the nature of human-computer interaction and the limits of artificial intelligence.

## About the Author: Joseph Weizenbaum (1923-2008)

Joseph Weizenbaum was a German-American computer scientist and professor at MIT. He is best known for creating ELIZA, but his work extended far beyond this early chatbot.  Driven by a deep concern for the social and ethical implications of technology, Weizenbaum became a prominent critic of artificial intelligence, particularly its potential to dehumanize human experience.

* **Motivations for ELIZA:** Weizenbaum intended ELIZA as a demonstration of the superficiality of human-computer communication. He was interested in exploring the boundaries of what computers could simulate and what constituted genuine understanding.
* **Shocked by User Reactions:**  Weizenbaum was deeply disturbed by the emotional attachments some users formed with ELIZA, realizing that people were projecting human-like qualities onto a program that was fundamentally based on simple pattern matching.
* **"Computer Power and Human Reason":**  This experience motivated him to write his influential book, "Computer Power and Human Reason: From Judgment to Calculation" (1976). In this book, he cautioned against overestimating the capabilities of computers and argued that certain aspects of human experience, such as empathy and wisdom, should remain firmly in the human domain.
* **Critical Perspective:** Weizenbaum remained a critical voice in the field of computer science, consistently emphasizing the importance of human judgment, ethics, and social responsibility in the development and deployment of technology.

## Chat with Eliza Online

Visit <https://steve02081504.github.io/ELIZA/> to experience a web-based version of ELIZA directly in your browser.  Engage in a conversation with this historic chatbot and reflect on the early days of AI interaction.

![图片](https://github.com/user-attachments/assets/b160b3cc-30f1-4b6b-94a1-4d53647bbfe6)
![图片](https://github.com/user-attachments/assets/44148ed5-d1c0-4640-8d78-4a629eff74aa)

## fount Support

You can easily import Eliza into [fount](https://github.com/steve02081504/fount). Enjoy enhanced features without any complex configurations or AI source setups:

* **Edit Messages:** Correct typos or refine your interactions.
* **Persistent Chat History:**  Your conversations are saved indefinitely.
* **Improved User Interface:** Experience Eliza within fount's modern and customizable UI.
* **Automatic Updates:** Stay up-to-date with any improvements to the Eliza integration.
* **Group Support:** Engage in Eliza conversations with other cute characters.

![图片](https://github.com/user-attachments/assets/2aac75a4-4114-46d8-9986-22eb6b78d5f0)
![图片](https://github.com/user-attachments/assets/89472df8-6795-4eda-9b91-9a080c9dcabb)

[Quick install](https://steve02081504.github.io/fount/protocol?url=fount://run/shells/install/install;https://github.com/steve02081504/ELIZA)

## ELIZA in Your Terminal

For a classic command-line experience, you can interact with ELIZA directly in your terminal:

1. **Run the Script:** Execute the `run.bat` (Windows) or `run.sh` (Linux/macOS) script located in the repository's root directory.  This will launch ELIZA in your terminal.

2. **Add to PATH (Optional):** For convenient access, add the `path` folder (within the repository) to your system's `PATH` environment variable. This allows you to run ELIZA from any directory by simply typing `eliza` in your terminal.

![图片](https://github.com/user-attachments/assets/5eea9a99-2821-49ce-8ac1-a09610e9adac)

## Getting Started with ELIZA in JavaScript

Integrating ELIZA into your JavaScript projects is straightforward.  Follow these simple steps to start simulating conversations:

1. **Import `ElizaBot` and `ElizaData`:** Begin by importing the `ElizaBot` class and the default `ElizaData` which contains the core rules and responses for Eliza. Ensure that `elizadata.mjs` and `elizabot.mjs` are correctly placed in your project or adjust the import paths accordingly.

    ```javascript
    import { ElizaBot } from './elizabot.mjs'; // Adjust path if necessary
    import { ElizaData } from './elizadata.mjs'; // Optional, Adjust path if necessary
    ```

2. **Create an ElizaBot Instance:** Instantiate the `ElizaBot` class to create your Eliza bot. You can optionally pass in your own data or configuration settings.

    ```javascript
    const eliza = new ElizaBot(); // Uses default ElizaData and configurations
    // or
    const elizaWithCustomData = new ElizaBot(customData, { debug: true, memorySize: 30 });
    ```

    The constructor accepts two optional arguments:
    * `initialData`:  Allows you to provide a custom data object with different rules, keywords, synonyms, and responses, overriding the default `ElizaData`.
    * `config`: An object to configure Eliza's behavior. Available options include:
        * `memorySize`:  Sets the size of Eliza's memory, determining how many past responses are stored (default: 20).
        * `debug`: Enables debug mode for console logging of rule processing (default: `false`).
        * `capitalizeFirstLetter`:  Determines if Eliza should capitalize the first letter of her responses (default: `true`).
        * `noRandom`:  When set to `true`, Eliza will always pick the first available response, useful for testing or predictable outputs (default: `false`).

3. **Engage in Conversation:** Use the `transform(text)` method to send user input to Eliza and receive her response.

    ```javascript
    let userInput = "People are all alike.";
    let elizaResponse = eliza.transform(userInput);
    console.log("User:", userInput);
    console.log("Eliza:", elizaResponse);

    userInput = "In what way?";
    elizaResponse = eliza.transform(userInput);
    console.log("User:", userInput);
    console.log("Eliza:", elizaResponse);
    ```

4. **Additional Methods:**  The `ElizaBot` class provides other useful methods for managing Eliza's state and behavior:
    * `reset()`:  Resets Eliza to her initial state, clearing memory and last choice history.
    * `getState()`: Returns the current state of Eliza, including memory, last choices, and quit status.
    * `setState(state)`:  Allows you to restore Eliza to a previous state using a state object obtained from `getState()`.
    * `getConfig(key)` / `setConfig(key, value)`:  Get or set configuration options dynamically.
    * `appendData(newData)`:  Extend Eliza's knowledge by adding new synonyms, keywords, rules, responses, and transforms.
    * `greet(name)`:  Get a greeting message from Eliza, optionally personalized with a name.

By following these steps, you can easily integrate and begin using the ELIZA chatbot in your JavaScript applications, bringing a touch of vintage AI to your projects.
