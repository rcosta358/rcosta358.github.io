# Ricardo Costa

- Software Engineering MSc student in Lisbon, Portugal, focused on building reliable software and developer tools
- Strongest interests are static analysis, type systems, compilers, software verification, and tools that improve the way developers code
- Also experienced in full-stack web development, cloud computing, and mobile applications.
- Email: rcosta.ms358@gmail.com
- GitHub: https://github.com/rcosta358
- LinkedIn: https://www.linkedin.com/in/rcosta358
- Current affiliation: LASIGE, FCUL
- Main fields: Software Engineering, Static Analysis, Type Systems, Developer Tools, Web/Cloud Applications

## Background

### Education

#### BSc in Computer Science and Engineering (2021-2024)

- Instituto Superior de Engenharia de Lisboa (ISEL)
- Main Courses: Programming (19/20), Software Laboratory (20/20), Algorithms and Data Structures (16/20), Web Programming (17/20), Mobile Programming (16/20)
- Final Grade: 15/20
- Final Project: “NoteSpace - Multi-platform Web Application for Real-Time Document Collaboration & Sharing” (18/20)
  - Web platform for real-time collaborative editing and sharing of documents
  - Real-time collaborative documents editing with automatic conflict resolution using CRDTs
  - Markdown support with live rendering, with formatting such as headers, list items, inline styles, and more
  - Document organization within workspaces and folders in a file-system hierarchy and workspace-based access control
  - Version control system for document history to restore previous document versions


#### MSc in Computer Science and Engineering (2024-2026)

- Faculdade de Ciências da Universidade de Lisboa (FCUL)
- Specialization: Software Engineering
- Main Courses: Software Design (17/20), Cloud Computing (18/20), Software Security (17/20), Software Verification and Validation (16/20), Compiling Techniques (18/20), Mobile Computing (19/20)
- Current Grade: 17/20
- Thesis: "Improving the Usability of LiquidJava"
  - LiquidJava is an additional type checker for Java that uses liquid types and typestates to provide stronger compile-time guarantees about programs, enabling developers to catch more bugs earlier in the development process
  - [liquidjava](https://github.com/liquid-java/liquidjava), 70+ PRs merged
  - [vscode-liquidjava](https://github.com/liquid-java/vscode-liquidjava), 40+ PRs merged
  - Thesis focuses on improving the developer experience, with:
    - Better diagnostic messages to help developers understand and resolve verification errors
    - Enhanced VS Code extension with features that make it easier to read, write, and debug refinements directly in the editor
    - Improvements to the core verifier to make it more expressive and robust in real-world Java codebases

## Technical Skills

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

- Lightweight serverless AI code review application powered by Cloudflare Workers AI, with Cloudflare KV used for persistent review storage.
- Technologies: TypeScript, React, Vite, Cloudflare Workers, Cloudflare Workers AI, Cloudflare KV
- Keywords: ai code review, workers ai, serverless, developer tools

### [LiquidJava](https://github.com/liquid-java/liquidjava) (2025)

- Additional type checker for Java that uses liquid types and typestates to provide stronger compile-time guarantees, helping developers catch more bugs earlier in the development process. Contributed with 70+ merged PRs focused on improving diagnostic messages and enhancing the core verifier.
- Technologies: Java, ANTLR, Spoon, Z3
- Keywords: static analysis, type systems, software verification, developer tools, cli

### [vscode-liquidjava](https://github.com/liquid-java/vscode-liquidjava) (2025)

- VS Code extension for LiquidJava that automatically performs the verification and reports diagnostics in the editor using LSP. Contributed with 40+ merged PRs focused on improving the developer experience to make it easier to read, write, and debug refinements. Also implemented a custom interactive webview for exploring diagnostics in more detail, inspecting the verification context, and visualizing typestate protocols as state machine diagrams using Mermaid.
- Technologies: TypeScript, Java, LSP
- Keywords: static analysis, type systems, software verification, developer tools, vs code extension, lsp

### [liquid-rust](https://github.com/rcosta358/liquid-rust) (2025)

- Toy liquid type checker for Rust created to explore liquid types and SMT-based verification before working on LiquidJava.
- Technologies: Rust, Logos, LALRPOP, Z3
- Keywords: static analysis, software verification, prototype

### [aguda-rs](https://github.com/rcosta358/aguda-rs) (2025)

- Compiler in Rust for the AGUDA programming language, a simple imperative language where programs consist solely of expressions 
- Technologies: Rust, Logos, LALRPOP, LLVM, Inkwell
- Keywords: compilers, lexing, parsing, ASTs, code generation

### [Threadit](https://github.com/ThreaditApp/Threadit) (2025)

- Reddit clone REST API backed by a distributed microservices architecture, using gRPC for service communication and deployed on Google Cloud Platform with Kubernetes.
- Technologies: gRPC, Google Cloud Platform, Docker, Kubernetes
- Keywords: microservices, rest api, distributed systems, cloud computing

### [passman](https://github.com/rcosta358/passman) (2025)

- Secure multi-user CLI password manager with local encrypted vaults, AES-256-GCM-SIV encryption, Argon2id key derivation, credential leak prevention using secrecy-oriented Rust crates, session and clipboard TTL behavior, password generation, and password strength analysis.
- Technologies: Rust
- Keywords: password manager, encryption, cli, local storage, credential security

### [url-shortener](https://github.com/rcosta358/url-shortener) (2025)

- Simple URL shortener built using Rust and the Axum web framework.
- Technologies: Rust, Axum
- Keywords: url shortener, rest api, web application

### [NoteSpace](https://github.com/NoteSpaceTeam/NoteSpace) (2024)

- Multi-platform web application for real-time document collaboration and sharing, with CRDT-based conflict resolution, live Markdown rendering, workspace and folder organization, workspace-based access control, and document version history.
- Technologies: TypeScript, React, Vite, Node.js, Express, Socket.IO, PostgreSQL, Firebase, Docker 
- Keywords: real-time collaborative editing, document sharing, access control, version history, websockets

### [JSON-Serializer](https://github.com/rcosta358/JSON-Serializer) (2024)

- JSON serialization, deserialization, and accessor library in Rust and Go using a pipeline architecture.
- Technologies: Rust, Go
- Keywords: json, serialization, deserialization

### [VoidNetwork](https://github.com/VoidNetworkApp/VoidNetwork) (2024)

- Stranger Things-inspired Android application for cross-dimensional communication through location-based portals and binary-coded signals, with Firebase-backed real-time messages, portal synchronization, authentication, device sensor integrations, Mapbox maps, ML Kit image detection, and Supabase file storage.
- Technologies: Kotlin, Android, Jetpack Compose, Mapbox, ML Kit, Firebase, Supabase
- Keywords: mobile app, real-time communication, maps, sensors

### [game-of-life](https://github.com/rcosta358/game-of-life) (2024)

- Conway's Game of Life implementation built with Python and Pygame, featuring an interactive cellular automaton simulation with grid-based generation updates using the classic birth and survival rules.
- Technologies: Python, Pygame
- Keywords: simulation, algorithms 

### [GomokuMobile](https://github.com/rcosta358/GomokuMobile) (2024)

- Kotlin Android client for playing Gomoku online through a remote HTTP API.
- Technologies: Kotlin, Android, Jetpack Compose
- Keywords: android, mobile app, board game

### [GomokuWeb](https://github.com/rcosta358/GomokuWeb) (2024)

- HTTP API server and React frontend for playing Gomoku online, structured as a full-stack web application with separate backend and frontend concerns and REST-oriented client-server communication.
- Technologies: TypeScript, React, Spring Boot, PostgreSQL, Docker
- Keywords: full-stack web app, web api, board game

### [Board.io](https://github.com/rcosta358/Board.io) (2023)

- Trello-like web application for practical project tracking, organizing work with boards, lists, and cards in a Kanban-inspired workflow.
- Technologies: Kotlin, PostgreSQL, Http4k, JavaScript
- Keywords: task management, todo app, kanban

### [Sketch.io](https://github.com/Programmaters/Sketch.io) (2023)

- Online multiplayer drawing and guessing game with a real-time multiplayer game loop, separate client and server architecture, Socket.IO-based communication, and collaborative team development.
- Technologies: TypeScript, React, Node.js, JavaScript, Socket.IO, p5.js
- Keywords: multiplayer drawing game, websockets

### [disk-analyzer](https://github.com/rcosta358/disk-analyzer) (2023)

- Python CLI tool for local disk inspection, scanning directories and listing large files or folders through directory traversal and file-size analysis.
- Technologies: Python
- Keywords: CLI, disk analysis, directory traversal, storage usage

### [Checkers-Compose-Desktop](https://github.com/rcosta358/Checkers-Compose-Desktop) (2023)

- Two-player checkers board game built with Compose Desktop, implementing a classic turn-based board game while exploring Kotlin desktop UI development.
- Technologies: Kotlin, Compose Desktop
- Keywords: desktop app, turn based board game

### [Chelas-Movies-Database](https://github.com/rcosta358/Chelas-Movies-Database) (2023)

- Movie search and organization web application focused on a search-driven movie database interface and practice with data-driven user interfaces.
- Technologies: JavaScript, Node.js, Express, Elasticsearch
- Keywords: web app, movie database

### [HTTP-Client](https://github.com/rcosta358/HTTP-Client) (2023)

- Simple HTTP client implemented in Python
- Technologies: Python
- Keywords: network programming, HTTP client, low-level requests

### [Wordle](https://github.com/Programmaters/Wordle) (2023)

- Wordle web game built as a single-page implementation of the word-guessing game, with a frontend game UI, a small Express-backed setup, and collaborative Programmaters development.
- Technologies: JavaScript, Node.js, Express
- Keywords: wordle, web game, spa

### [OpenCV-Object-Detection](https://github.com/rcosta358/OpenCV-Object-Detection) (2022)

- Real-time object detection project using Python and OpenCV, built as a computer vision pipeline for experimenting with image processing.
- Technologies: Python, OpenCV
- Keywords: computer vision, object detection, image processing

### [AI-Chatbot](https://github.com/rcosta358/AI-Chatbot) (2022)

- Simple neural-network-based AI chatbot built with Python and TensorFlow as practice with deep learning concepts and conversational AI experimentation.
- Technologies: Python, TensorFlow
- Keywords: ai chatbot, deep learning

### [Advent of Code](https://github.com/rcosta358/AdventOfCode) (2022)

- Solutions to the Advent of Code programming puzzles across multiple years in Python, showcasing problem-solving skills and algorithmic thinking.
- Technologies: Python
- Keywords: advent of code, programming puzzles, algorithms, problem solving

### [CPU-RAM-Disk-Monitor](https://github.com/rcosta358/CPU-RAM-Disk-Monitor) (2022)

- Command-line CPU, RAM, and disk usage monitor built in Python, using psutil and Python data classes to inspect local system resources and track CPU load, memory usage, and disk usage.
- Technologies: Python
- Keywords: cli, system monitor, resource usage, local tooling

### [Pathfinding-Visualizer](https://github.com/rcosta358/Pathfinding-Visualizer) (2022)

- Desktop pathfinding visualizer built with Kotlin Compose Desktop, offering an interactive way to explore algorithms through direct visual feedback.
- Technologies: Kotlin, Compose Desktop
- Keywords: pathfinding, algorithm visualization, desktop app, interactive ui

### [Java-GUI-Apps](https://github.com/rcosta358/Java-GUI-Apps) (2022)

- Collection of small Java desktop applications built with Java GUI libraries as early practice with desktop UI and event-driven programming.
- Technologies: Java, AWT, Swing
- Keywords: desktop apps, GUI

### [Notepad-Desktop](https://github.com/rcosta358/Notepad-Desktop) (2022)

- Desktop notepad application built with Node.js and Electron as a cross-platform text-editing utility focused on desktop UI fundamentals.
- Technologies: JavaScript, Node.js, Electron
- Keywords: desktop app, text editor, electron

### [elon-bot](https://github.com/rcosta358/elon-bot) (2022)

- Discord bot with slash commands for greetings, games, arithmetic, status changes, and utility actions, including external API features such as translation and GitHub repository lookup.
- Technologies: Python
- Keywords: discord bot, slash commands, API integration, command-driven interactions

### [High Contrast](https://github.com/rcosta358/High-Contrast) (2022)

- 2D platformer mobile game built in Unity with C# as a side project to explore game development.
- Technologies: Unity, C#
- Keywords: mobile game, 2d platformer, game dev
