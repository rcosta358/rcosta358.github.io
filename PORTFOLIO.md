# Ricardo Costa

- Software Engineering MSc student in Lisbon, Portugal, focused on building reliable software and developer tools
- Strongest interests are static analysis, type systems, compilers, software verification, and tools that improve the way developers code
- Also experienced in full-stack web development, cloud computing, and mobile applications.

## Contact Information
- **Email:** rcosta.ms358@gmail.com
- **GitHub:** https://github.com/rcosta358
- **LinkedIn:** https://www.linkedin.com/in/rcosta358

## Education

#### BSc in Computer Science and Engineering (2021-2024)

- Instituto Superior de Engenharia de Lisboa (ISEL)
- **Main Courses:** Programming (19/20), Software Laboratory (20/20), Algorithms and Data Structures (16/20), Web Programming (17/20), Mobile Programming (16/20)
- **Final Grade:** 15/20
- **Final Project:** “NoteSpace - Multi-platform Web Application for Real-Time Document Collaboration & Sharing” (18/20)
  - Web platform for real-time collaborative editing and sharing of documents
  - Real-time collaborative documents editing with automatic conflict resolution using CRDTs
  - Markdown support with live rendering, with formatting such as headers, list items, inline styles, and more
  - Document organization within workspaces and folders in a file-system hierarchy and workspace-based access control
  - Version control system for document history to restore previous document versions

#### MSc in Computer Science and Engineering (2024-2026)

- **Faculdade de Ciências da Universidade de Lisboa (FCUL)**
- **Specialization:** Software Engineering
- **Main Courses:** Software Design (17/20), Cloud Computing (18/20), Software Security (17/20), Software Verification and Validation (16/20), Compiling Techniques (18/20), Mobile Computing (19/20)
- **Current Grade:** 17/20
- **Position:** Research Fellow @ LASIGE
- **Thesis:** "Improving the Usability of LiquidJava"
  - LiquidJava is an additional type checker for Java that uses liquid types and typestates to provide stronger compile-time guarantees about programs, enabling developers to catch more bugs earlier in the development process
  - [liquidjava](https://github.com/liquid-java/liquidjava), 70+ PRs merged
  - [vscode-liquidjava](https://github.com/liquid-java/vscode-liquidjava), 40+ PRs merged
  - Thesis focuses on improving the developer experience, with:
    - Better diagnostic messages to help developers understand and resolve verification errors
    - Enhanced VS Code extension with features that make it easier to read, write, and debug refinements directly in the editor
    - Improvements to the core verifier to make it more expressive and robust in real-world Java codebases

## Skills

### Programming Languages

Python, Java, JavaScript, TypeScript, Rust, Kotlin, Go, C, C#

### Compilers and Static Analysis

Parsing, ASTs, type systems, liquid types, refinement types, typestates, SMT solvers, code generation, LLVM

### Cloud and DevOps

Google Cloud Platform, Cloudflare Workers, Docker, Kubernetes, Git, Linux

### Web Development

HTML, CSS, React, Node.js, Express, Spring Boot, Vite, Webpack, REST APIs, WebSockets, Socket.IO

### Mobile and Desktop Development

Android, Jetpack Compose, Compose Desktop, Electron, Unity

### Databases and Storage

PostgreSQL, Firestore, Cloudflare KV, MongoDB, Elasticsearch

## Projects

### [cf_ai_code_reviewer](https://github.com/rcosta358/cf_ai_code_reviewer) (2026)

- **Title:** Lightweight AI code review application
- **Description:** Serverless AI code review application powered by Cloudflare Workers AI, with a React frontend and Cloudflare KV used for persistent review storage.
- **Technologies:** TypeScript, React, Vite, Cloudflare Workers, Cloudflare Workers AI, Cloudflare KV
- **Keywords:** ai code review, workers ai, serverless, developer tools
- **Role:** Author
- **Context:** Personal project

### [LiquidJava](https://github.com/liquid-java/liquidjava) (2025)

- **Title:** Liquid type checker for Java (MSc Thesis)
- **Description:** Additional type checker for Java that uses liquid types and typestates to provide stronger compile-time guarantees, helping developers catch more bugs earlier in the development process. Contributed with 70+ merged PRs focused on improving diagnostic messages and enhancing the core verifier.
- **Technologies:** Java, ANTLR, Spoon, Z3
- **Keywords:** static analysis, type systems, software verification, developer tools, cli
- **Role:** Contributor
- **Context:** Academic project

### [vscode-liquidjava](https://github.com/liquid-java/vscode-liquidjava) (2025)

- **Title:** LiquidJava VS Code extension (MSc Thesis)
- **Description:** VS Code extension that automatically runs the LiquidJava verification and reports diagnostics through the Language Server Protocol (LSP). Contributed with 40+ merged PRs focused on improving the developer experience to make it easier to read, write, and debug refinements. Also implemented a custom interactive webview for exploring diagnostics in more detail, inspecting the verification context, and visualizing typestate protocols as state machine diagrams using Mermaid.
- **Technologies:** TypeScript, Java, LSP
- **Keywords:** static analysis, type systems, software verification, developer tools, vs code extension, lsp
- **Role:** Contributor
- **Context:** Academic project

### [liquid-rust](https://github.com/rcosta358/liquid-rust) (2025)

- **Title:** Experimental liquid type checker for Rust
- **Description:** Very simple verifier created to explore liquid types, parsing, and SMT-based verification before working on LiquidJava.
- **Technologies:** Rust, Logos, LALRPOP, Z3
- **Keywords:** static analysis, software verification, prototype
- **Role:** Author
- **Context:** Personal project

### [aguda-rs](https://github.com/rcosta358/aguda-rs) (2025)

- **Title:** Rust compiler for the AGUDA programming language
- **Description:** Compiler for a small imperative expression-oriented language, covering lexing, parsing, AST construction, and LLVM-based code generation.
- **Technologies:** Rust, Logos, LALRPOP, LLVM, Inkwell
- **Keywords:** compilers, lexing, parsing, ASTs, code generation
- **Role:** Author
- **Context:** Academic project

### [Threadit](https://github.com/ThreaditApp/Threadit) (2025)

- **Title:** Reddit clone cloud-native web application
- **Description:** REST API backed by a microservices architecture, using gRPC for internal service communication and deployed on Google Cloud Platform with Kubernetes.
- **Technologies:** gRPC, Google Cloud Platform, Docker, Kubernetes
- **Keywords:** microservices, rest api, distributed systems, cloud computing
- **Role:** Co-author
- **Context:** Academic project

### [passman](https://github.com/rcosta358/passman) (2025)

- **Title:** Secure multi-user CLI password manager
- **Description:** Local password manager with encrypted vaults, AES-256-GCM-SIV encryption, Argon2id key derivation, credential leak prevention, session and clipboard TTL behavior, password generation, and password strength analysis.
- **Technologies:** Rust
- **Keywords:** password manager, encryption, cli, local storage, credential security
- **Role:** Author
- **Context:** Personal project

### [url-shortener](https://github.com/rcosta358/url-shortener) (2025)

- **Title:** Rust URL shortener web service
- **Description:** Simple web application for creating and resolving shortened URLs, built as a REST-oriented service with the Axum framework.
- **Technologies:** Rust, Axum
- **Keywords:** url shortener, rest api, web application
- **Role:** Author
- **Context:** Personal project

### [NoteSpace](https://github.com/NoteSpaceTeam/NoteSpace) (2024)

- **Title:** Multi-platform web application for real-time document collaboration and sharing (BSc Final Project)
- **Description:** Document collaboration using CRDT-based conflict resolution, live Markdown rendering, workspace access control, folder organization, and document version history.
- **Technologies:** TypeScript, React, Vite, Node.js, Express, Socket.IO, PostgreSQL, Firebase, Docker 
- **Keywords:** real-time collaborative editing, document sharing, access control, version history, websockets
- **Role:** Co-author
- **Context:** Academic project

### [JSON-Serializer](https://github.com/rcosta358/JSON-Serializer) (2024)

- **Title:** JSON serialization and deserialization library
- **Description:** Rust and Go library for converting data to and from JSON, with accessor utilities and a pipeline-oriented internal architecture.
- **Technologies:** Rust, Go
- **Keywords:** json, serialization, deserialization
- **Role:** Author
- **Context:** Academic project

### [VoidNetwork](https://github.com/VoidNetworkApp/VoidNetwork) (2024)

- **Title:** Android application for location-based interactive communication
- **Description:** Stranger Things-inspired mobile app for cross-dimensional communication through portals and binary-coded signals, with Firebase-backed real-time messages, portal synchronization, authentication, device sensors, Mapbox maps, ML Kit image detection, and Supabase file storage.
- **Technologies:** Kotlin, Android, Jetpack Compose, Mapbox, ML Kit, Firebase, Supabase
- **Keywords:** mobile app, real-time communication, maps, sensors
- **Role:** Co-author
- **Context:** Academic project

### [game-of-life](https://github.com/rcosta358/game-of-life) (2024)

- **Title:** Interactive Conway's Game of Life simulator
- **Description:** Python and Pygame implementation of the classic cellular automaton, with grid-based generation updates using Conway's birth and survival rules.
- **Technologies:** Python, Pygame
- **Keywords:** simulation, algorithms
- **Role:** Author
- **Context:** Personal project

### [GomokuWeb](https://github.com/rcosta358/GomokuWeb) (2024)

- **Title:** Full-stack web application for online Gomoku
- **Description:** HTTP API server and React frontend for playing Gomoku online, structured with separate backend and frontend concerns and REST-oriented client-server communication.
- **Technologies:** TypeScript, React, Spring Boot, PostgreSQL, Docker
- **Keywords:** full-stack web app, web api, board game
- **Role:** Co-author
- **Context:** Academic project

### [GomokuMobile](https://github.com/rcosta358/GomokuMobile) (2024)

- **Title:** Android client for online Gomoku
- **Description:** Mobile application for playing Gomoku through a remote HTTP API, built with Kotlin and Jetpack Compose.
- **Technologies:** Kotlin, Android, Jetpack Compose
- **Keywords:** android, mobile app, board game
- **Role:** Co-author
- **Context:** Academic project

### [Board.io](https://github.com/rcosta358/Board.io) (2023)

- **Title:** To-do list and task management web application
- **Description:** Trello-like tool for organizing work through boards, lists, and cards in a practical task management workflow.
- **Technologies:** Kotlin, PostgreSQL, Http4k, JavaScript
- **Keywords:** task management, todo app, kanban
- **Role:** Co-author
- **Context:** Academic project

### [Sketch.io](https://github.com/Programmaters/Sketch.io) (2023)

- **Title:** Online multiplayer drawing and guessing game
- **Description:** Real-time web game with a separate client and server architecture, Socket.IO-based communication, a multiplayer game loop, and p5.js drawing interactions.
- **Technologies:** TypeScript, React, Node.js, JavaScript, Socket.IO, p5.js
- **Keywords:** multiplayer drawing game, websockets
- **Role:** Co-author
- **Context:** Friend project

### [disk-analyzer](https://github.com/rcosta358/disk-analyzer) (2023)

- **Title:** CLI tool for local disk usage inspection
- **Description:** Python command-line utility that scans directories and lists large files or folders using directory traversal and file-size analysis.
- **Technologies:** Python
- **Keywords:** cli, disk analysis, directory traversal, storage usage
- **Role:** Author
- **Context:** Personal project

### [Checkers-Compose-Desktop](https://github.com/rcosta358/Checkers-Compose-Desktop) (2023)

- **Title:** Desktop checkers game built with Kotlin
- **Description:** Two-player checkers application implementing the classic turn-based board game while exploring Compose Desktop UI development.
- **Technologies:** Kotlin, Compose Desktop
- **Keywords:** desktop app, turn based board game
- **Role:** Co-author
- **Context:** Academic project

### [Chelas-Movies-Database](https://github.com/rcosta358/Chelas-Movies-Database) (2023)

- **Title:** Search-driven movie database web application
- **Description:** Web app for searching and organizing movie information, built around a data-driven interface backed by Elasticsearch.
- **Technologies:** JavaScript, Node.js, Express, Elasticsearch
- **Keywords:** web app, movie database
- **Role:** Co-author
- **Context:** Academic project

### [HTTP-Client](https://github.com/rcosta358/HTTP-Client) (2023)

- **Title:** HTTP client in Python
- **Description:** Simple HTTP client implementation for experimenting with network programming and manual request handling.
- **Technologies:** Python
- **Keywords:** network programming, HTTP client, low-level requests
- **Role:** Co-author
- **Context:** Academic project

### [Wordle](https://github.com/Programmaters/Wordle) (2023)

- **Title:** Wordle clone web app
- **Description:** Browser implementation of the word-guessing game, with a frontend game UI and a small Express-backed setup developed collaboratively by Programmaters.
- **Technologies:** JavaScript, Node.js, Express
- **Keywords:** wordle, web game, spa
- **Role:** Co-author
- **Context:** Friend project

### [OpenCV-Object-Detection](https://github.com/rcosta358/OpenCV-Object-Detection) (2022)

- **Title:** Real-time object detection with OpenCV
- **Description:** Python and OpenCV computer vision project for experimenting with image processing and real-time object detection.
- **Technologies:** Python, OpenCV
- **Keywords:** computer vision, object detection, image processing
- **Role:** Author
- **Context:** Personal project

### [AI-Chatbot](https://github.com/rcosta358/AI-Chatbot) (2022)

- **Title:** Neural-network-based AI chatbot
- **Description:** Simple conversational AI project built with Python and TensorFlow as practice with deep learning concepts.
- **Technologies:** Python, TensorFlow
- **Keywords:** ai chatbot, deep learning
- **Role:** Author
- **Context:** Personal project

### [Advent of Code](https://github.com/rcosta358/AdventOfCode) (2022)

- **Title:** Advent of Code programming puzzle solutions
- **Description:** Python solutions to Advent of Code challenges across multiple years, focused on algorithmic problem solving and programming practice.
- **Technologies:** Python
- **Keywords:** advent of code, programming puzzles, algorithms, problem solving
- **Role:** Author
- **Context:** Personal project

### [CPU-RAM-Disk-Monitor](https://github.com/rcosta358/CPU-RAM-Disk-Monitor) (2022)

- **Title:** Command-line system resource monitor
- **Description:** Python CLI utility using psutil and data classes to inspect CPU load, memory usage, and disk usage on a local machine.
- **Technologies:** Python
- **Keywords:** cli, system monitor, resource usage, local tooling
- **Role:** Author
- **Context:** Personal project

### [Pathfinding-Visualizer](https://github.com/rcosta358/Pathfinding-Visualizer) (2022)

- **Title:** Desktop pathfinding algorithm visualizer
- **Description:** Kotlin Compose Desktop application for interactively exploring pathfinding algorithms through direct visual feedback.
- **Technologies:** Kotlin, Compose Desktop
- **Keywords:** pathfinding, algorithm visualization, desktop app, interactive ui
- **Role:** Author
- **Context:** Personal project

### [Java-GUI-Apps](https://github.com/rcosta358/Java-GUI-Apps) (2022)

- **Title:** Collection of Java desktop GUI applications
- **Description:** Small desktop applications built with Java GUI libraries as early practice with event-driven programming and desktop interface development.
- **Technologies:** Java, AWT, Swing
- **Keywords:** desktop apps, gui
- **Role:** Author
- **Context:** Personal project

### [Notepad-Desktop](https://github.com/rcosta358/Notepad-Desktop) (2022)

- **Title:** Cross-platform desktop notepad application
- **Description:** Text-editing utility built with Node.js and Electron, focused on desktop UI fundamentals and simple local note editing.
- **Technologies:** JavaScript, Node.js, Electron
- **Keywords:** desktop app, text editor, electron
- **Role:** Author
- **Context:** Personal project

### [elon-bot](https://github.com/rcosta358/elon-bot) (2022)

- **Title:** Discord bot with slash commands
- **Description:** Python Discord bot with slash commands for greetings, games, arithmetic, status changes, translation, GitHub repository lookup, and other utility actions.
- **Technologies:** Python
- **Keywords:** discord bot, slash commands, API integration, command-driven interactions
- **Role:** Author
- **Context:** Personal project

### [High Contrast](https://github.com/rcosta358/High-Contrast) (2022)

- **Title:** 2D mobile platformer game
- **Description:** Unity and C# side project for exploring game development through a simple mobile platformer.
- **Technologies:** Unity, C#
- **Keywords:** mobile game, 2d platformer, game dev
- **Role:** Author
- **Context:** Personal project
