---
title: AGENTS
---

<!-- TEMPLATE: AGENTS.template.md -->
<!--
AGENTS
Any text bounded by double curly braces {{like this}} is a placeholder for you to fill out.
Replace those placeholders with real paths, rules, and project constraints.

INSTRUCTIONS FOR THE AI AGENT:
This file defines your operational boundaries, tools, platforms, and roles.
Adhere strictly to the boundaries and prompts defined for your assigned persona.
-->

<!-- markdownlint-disable MD013 -->

# AGENTS

<!-- TOC location -->
## 🔍 Table of Contents
<!-- Maintained by script -->
- [AGENTS](#a-agents) <a id="toc-agents"></a> ^toc-agents
  - [📑 AI Primary Files](#a-aiprimaryfiles) <a id="toc-aiprimaryfiles"></a> ^toc-aiprimaryfiles
  - [💻 Application](#a-application) <a id="toc-application"></a> ^toc-application
  - [⚙️ Platform](#a-platform) <a id="toc-platform"></a> ^toc-platform
  - [👥 Core Agent Roster & Personas](#a-coreagentrosterpersonas) <a id="toc-coreagentrosterpersonas"></a> ^toc-coreagentrosterpersonas
  - [🛠️ Global Execution Rules & Governance](#a-globalexecutionrulesgovernance) <a id="toc-globalexecutionrulesgovernance"></a> ^toc-globalexecutionrulesgovernance
  - [🚫 File Restrictions](#a-filerestrictions) <a id="toc-filerestrictions"></a> ^toc-filerestrictions
    - [Do NOT alter Files](#a-donotalterfiles) <a id="toc-donotalterfiles"></a> ^toc-donotalterfiles
    - [Inline Tasks](#a-inlinetasks) <a id="toc-inlinetasks"></a> ^toc-inlinetasks
  - [📂 Project Context](#a-projectcontext) <a id="toc-projectcontext"></a> ^toc-projectcontext
  - [🚦 Interaction Rules & Handoff Protocols](#a-interactionruleshandoffprotocols) <a id="toc-interactionruleshandoffprotocols"></a> ^toc-interactionruleshandoffprotocols
    - [Multi-Agent Communication Style](#a-multiagentcommunicationstyle) <a id="toc-multiagentcommunicationstyle"></a> ^toc-multiagentcommunicationstyle
  - [🏗️ Verification and Architecture Anchors](#a-verificationandarchitectureanchors) <a id="toc-verificationandarchitectureanchors"></a> ^toc-verificationandarchitectureanchors
  - [📦 Build](#a-build) <a id="toc-build"></a> ^toc-build
  - [🚀 Go to...](#a-goto) <a id="toc-goto"></a> ^toc-goto

<a id="a-agents"></a>[TOC](#toc-agents)

## 📑 AI Primary Files
<a id="a-aiprimaryfiles"></a>[TOC](#toc-aiprimaryfiles)
- 🔸 [AGENTS.md](AGENTS.md)
- 🔹 [ARCHIVE.md](AIMD/ARCHIVE.md)
- 🔹 [BUILD.md](AIMD/BUILD.md)
- 🔹 [CODE.md](AIMD/CODE.md)
- 🔹 [DESIGN.md](AIMD/DESIGN.md)
- 🔹 [FEATURES.md](AIMD/FEATURES.md)
- 🔹 [LOG.md](AIMD/LOG.md)
- 🔹 [MANUAL.md](AIMD/MANUAL.md)
- 🔹 [README.md](README.md)
- 🔹 [SPEC.md](AIMD/SPEC.md)
- 🔹 [TASKS.md](AIMD/TASKS.md)
- 🔹 [TERMS.md](AIMD/TERMS.md)
- 🔹 [TESTING.md](AIMD/TESTING.md)
- 🔹 [VERSIONS.md](AIMD/VERSIONS.md)

---

---

## 💻 Application
<a id="a-application"></a>[TOC](#toc-application)
<!--
  Specify the core objective / purpose of the application.
  Provide a concise 1-2 sentence description of what system is being built.
-->
<!-- template: application description
- {{Describe the core application/extension being built here, e.g., "A background utility extension to streamline cross-platform environment handoffs and directory mapping workflows."}}
-->

---

## ⚙️ Platform
<a id="a-platform"></a>[TOC](#toc-platform)
<!--
  List the environment, target runner, code editors, OS,
  or platforms where this app compiles and executes.
-->
<!-- template: platform description
- {{Specify platforms, e.g., Windows 10, macOS, Cursor, VS Code, Node.js runtime environment, etc.}}
-->

---

## 👥 Core Agent Roster & Personas
<a id="a-coreagentrosterpersonas"></a>[TOC](#toc-coreagentrosterpersonas)
<!-- persona list -->
<!-- template: persona
AI Purpose: Defines a specific AI persona, its strategic purpose, and operational mindset. ### 1. {{Agent Role Name / e.g., Lead Architect}}
- **Persona Archetype:** {{e.g., Pragmatic, pedantic, security-focused expert code optimizer}}
- **Core Responsibility:** {{e.g., Designing system topology, verifying schema migrations, structural layouts}}
- **System Prompt / Identity:**

#### role
```text
  You are an expert... Your goal is to... Always prioritize...
```
-->

---

## 🛠️ Global Execution Rules & Governance
<a id="a-globalexecutionrulesgovernance"></a>[TOC](#toc-globalexecutionrulesgovernance)
<!--
Document strict instructions regarding what the AI can and cannot modify.
This includes package.json rules, read-only third party vendor folders, etc.
-->

---

## 🚫 File Restrictions
<a id="a-filerestrictions"></a>[TOC](#toc-filerestrictions)
<!--
List any strict file edits rules, e.g., "Do not create new files unless requested", "Do not modify dependencies without human approval"
-->

---

### Do NOT alter Files
<a id="a-donotalterfiles"></a>[TOC](#toc-donotalterfiles)
<!--
List
-->

---

### Inline Tasks
<a id="a-inlinetasks"></a>[TOC](#toc-inlinetasks)
<!--
List
Specify inline system tasks parser format, e.g., "Comments in the form of `;! {instructions}` or `//! {instructions}` found in source code are active AI Tasks"
-->

---

## 📂 Project Context
<a id="a-projectcontext"></a>[TOC](#toc-projectcontext)
<!--
List
Detail the environment context (e.g., test fixtures, sandboxing, permissions, emulator settings, mock data rules).
Describe any local development directories or resources, e.g., "The standalone mock database file layout is configured for sandbox execution loops only."
-->

---

## 🚦 Interaction Rules & Handoff Protocols
<a id="a-interactionruleshandoffprotocols"></a>[TOC](#toc-interactionruleshandoffprotocols)

### Multi-Agent Communication Style
<a id="a-multiagentcommunicationstyle"></a>[TOC](#toc-multiagentcommunicationstyle)
<!-- AI Purpose: Instructs the AI on how to pass tasks to other top-level signatures or ask for human validation.
List handoffs
-->
<!-- template: handoff
#### {{handoff title}}
- **Handoff Phrase:** {{info}}
- **Escalation Trigger:**  {{info}}
-->

---

## 🏗️ Verification and Architecture Anchors
<a id="a-verificationandarchitectureanchors"></a>[TOC](#toc-verificationandarchitectureanchors)
<!--
List Anchors
-->
<!-- template: anchor
#### {{handoff title}}
List Anchor items
-->
<!-- template: anchor item
- **{{anchor title}}:** {{info}}
-->

---

## 📦 Build
<a id="a-build"></a>[TOC](#toc-build)
<!--
  INSTRUCTION: List verification rules that MUST happen before complete cycles are closed.
  For example, running 'lint_applet' or 'compile_applet'.
-->
<!--
List Build Stages
-->
<!-- template: build stage
### {{build Stage Title}}
Build Stage components list
-->
<!-- template: build stage component
- **{{stage title}}:** {{info}}
-->

---
## 🚀 Go to...
<a id="a-goto"></a>[TOC](#toc-goto)
- 🔸 [AGENTS.md](AGENTS.md)
- 🔹 [ARCHIVE.md](AIMD/ARCHIVE.md)
- 🔹 [BUILD.md](AIMD/BUILD.md)
- 🔹 [CODE.md](AIMD/CODE.md)
- 🔹 [DESIGN.md](AIMD/DESIGN.md)
- 🔹 [FEATURES.md](AIMD/FEATURES.md)
- 🔹 [LOG.md](AIMD/LOG.md)
- 🔹 [MANUAL.md](AIMD/MANUAL.md)
- 🔹 [README.md](README.md)
- 🔹 [SPEC.md](AIMD/SPEC.md)
- 🔹 [TASKS.md](AIMD/TASKS.md)
- 🔹 [TERMS.md](AIMD/TERMS.md)
- 🔹 [TESTING.md](AIMD/TESTING.md)
- 🔹 [VERSIONS.md](AIMD/VERSIONS.md)

<!-- TEMPLATE: AGENTS.template.md -->
